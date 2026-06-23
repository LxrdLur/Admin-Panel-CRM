import styles from './SearchBar.module.scss'

const SearchBar = () => {
    return (
        <input type="text" placeholder='Введите текст' className={styles.input}/>
    );
};

export default SearchBar;