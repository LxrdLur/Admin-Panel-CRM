import styles from './Sidebar.module.scss';
import {logo, clientPhoto} from "@/shared/assets/img";
import {
    GridIcon, ClipboardIcon, HandshakeIcon, ChartsIcon, SettingsIcon,
    ArrowDownIcon, UserGearIcon,
} from "@/shared/assets/svg";
import clsx from "clsx";

const Sidebar = () => {

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__top}>
                <div className={styles.sidebar__logo}>
                    <img src={logo} alt=""/>
                    <nav>Clients CRM</nav>
                </div>
                <nav className={styles.sidebar__nav}>
                    <ul>
                        <li>
                            <GridIcon className={styles.sidebar__icon}/>
                            Обзор
                        </li>
                        <li>
                            <UserGearIcon className={clsx(styles.sidebar__icon, styles.sidebar__groupIcon)}/>
                            Клиенты
                        </li>
                        <li>
                            <ClipboardIcon className={styles.sidebar__icon}/>
                            Заявки
                        </li>
                        <li>
                            <HandshakeIcon className={styles.sidebar__icon}/>
                            Сделки
                        </li>
                        <li>
                            <ChartsIcon className={styles.sidebar__icon}/>
                            Аналитика
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.sidebar__bottom}>
                <div className={styles.sidebar__settings}>
                    <button className={styles.sidebar__button}>
                        <SettingsIcon className={styles.sidebar__icon}/>
                        <nav>Настройки</nav>
                    </button>
                </div>
                <div className={styles.sidebar__profile}>
                    <img src={clientPhoto} alt="User Avatar"/>
                    <div className={styles.sidebar__userInfo}>
                        <nav className={styles.sidebar__userName}>
                            Никита Паршин
                        </nav>
                        <nav className={styles.sidebar__userRole}>Администратор</nav>
                    </div>
                    <ArrowDownIcon className={styles.sidebar__icon}/>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;