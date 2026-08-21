import {useState} from "react";

export function useNotifications(){
    const [isOpenNotifications, setIsOpenNotifications] = useState(false);

    const showNotifications = () => setIsOpenNotifications(prev => !prev);

    return {
        showNotifications,
        isOpenNotifications,
    }
}