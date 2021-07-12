import { Icon } from '@iconify/react';
import styles from './icon-button.module.scss';

type IconButtonProps = {
    /**
     * The name of the button's icon.
     */
    icon: string;
    /**
     * Whether the button is disabled or not.
     */
    disabled?: boolean;
};

export default function IconButton({ icon, disabled }: IconButtonProps) {
    return <button className={styles.button} type='button' disabled={disabled}>
        <Icon icon={icon} />
    </button>;
}
