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
            <button
                className={styles.select__trigger}
                type="button"
                onClick={(event) => {
                    event.preventDefault()
                    showOptions()
                }}
            >
                {selectValue}
                <span
                    className={clsx(
                        styles.select__arrow,
                        isChosen ? styles.select__reset : null,
                        isOpen && !isChosen ? styles.select__reverseArrow : null
                    )}
                    onClick={()=> isChosen ? resetFilters() : null}
                >
                </span>
            </button>

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