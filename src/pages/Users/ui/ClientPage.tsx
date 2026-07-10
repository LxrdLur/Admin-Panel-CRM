import SearchBar from "@/feature/search-bar/ui/SearchBar.tsx";
import styles from './ClientPage.module.scss';
import ClientsWidget from "@/widgets/ClientsWidget/ui/ClientsWidget.tsx";
import {useState} from "react";
import LeftBarWidget from "@/widgets/LeftBarWidget/ui/LeftBarWidget.tsx";

const ClientPage = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={styles.clientPage}>
            <LeftBarWidget/>
            <div className={styles.middleBar}>
                <div className={styles.title}>
                    <h3>Страница клиентов</h3>
                </div>
                <div className={styles.input}>
                    <SearchBar value={searchValue} onChange={setSearchValue}/>
                </div>
                <div className={styles.clientsList}>
                    <ClientsWidget searchValue={searchValue}/>
                </div>
            </div>
        </div>

    );
};

export default ClientPage;