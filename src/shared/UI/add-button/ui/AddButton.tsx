import type {ReactNode} from "react";
import styles from './AddButton.module.scss';
import {PlusIcon} from "@/shared/assets/svg";
import clsx from "clsx";

type AddButtonProps = {
    className?: string;
    children: ReactNode;
}

const AddButton = ({children, className}: AddButtonProps) => {
    return (
        <button className={clsx(styles.addButton, className)}>
            <PlusIcon/>
            {children}
        </button>
    );
};

export default AddButton;