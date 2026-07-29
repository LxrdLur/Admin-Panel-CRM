import type {ReactNode} from "react";
import styles from './AddButton.module.scss';
import {PlusIcon} from "@/shared/assets/svg";

type AddButtonProps = {
    children: ReactNode;
}

const AddButton = ({children}: AddButtonProps) => {
    return (
        <button className={styles.addButton}>
            <PlusIcon/>
            {children}
        </button>
    );
};

export default AddButton;