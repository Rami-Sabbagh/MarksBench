import { Icon } from '@iconify/react';
import styles from '@styles/application.module.scss';

import Spacer from '@components/spacer';
import IconButton from '@components/icon-button';
import DocumentItem from '@components/document-item';
import { useCallback, useEffect } from 'react';

import * as pdfjs from 'pdfjs-dist';
import { extractMarksFromDocument } from 'ourmarks';

pdfjs.GlobalWorkerOptions.workerSrc = './pdfjs/pdf.worker.min.js';

async function processFile(file: File) {
  console.log('Processing', file);

  const buffer = await file.arrayBuffer();
  const view = new Uint8Array(buffer);

  const document = await pdfjs.getDocument(view).promise;
  const records = await extractMarksFromDocument(document);
  document.destroy();

  console.log('records', records);
}

function TopBar() {
  return <div className={styles.top_bar}>
    {/* TODO: Get the version out of package.json */}
    <span className={styles.title}>MarksBench - v1.0.0</span>

    <Spacer />

    <IconButton icon='app:clear-all' />
    <IconButton icon='app:github' />
    <IconButton icon='app:help' />
  </div>;
}

function BottomBar() {
  return <div className={styles.bottom_bar}>
    <span className={styles.footer}>
      Made with <Icon className={styles.heart} icon='app:heart' inline />{' '}
      by <a href='https://github.com/Rami-Sabbagh/' rel='noreferrer' target='_blank'>Rami Sabbagh</a>
    </span>

    <Spacer />

    <IconButton icon='app:table' />
    <IconButton icon='app:zip' />
    <IconButton icon='app:add-file' />
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

function DocumentsList() {
  return <div className={styles.documents_list}>
    <DocumentItem />
    <DocumentItem />
    <DocumentItem />
  </div>;
}

export default function Home() {
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

    console.debug('Dropped files', files);

    files.forEach((file) => {
      processFile(file).catch(console.error);
    });
  }, []);

  // This is very important for dragging and dropping to work!
  const onDragOver = useCallback<(ev: DragEvent) => void>((ev) => {
    ev.preventDefault();
  }, []);

  useEffect(() => {
    document.addEventListener('drop', onDrop);
    document.addEventListener('dragover', onDragOver);

    return () => {
      document.removeEventListener('dragover', onDragOver);
      document.removeEventListener('drop', onDrop);
    };
  }, [onDrop, onDragOver]);

  return (
    <div className={styles.drop_zone}>
      <div className={styles.application}>
        <TopBar />
        <Placeholder />
        {/* <DocumentsList /> */}
        <BottomBar />
      </div>
    </div>
  );
}
