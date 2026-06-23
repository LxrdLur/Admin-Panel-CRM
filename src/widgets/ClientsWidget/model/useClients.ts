import {useCallback, useEffect, useState} from "react";
import {getClients} from "@/entities/clients/api/getClients";
import type {Client} from "@/entities/clients/model/clients.ts";

export function useClients () {
    const [clients, setClients] = useState<Client[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const loadClients = useCallback(async ()=>{
        setIsLoading(true)
        setError(null)
        try{
            const clientsData = await getClients();
            setClients(clientsData)
        }catch{
            setError('При загрузке данных произошла ошибка')
        }finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        void loadClients()
    }, [loadClients])

    return {
        clients,
        isLoading,
        error,
        refetch: loadClients,
    }
}