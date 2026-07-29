import styles from './SmallSquareButton.module.scss';
import type {ReactNode} from "react";

type SquareButtonIconProps = {
    children: ReactNode;
}

const SmallSquareButton = ({children}: SquareButtonIconProps) => {
    return (
        <button className={styles.squareButton}>
            {children}
        </button>
    );
};

export default SmallSquareButton;