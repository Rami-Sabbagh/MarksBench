import { Icon } from '@iconify/react';
import styles from '@styles/application.module.scss';

import Spacer from '@components/spacer';
import IconButton from '@components/icon-button';
import DocumentItem from '@components/document-item';
import { ChangeEventHandler, useCallback, useEffect, useRef, useState } from 'react';

import MarksDocument from '@lib/marks-document';

type TopBarProps = {
  allowClearAll?: boolean,
  onClearAll?: () => void,
};

function TopBar({ allowClearAll, onClearAll }: TopBarProps) {
  return <div className={styles.top_bar}>
    <span className={styles.title}>MarksBench - v{process.env.VERSION}</span>

    <Spacer />

    <IconButton icon='app:clear-all' onClick={onClearAll} disabled={!allowClearAll} />
    <IconButton icon='app:github' onClick={() => window.open('https://github.com/Rami-Sabbagh/MarksBench/', '_blank')} />
    <IconButton icon='app:help' disabled />
  </div>
}

type BottomBarProps = {
  allowSaveZip?: boolean,
  onSaveZip?: () => void,
  onFilesSelection?: (files: FileList) => void;
};

function BottomBar({ allowSaveZip, onSaveZip, onFilesSelection }: BottomBarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onFileInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (!event.target.files || !onFilesSelection) return;
    onFilesSelection(event.target.files);
  }, [onFilesSelection]);

  return <div className={styles.bottom_bar}>
    <span className={styles.footer}>
      Made with <Icon className={styles.heart} icon='app:heart' inline />{' '}
      by <a href='https://github.com/Rami-Sabbagh/' rel='noreferrer' target='_blank'>Rami Sabbagh</a>
    </span>

    <Spacer />

    <IconButton icon='app:table' disabled />
    <IconButton icon='app:zip' onClick={onSaveZip} disabled={!allowSaveZip} />
    <IconButton icon='app:add-file' onClick={openFileDialog} />

    <input
      type='file'
      ref={fileInputRef}
      onChange={onFileInputChange}
      style={{ display: 'none' }}
      accept='application/pdf'
      multiple
    />
  </div>;
}

function Placeholder() {
  return <div className={styles.placeholder}>
    <Icon className={styles.icon} icon='app:document' />

    <div className={styles.title}>
      Drop exams marks documents here
    </div>
    <div className={styles.sub_title}>
      Which you can download from the{' '}
      <a href='http://damascusuniversity.edu.sy/ite/index.php?func=7&set=14' rel='noreferrer' target='_blank'>
        faculty{"'"}s website
      </a>
    </div>

    <div className={styles.select_files_hint}>
      <span>or you can select the files</span>
      <Icon className={styles.arrow} icon='app:arrow-down' />
    </div>
  </div>;
}

type DocumentsListProps = {
  entries: MarksDocument[],
};

function DocumentsList({ entries }: DocumentsListProps) {
  return <div className={styles.documents_list}>
    <div className={styles.item_container}>
      {entries.map((entry) => <DocumentItem key={entry.id} item={entry} />)}
    </div>
  </div>;
}

export default function Home() {
  const [marksDocuments, setMarksDocuments] = useState<MarksDocument[]>([]);

  // TODO: Cleanup the code here and split it into reusable functions.

  const onDrop = useCallback<(ev: DragEvent) => void>((ev) => {
    ev.preventDefault();

    let files: File[] = [];

    if (ev.dataTransfer?.items) {
      const items = ev.dataTransfer.items;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind !== 'file') continue;
        const file = items[i].getAsFile();
        if (file !== null) files.push(file);
      }

    } else if (ev.dataTransfer?.files) {
      const items = ev.dataTransfer.files;
      for (let i = 0; i < items.length; i++) files.push(items[i]);
    }

    const documents = files.map((file) => new MarksDocument(file));
    documents.forEach((marksDocument) => marksDocument.startProcessing().catch(console.error));

    setMarksDocuments(marksDocuments.concat(documents));
  }, [marksDocuments]);

  // This is very important for dragging and dropping to work!
  const onDragOver = useCallback<(ev: DragEvent) => void>((ev) => {
    ev.preventDefault();
  }, []);

  const onFilesSelection = useCallback((filesList: FileList) => {
    const files = [];
    for (let i = 0; i < filesList.length; i++) files.push(filesList[i]);

    const documents = files.map((file) => new MarksDocument(file));
    documents.forEach((marksDocument) => marksDocument.startProcessing().catch(console.error));

    setMarksDocuments(marksDocuments.concat(documents));
  }, [marksDocuments]);

  useEffect(() => {
    document.addEventListener('drop', onDrop);
    document.addEventListener('dragover', onDragOver);

    return () => {
      document.removeEventListener('dragover', onDragOver);
      document.removeEventListener('drop', onDrop);
    };
  }, [onDrop, onDragOver]);

  const onSaveZip = useCallback(() => {
    MarksDocument.exportAndSaveMultipleDocuments(marksDocuments);
  }, [marksDocuments]);

  // TODO: Cancel the under-processing documents properly!

  return (
    <div className={styles.drop_zone}>
      <div className={styles.application}>
        <TopBar
          allowClearAll={marksDocuments.length !== 0}
          onClearAll={() => setMarksDocuments([])}
        />
        {marksDocuments.length === 0 && <Placeholder />}
        {marksDocuments.length !== 0 && <DocumentsList entries={marksDocuments} />}
        <BottomBar
          onFilesSelection={onFilesSelection}
          allowSaveZip={marksDocuments.length !== 0}
          onSaveZip={onSaveZip}
        />
      </div>
    </div>
  );
}
