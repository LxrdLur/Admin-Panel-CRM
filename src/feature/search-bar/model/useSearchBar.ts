import type {Client} from "@/entities/clients/model/clients.ts";
import {useMemo} from "react";

export function useSearchBar(clients: Client[], searchValue: string,): Client[] {
    const normalizedSearch = searchValue.trim().toLowerCase();

    const filteredClients = useMemo(()=>{
        if(searchValue.length > 2){
            return clients.filter(client => {
                const fullNameUser = client.fullName.toLowerCase().includes(normalizedSearch)
                const numberUser = client.phone.includes(searchValue.trim())

                return fullNameUser || numberUser;
            })
        }else{
            return clients
        }
    }, [clients, searchValue])

    return filteredClients

}