import { useItems } from "../../hooks/useItems";

import styles from './styles.module.scss'

export function FilterTasksButtons() {
    const {handleSetNewFilter} = useItems();

    function handleChangeFilter (newFilter: string) {
        handleSetNewFilter(newFilter)
    }

    return (
      <div className={styles.filterButtonsContainer}>
        <button onClick={() => {handleChangeFilter('all')}}>All</button>
        <button onClick={() => {handleChangeFilter('done')}}>Done</button>
        <button onClick={() => {handleChangeFilter('toDo')}}>ToDo</button>
        </div>
    );
  }
  