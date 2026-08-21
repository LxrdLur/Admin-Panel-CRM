import {NotifyIcon} from "@/shared/assets/svg";
import styles from './Notifications.module.scss';
import clsx from "clsx";

type NotificationsButtonProps = {
    className?: string;
    onClick?: () => void;
}

const NotificationsButton = ({onClick, className}: NotificationsButtonProps) => {
    return (
        <button type='button' className={clsx(className, styles.notifications__button)} onClick={onClick}>
            <NotifyIcon />
        </button>
    );
};

export default NotificationsButton;