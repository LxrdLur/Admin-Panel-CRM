import type {Client} from "@/entities/clients/model/clients.ts";
import {useMemo} from "react";

export function useSearchBar(clients: Client[], searchValue: string,): Client[] {
    const filteredClients = useMemo(()=>{
        if(searchValue.length > 2){
            return clients.filter(item => item.fullName.toLowerCase().includes(searchValue.trim().toLowerCase()))
        }else{
            return clients
        }
    }, [clients, searchValue])

    return filteredClients

}