export type ClientStatus = 'active' | 'blocked' | 'new';

export const CLIENT_STATUS_LABELS: Record<ClientStatus, string> = {
    active: 'Активный',
    blocked: 'Заблокирован',
    new: 'Новый',
}

export interface Client {
    email: string;
    id: number;
    fullName: string;
    name: string;
    surname: string;
    age: number;
    phone: string;
    dateRegister: string;
    applicationQuantity: number;
    status: ClientStatus;
}
