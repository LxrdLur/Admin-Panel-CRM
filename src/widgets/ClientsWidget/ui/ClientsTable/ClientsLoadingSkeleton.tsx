import styles from "@/widgets/ClientsWidget/ui/ClientsTable/ClientsTable.module.scss";

const ClientsTableSkeleton = () => {
    const rows = [1,2,3]
    return (
        rows.map(row => (
            <tr key={row} className={styles.clientsTable__skeleton}>
                <td>
                    <div className={styles.clientsTable__client}>
                        <div></div>
                        <span></span>
                    </div>
                </td>
                <td>
                    <div className={styles.clientsTable__contacts}>
                        <span></span>
                        <span></span>
                    </div>
                </td>
                <td>
                    <div className={styles.clientsTable__register}>
                        <span></span>
                    </div>
                </td>
                <td>
                    <div className={styles.clientsTable__applications}>
                        <span></span>
                    </div>
                </td>
                <td>
                    <div className={styles.clientsTable__status}>
                        <span></span>
                    </div>
                </td>
                <td>
                    <div className={styles.clientsTable__actions}>
                        <button className={styles.clientsTable__button}>

                        </button>
                        <button className={styles.clientsTable__button}>

                        </button>
                        <button className={styles.clientsTable__button}>

                        </button>
                    </div>
                </td>
            </tr>
        ))
    );
};

export default ClientsTableSkeleton;