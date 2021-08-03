import { getDocument } from 'pdfjs-dist';
import { PDFDocumentProxy } from 'pdfjs-dist/types/display/api';
import { extractMarksFromPage, MarkRecord } from 'ourmarks';
import { saveAs } from 'file-saver';

import JSZip from 'jszip';
import moment from 'moment';

let nextEntryId = 0;

export default class MarksDocument {
    /**
     * An incremental id representing the document.
     */
    readonly id = nextEntryId++;

    /**
     * The extracted marks records from the document.
     * Gets filled as the pages get processed.
     */
    readonly records: Readonly<MarkRecord>[] = [];

    /**
     * A callback that's triggered whenever the state of the document is updated.
     */
    onUpdate?: (document: MarksDocument) => void;

    /**
     * The number of pages in the document,
     * available once the document has been loaded.
     */
    protected _pagesCount?: number;
    /**
     * The number of pages processed so far,
     * won't increment until the document gets loaded (pagesCount get defined).
     */
    protected _processedPages = 0;

    /**
     * If the processing fails due to some reason, this fields gets defined,
     * and represents the failure message.
     */
    protected _failureReason?: string;

    /**
     * Whether the document processed was started or not.
     */
    protected processingStarted = false;

    /**
     * The PDF.js document used internally for processing.
     */
    protected document?: PDFDocumentProxy;

    /**
     * Creates a new document object, but doesn't start the processing of it.
     * @param file The file representing the document.
     */
    constructor(public readonly file: File) { }

    /**
     * The number of pages in the document,
     * available once the document has been loaded.
     */
    get pagesCount() {
        return this._pagesCount;
    }

    /**
     * The number of pages processed so far,
     * won't increment until the document gets loaded (pagesCount get defined).
     */
    get processedPages() {
        return this._processedPages;
    }

    /**
     * If the processing fails due to some reason, this fields gets defined,
     * and represents the failure message.
     */
    get failureReason() {
        return this._failureReason;
    }

    /**
     * Exports the extracted records into a file of JSON data.
     * @returns The name of the file, and the data blob.
     */
    exportRecords(): [string, Blob] {
        const data = JSON.stringify(this.records, undefined, '\t');
        const blob = new Blob([data], { type: 'application/json;charset=utf-8' });
        const filename = this.file.name.replace(/.pdf$/, '.json');

        return [filename, blob];
    }

    /**
     * Exports the extracted records into a file of json data
     * and opens the file save dialog in the browser.
     */
    exportAndSaveRecords() {
        const [fileName, blob] = this.exportRecords();
        saveAs(blob, fileName);
    }

    /**
     * Starts the processing of the document.
     * Does proper error handling and never throws.
     */
    async startProcessing() {
        if (this.processingStarted) throw new Error('The processing was already started/attempted.');

        // Check the mime type of the file.
        if (this.file.type !== 'application/pdf') {
            this._failureReason = 'Unsupported document format';
            this.triggerUpdate();
            return;
        }

        try {
            await this.process();
        } catch (error) {
            console.error('Error while processing document:', error);

            this._failureReason = (this._pagesCount === undefined)
                ? 'Failed to load document'
                : `Failed to process page ${this._processedPages + 1}/${this._pagesCount}`;

            this.triggerUpdate();
        }

        // Cleanup the PDF.js document
        if (this.document) {
            this.document.destroy();
            delete this.document;
        }
    }

    /**
     * Do the actual processing of the document, but could throw errors.
     * @throws Errors on unexpected reasons.
     */
    protected async process() {
        // Load the file's content.
        const buffer = await this.file.arrayBuffer();
        const view = new Uint8Array(buffer);

        // Load the document.
        this.document = await getDocument(view).promise;
        this._pagesCount = this.document.numPages;
        this.triggerUpdate();

        // For each page.
        for (let pageNumber = 1; pageNumber <= this.document.numPages; pageNumber++) {
            // Load the page.
            const page = await this.document.getPage(pageNumber);

            // Extract the marks from the page.
            const pageRecords = await extractMarksFromPage(page);

            // Add the records to the whole document records.
            this.records.push(...pageRecords);

            // Increment the processed pages count and trigger an update.
            this._processedPages++;
            this.triggerUpdate();
        }
    }

    /**
     * Triggers the `onUpdate` callback, with proper error handling.
     */
    protected triggerUpdate() {
        if (!this.onUpdate) return;

        try {
            this.onUpdate(this);
        } catch (error) {
            console.error('Error while triggering \'onUpdate\':', error);
        }
    }

    static async exportAndSaveMultipleDocuments(documents: MarksDocument[]) {
        const zip = new JSZip();

        documents.forEach((document) => {
            const [fileName, blob] = document.exportRecords();
            zip.file(fileName, blob);
        });

        const data = await zip.generateAsync({ type: 'blob' });
        const filename = moment().format('[marks_]YYYY-MM-DD_HH-mm[.zip]');

        saveAs(data, filename);
    }
}
