import { useCallback, useEffect, useState } from 'react';
import numeral from 'numeral';

import { Icon } from '@iconify/react';
import styles from './document-item.module.scss';

import Spacer from '@components/spacer';
import IconButton from '@components/icon-button';

import MarksDocument from '@lib/marks-document';

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

type DocumentItemProps = {
    item: MarksDocument;
};

function getItemState(item: MarksDocument) {
    if (item.failureReason !== undefined)
        return ItemState.FAILED;
    else if (item.processedPages === item.pagesCount)
        return item.records.length ? ItemState.READY : ItemState.NO_RECORDS;
    else
        return ItemState.PROCESSING;
}

export default function DocumentItem({ item }: DocumentItemProps) {
    const [state, setState] = useState(ItemState.PROCESSING);
    const [progress, setProgress] = useState(0);
    const [subLabel, setSubLabel] = useState('');

    const updateStates = useCallback(() => {
        setState(getItemState(item));
        setProgress(item.pagesCount ? item.processedPages / item.pagesCount : 0);

        const recordsCount = numeral(item.records.length).format('0,0');
        const recordsLabel = `${recordsCount} Record${recordsCount !== '1' ? 's' : ''}`;

        if (item.failureReason) setSubLabel(item.failureReason);
        else if (item.processedPages === item.pagesCount) setSubLabel(recordsLabel);
        else if (item.pagesCount === undefined) setSubLabel('Loading document');
        else setSubLabel(`Processing page ${item.processedPages + 1}/${item.pagesCount}`);
    }, [item]);

    useEffect(() => {
        updateStates();
        item.onUpdate = updateStates;
        return () => { delete item.onUpdate };
    }, [updateStates, item]);

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
                {item.file.name}
            </div>

            <Spacer />

            <div className={styles.sub_label}>
                {state === ItemState.NO_RECORDS ? 'No records' : subLabel}
            </div>

            {state === ItemState.READY && <IconButton icon='app:download' />}
        </div>

    </div>;
}