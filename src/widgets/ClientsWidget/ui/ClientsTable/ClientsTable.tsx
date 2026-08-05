import type {Client} from "@/entities/clients/model/clients.ts";
import styles from './ClientsTable.module.scss';
import ClientsTableContent from "@/widgets/ClientsWidget/ui/ClientsTable/ClientsTableContent.tsx";

type FilteredClientsType = {
    filteredClients: Client[];
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
}

const ClientsTable = ({filteredClients, isLoading, error, refetch}: FilteredClientsType) => {

    return (
        <table className={styles.clientsTable}>
            <colgroup>
                <col className={styles.clientColumn} />
                <col className={styles.contactsColumn} />
                <col className={styles.dateColumn} />
                <col className={styles.requestsColumn} />
                <col className={styles.statusColumn} />
                <col className={styles.actionsColumn} />
            </colgroup>
            <thead>
                <tr>
                    <th className={styles.tableTitleClient}>Клиент</th>
                    <th className={styles.tableTitleContacts}>Контакты</th>
                    <th className={styles.tableTitleRegister}>Дата регистрации</th>
                    <th className={styles.tableTitleApplications}>Заявки</th>
                    <th className={styles.tableTitleStatus}>Статус</th>
                    <th className={styles.tableTitleActions}>Действия</th>
                </tr>
            </thead>

            <tbody>
                <ClientsTableContent clients={filteredClients} isLoading={isLoading} error={error} refetch={refetch}/>
            </tbody>
        </table>
    );
};

export default ClientsTable;