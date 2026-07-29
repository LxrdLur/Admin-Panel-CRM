import styles from './ClientsTable.module.scss';
import {RefetchIcon} from "@/shared/assets/svg";

type ClientsTableErrorType = {
    error: string;
    refetch: () => void;
}

const ClientsTableError = ({error, refetch}: ClientsTableErrorType) => {
    return (
        <tr>
            <td colSpan={6}>
                <div className={styles.clientsTable__error}>
                    <span>{error}</span>
                    <button onClick={refetch}><RefetchIcon/></button>
                </div>
            </td>
        </tr>
    );
};

export default ClientsTableError;