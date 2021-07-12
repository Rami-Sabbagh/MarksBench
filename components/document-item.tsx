import { Icon } from '@iconify/react';
import styles from './document-item.module.scss';

import Spacer from '@components/spacer';
import IconButton from '@components/icon-button';

enum ItemState {
    READY = 'ready',
    PROCESSING = 'processing',
    NO_RECORDS = 'no-records',
    FAILED = 'failed',
}

const stateIcon: Record<ItemState, string> = {
    [ItemState.READY]: 'app:file',
    [ItemState.PROCESSING]: 'app:file',
    [ItemState.NO_RECORDS]: 'app:file-unknown',
    [ItemState.FAILED]: 'app:file-alert',
};

export default function DocumentItem() {
    const state: ItemState = ItemState.READY;

    const progress = 2/3;
    const progressPercentage = Math.floor(progress * 10_000) / 100;

    return <div className={styles.outer_container} data-state={state}>

        {state === ItemState.PROCESSING && <div
            className={styles.progress_bar}
            style={{ ['--progress' as any]: `${progressPercentage}%` }}
        />}

        <div className={styles.inner_container}>
            <div className={styles.icon_container}>
                <Icon icon={stateIcon[state]} />
            </div>

            <div className={styles.document_label}>
                1619002423_algorithms and data structures-2-f1-2021.pdf
            </div>

            <Spacer />

            <div className={styles.sub_label}>
                1,500 Record
            </div>

            {state === ItemState.READY && <IconButton icon='app:download' />}
        </div>

    </div>;
}