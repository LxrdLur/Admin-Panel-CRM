import { useState } from "react";
import type {Client} from "@/entities/clients/model/clients.ts";


export function useStatusFilter(filteredClients: Client[]) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectValue, setSelectValue] = useState("Статус");
    const isChosen = selectValue !== "Статус";

    const showOptions = () => setIsOpen(prev => !prev);

    const chooseOptions = (status: string) => {
        setSelectValue(status);
        setIsOpen(false);
    };

    const resetFilters = () => {
        setSelectValue("Статус");
    };

    const searchedAndSortedClients = () => {
        if(selectValue !== 'Статус'){
            return filteredClients.filter((client: Client) => client.statusForSort === selectValue);
        }else{
            return filteredClients;
        }
    }
    return {
        isOpen,
        showOptions,
        selectValue,
        chooseOptions,
        isChosen,
        resetFilters,
        searchedAndSortedClients,
    };
}