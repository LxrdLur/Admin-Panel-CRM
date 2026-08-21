import type {Client} from "@/entities/clients/model/clients.ts";
import {useMemo} from "react";
type SearchBarType = {
    clients: Client[];
    searchValue: string;
    setSearchValue: (value: string) => void;
}
export function useSearchBar({clients, searchValue, setSearchValue}: SearchBarType) {
    const normalizedSearch = searchValue.trim().toLowerCase();

    const filteredClients = useMemo(()=>{
        if(normalizedSearch.length > 2){
            return clients.filter(client => {
                const fullNameUser = client.fullName.toLowerCase().includes(normalizedSearch)
                const numberUser = client.phone.includes(searchValue.trim())

                return fullNameUser || numberUser;
            })
        }else{
            return clients
        }
    }, [clients, normalizedSearch, searchValue])

    const resetSearchBar = () => {
        setSearchValue('')
    }
    return {
        filteredClients,
        resetSearchBar,
    }

}