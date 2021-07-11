import { Icon } from '@iconify/react';
import styles from './icon-button.module.scss';

type IconButtonProps = {
    icon: string;
};

export default function IconButton({ icon }: IconButtonProps) {
    return <button className={styles.button} type='button'>
        <Icon icon={icon} />
    </button>;
}