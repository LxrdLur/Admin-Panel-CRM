import type {Client} from "@/entities/clients/model/clients";

const CLIENTS_URL = 'http://localhost:3001/clients';

export async function getClients(): Promise<Client[]> {
    const response = await fetch(CLIENTS_URL);

    if(!response.ok){
        throw new Error('При загрузке клиентов произошла ошибка...33')
    }

    const data: Client[] = await response.json()

    return data
}
