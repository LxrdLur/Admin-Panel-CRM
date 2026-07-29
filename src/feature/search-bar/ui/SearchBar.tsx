import styles from './SearchBar.module.scss'

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
};

const SearchBar = ({value, onChange, placeholder}: SearchBarProps) => {
    return (
        <input
            value={value}
            onChange={event => onChange(event.target.value)}
            type="text"
            placeholder={placeholder}
            className={styles.input}
        />
    );
};

export default SearchBar;