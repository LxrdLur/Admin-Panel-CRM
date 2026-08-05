import {useCallback, useEffect, useState} from "react";
import {getClients} from "@/entities/clients/api/getClients";
import type {Client} from "@/entities/clients/model/clients.ts";

export function useClients () {
    const [clients, setClients] = useState<Client[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    const loadClients = useCallback(async ()=>{
        setIsLoading(true);
        setError(null);
        try{
            const clientsData = await getClients();
            setClients(clientsData)
        }catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Произошла неизвестная ошибка...');
            }
        }finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        void loadClients()
    }, [loadClients])

    return {
        clients,
        isLoading,
        error,
        refetch: loadClients,
    }
}