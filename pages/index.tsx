import { Icon } from '@iconify/react';
import styles from '@styles/application.module.scss';

import IconButton from '@components/icon-button';

function Spacer() {
  return <span className={styles.spacer} />;
}

export default function Home() {
  return (
    <div className={styles.application}>
      <div className={styles.top_bar}>
        {/* TODO: Get the version out of package.json */}
        <span className={styles.title}>MarksBench - v1.0.0</span>

        <Spacer />

        <IconButton icon='app:clear-all' />
        <IconButton icon='app:github' />
        <IconButton icon='app:help' />
      </div>

      <Spacer />

      <div className={styles.bottom_bar}>
        <span className={styles.footer}>
          Made with <Icon className={styles.heart} icon='app:heart' inline />{' '}
          by <a href='https://github.com/Rami-Sabbagh/' rel='noreferrer' target='_blank'>Rami Sabbagh</a>
        </span>

        <Spacer />
        
        <IconButton icon='app:table' />
        <IconButton icon='app:zip' />
        <IconButton icon='app:add-file' />
      </div>
    </div>
  )
}
