import styles from './SearchBar.module.scss'
import clsx from "clsx";

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string;
    onClick: ()=> void;
};

const SearchBar = ({value, onChange, placeholder, className, onClick}: SearchBarProps) => {
    return (
        <div className={clsx(className, styles.searchBar)}>
            <input
                value={value}
                onChange={event => onChange(event.target.value)}
                type="text"
                placeholder={placeholder}
                className={styles.searchBar__input}
            />
            <div className={styles.searchBar__arrow}>
                <button
                    className={clsx(value.length > 2 ? styles.searchBar__resetArrow : null)}
                    onClick={onClick}
                >

                </button>
            </div>
        </div>

    );
};

export default SearchBar;