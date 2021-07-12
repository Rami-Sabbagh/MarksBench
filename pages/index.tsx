import { Icon } from '@iconify/react';
import styles from '@styles/application.module.scss';

import Spacer from '@components/spacer';
import IconButton from '@components/icon-button';

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

export default function Home() {
  return (
    <div className={styles.application}>
      <TopBar />
      <Placeholder />
      <BottomBar />
    </div>
  )
}
