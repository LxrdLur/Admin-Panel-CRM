import styles from './StatusFilter.module.scss';

// type StatusFilterType = {
//     className?: string;
// }

const StatusFilter = () => {
    return (
        <div className={styles.select}>
            <button className={styles.select__trigger} type="button">
                Статус
                <span className={styles.select__arrow}></span>
            </button>

            <ul className={styles.select__list}>
                <li>
                    <button className={styles.select__option} type="button">
                        Активный
                    </button>
                </li>

                <li>
                    <button className={styles.select__option} type="button">
                        Заблокирован
                    </button>
                </li>

                <li>
                    <button className={styles.select__option} type="button">
                        Новый
                    </button>
                </li>
            </ul>
        </div>

    );
};

export default StatusFilter;