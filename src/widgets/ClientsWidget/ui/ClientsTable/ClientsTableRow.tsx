import styles from "@/widgets/ClientsWidget/ui/ClientsTable/ClientsTable.module.scss";
import logo from "@/shared/assets/img/clients/client-ava-test.jpg";
import {CLIENT_STATUS_LABELS} from "@/entities/clients/model/clients.ts";
import {ActionsIcon, EditIcon, ViewIcon} from "@/shared/assets/svg";
import type {Client} from "@/entities/clients/model/clients.ts";
import SmallSquareButton from "@/shared/UI/square-button-icon/ui/SmallSquareButton.tsx";

const ClientsTableRow = ({client}: {client: Client}) => {
    return (
        <tr key={client.id}>
            <td>
                <div className={styles.clientsTable__client}>
                    <img src={logo} alt=""/>
                    <div className={styles.clientsTable__name}>
                        <span>{client.fullName}</span>
                        <span style={{ color: 'gray' }}>ID: {client.id}</span>
                    </div>
                </div>
            </td>
            <td>
                <div className={styles.clientsTable__contacts}>
                    <span>{client.phone}</span>
                    <span>{client.email}</span>
                </div>
            </td>
            <td>
                <div className={styles.clientsTable__register}>
                    <span>{client.dateRegister}</span>
                </div>
            </td>
            <td>
                <div className={styles.clientsTable__applications}>
                    <span>{client.applicationQuantity}</span>
                </div>
            </td>
            <td>
                <div className={styles.clientsTable__status}>
                    <span className={styles[`clientStatus__${client.status}`]}>{CLIENT_STATUS_LABELS[client.status]}</span>
                </div>
            </td>
            <td>
                <div className={styles.clientsTable__actions}>
                    <SmallSquareButton><ViewIcon/></SmallSquareButton>
                    <SmallSquareButton><EditIcon/></SmallSquareButton>
                    <SmallSquareButton><ActionsIcon/></SmallSquareButton>
                </div>
            </td>
        </tr>
    );
};

export default ClientsTableRow;