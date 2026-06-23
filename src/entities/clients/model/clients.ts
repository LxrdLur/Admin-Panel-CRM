export type ClientStatus = 'active' | 'inactive'

export interface Client {
    id: string;
    fullName: string;
    name: string;
    surname: string;
    age: number;
    phone: string;
    dateRegister: string;
    applicationQuantity: number;
    status: ClientStatus;
}
type Applications = {
    id: number;
    clientId: number;
    title: string;
    dateCreate: string;
    dateClose: string;
    status: string;
    text: string;
}