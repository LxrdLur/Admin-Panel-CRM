import type {Client} from "@/entities/clients/model/clients.ts";
import ClientsTableRow from "@/widgets/ClientsWidget/ui/ClientsTable/ClientsTableRow.tsx";
import ClientsLoadingSkeleton from "@/widgets/ClientsWidget/ui/ClientsTable/ClientsLoadingSkeleton.tsx";
import ClientsTableError from "@/widgets/ClientsWidget/ui/ClientsTable/ClientsTableError.tsx";

type ClientsTableContentType = {
    clients: Client[];
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
}

const ClientsTableContent = ({isLoading, error, clients, refetch}: ClientsTableContentType) => {

    if(isLoading){
        return <ClientsLoadingSkeleton/>
    }
    if(error){
        return <ClientsTableError error={error} refetch={refetch}/>
    }
    return (
        clients.map((client: Client) => (
            <ClientsTableRow key={client.id} client={client}/>
        ))
    );
};

export default ClientsTableContent;