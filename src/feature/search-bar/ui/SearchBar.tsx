import styles from './SearchBar.module.scss'

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
};

const SearchBar = ({value, onChange}: SearchBarProps) => {
    return (
        <input
            value={value}
            onChange={event => onChange(event.target.value)}
            type="text"
            placeholder='Введите текст'
            className={styles.input}
        />
    );
};

export default SearchBar;