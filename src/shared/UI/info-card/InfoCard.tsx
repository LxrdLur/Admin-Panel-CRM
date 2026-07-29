import styles from './InfoCard.module.scss';
import type {ReactNode} from "react";
import {ArrowUpIcon} from "@/shared/assets/svg";

type InfoCardProps = {
    icon: ReactNode;
    children: ReactNode;
    total: number;
    rating: number;
}

const InfoCard = ({icon, children, total, rating}: InfoCardProps) => {
    return (
        <div className={styles.infoCard}>
            <div className={styles.infoCard__icon}>
                {icon}
            </div>
            <div className={styles.infoCard__text}>
                <nav className={styles.infoCard__title}>{children}</nav>
                <nav className={styles.infoCard__total}>{total}</nav>
                <div className={styles.infoCard__rating}><ArrowUpIcon/> <span>{rating}%&nbsp;</span>с прошлого месяца</div>
            </div>

        </div>
    );
};

export default InfoCard;