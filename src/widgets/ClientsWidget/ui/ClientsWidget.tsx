import styles from './ClientsWidget.module.scss';
import {useClients} from "@/widgets/ClientsWidget/model/useClients.ts";
import {useSearchBar} from "@/feature/search-bar/model/useSearchBar.ts";
import ClientsTable from "@/widgets/ClientsWidget/ui/ClientsTable/ClientsTable.tsx";
import SearchBar from "@/feature/search-bar/ui/SearchBar.tsx";
import SmallSquareButton from "@/shared/UI/square-button-icon/ui/SmallSquareButton.tsx";
import {SwitchArrowLeftIcon, SwitchArrowRightIcon} from "@/shared/assets/svg";
import StatusFilter from "@/feature/status-filter/ui/StatusFilter.tsx";
import {useStatusFilter} from "@/feature/status-filter/model/useStatusFilter.ts";

type ClientsWidgetType = {
    searchValue: string;
    onSearchChange: (value: string) => void;
    setSearchValue: (value: string) => void;
};

const ClientsWidget = ({searchValue, onSearchChange, setSearchValue}: ClientsWidgetType) => {
    const {clients, isLoading, error, refetch} = useClients()
    const {filteredClients, resetSearchBar} = useSearchBar({clients, searchValue, setSearchValue})
    const {
        isOpen,
        showOptions,
        selectValue,
        chooseOptions,
        isChosen,
        resetFilters,
        searchedAndSortedClients
    } = useStatusFilter(filteredClients)

    const sortedClients = searchedAndSortedClients()

    return (
        <div className={styles.clients}>
            <div className={styles.clients__filters}>
                <SearchBar
                    value={searchValue}
                    onChange={onSearchChange}
                    placeholder='Поиск по имени или телефону'
                    className={styles.clients__searchBar}
                    onClick={resetSearchBar}
                />
                <StatusFilter
                    isOpen={isOpen}
                    showOptions={showOptions}
                    selectValue={selectValue}
                    chooseOptions={chooseOptions}
                    isChosen={isChosen}
                    resetFilters={resetFilters}
                />
            </div>
            <div className={styles.clients__list}>
                <ClientsTable
                    filteredClients={sortedClients}
                    isLoading={isLoading}
                    error={error}
                    refetch={refetch}
                />
            </div>
            <div className={styles.clients__switch}>
                <span className={styles.clients__totalCLients}>Всего клиентов: {clients.length}</span>
                <div className={styles.clients__switchButtons}>
                    <SmallSquareButton>
                        <SwitchArrowLeftIcon/>
                    </SmallSquareButton>

                    <SmallSquareButton>
                        1
                    </SmallSquareButton>

                    <SmallSquareButton>
                        <SwitchArrowRightIcon/>
                    </SmallSquareButton>
                </div>
            </div>
        </div>

    );
};

export default ClientsWidget;