import styles from './StatusFilter.module.scss';
import {CLIENTS_STATUSES} from "@/entities/clients/model/clients.ts";
import clsx from "clsx";

type StatusFilterType = {
    isOpen: boolean;
    showOptions: () => void;
    selectValue: string;
    chooseOptions: (status: string) => void;
    isChosen: boolean;
    resetFilters: () => void;
}

const StatusFilter = (
    {
        isOpen,
        showOptions,
        selectValue,
        chooseOptions,
        isChosen,
        resetFilters,
    }: StatusFilterType) => {

    return (
        <div className={styles.select}>
            <div className={styles.select__button}>
                <button
                    className={styles.select__trigger}
                    type="button"
                    onClick={showOptions}
                >
                    {selectValue}
                </button>
                <div
                    className={clsx(
                        styles.select__arrow
                    )}
                    onClick={()=> isChosen ? resetFilters() : showOptions()}
                >
                    <button className={clsx(
                        isOpen && !isChosen ? styles.select__reverseArrow : styles.select__standardArrow,
                        isChosen ? styles.select__resetArrow : null
                    )}></button>
                </div>
            </div>


            <ul className={clsx(styles.select__list, isOpen ? styles.showOptionsClass : null )}>
                {CLIENTS_STATUSES.map((status, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            chooseOptions(status)
                        }}
                    >
                        <button
                            className={styles.select__option}
                            type="button"
                        >
                            {status}
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default StatusFilter;