import {Button} from "../ButtonModel/index";

import {useItems} from "../../hooks/useItems";

import styles from "./styles.module.scss";

export function DeleteButtons() {
    const {items, handleDeleteAllItems, handleDeleteDoneItems} = useItems();

  function deleteDoneTasks() {
    const toDoTasks = items.filter((item) => {
      return item.done === false;
    });
    handleDeleteDoneItems(toDoTasks);
  }

  function deleteAllTasks() {
    const clearTasks = [] as any;
    handleDeleteAllItems(clearTasks);
  }

  return (
    <div className={styles.deleteButtonsContainer}>
      <Button
        functionButton={deleteDoneTasks}
        buttonDescription="Delete done tasks"
      />
      <Button
        functionButton={deleteAllTasks}
        buttonDescription="Delete all tasks"
      />
    </div>
  );
}