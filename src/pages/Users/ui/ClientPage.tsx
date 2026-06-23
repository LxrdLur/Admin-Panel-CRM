import SearchBar from "@/feature/search-bar/ui/SearchBar.tsx";
import styles from './ClientPage.module.scss';
import ClientsWidget from "@/widgets/ClientsWidget/ui/ClientsWidget.tsx";

const ClientPage = () => {
    return (
        <div>
            <div className={styles.title}>
                <h3>Страница клиентов</h3>
            </div>
            <div className={styles.input}>
                <SearchBar/>
            </div>
            <div className={styles.clientsList}>
                <ClientsWidget/>
            </div>
        </div>
    );
};

export default ClientPage;