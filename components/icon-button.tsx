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
    /**
     * A callback to be triggered when the button is clicked.
     */
    onClick?: () => void;
};

export default function IconButton({ icon, disabled, onClick }: IconButtonProps) {
    return <button className={styles.button} type='button' disabled={disabled} onClick={onClick}>
        <Icon icon={icon} />
    </button>;
}
