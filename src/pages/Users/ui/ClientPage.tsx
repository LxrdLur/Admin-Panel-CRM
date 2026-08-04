import styles from './ClientPage.module.scss';
import InfoCard from "@/shared/UI/info-card/InfoCard.tsx";
import {UserGroupIcon, UserPlusIcon, ClipboardIcon, NotifyIcon} from "@/shared/assets/svg";
import ClientsWidget from "@/widgets/ClientsWidget/ui/ClientsWidget.tsx";
import {useState} from "react";
import AddButton from "@/shared/UI/add-button/ui/AddButton.tsx";

const ClientPage = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={styles.clientPage}>
            <div className={styles.clientPage__top}>
                <div className={styles.clientPage__title}>
                    <h2>Клиенты</h2>
                    <span>Управление клиентской базой</span>
                </div>
                <div className={styles.clientPage__addUser}>
                    <NotifyIcon/>
                    <AddButton>Добавить клиента</AddButton>
                </div>
            </div>
            <div className={styles.clientPage__info}>
                <InfoCard icon={<UserGroupIcon/>} total={1000} rating={8}>
                    <span>Всего клиентов</span>
                </InfoCard>
                <InfoCard icon={<UserPlusIcon/>} total={1000} rating={10}>
                    <span>Всего клиентов</span>
                </InfoCard>
                <InfoCard icon={<ClipboardIcon/>} total={1000} rating={15}>
                    <span>Активные заявки</span>
                </InfoCard>
            </div>
            <div className={styles.clientPage__clients}>
                <div className={styles.clientsList}>
                    <ClientsWidget searchValue={searchValue} onSearchChange={setSearchValue}/>
                </div>
            </div>
        </div>

    );
};

export default ClientPage;