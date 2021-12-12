import { useItems } from "../../hooks/useItems";
import { Button } from "../ButtonModel/index";

import styles from "./styles.module.scss";

export function TodoInput() {
  const { handleAddNewItem } = useItems();
  
  function addItem() {
    const description = document.getElementById("description") as any;
    const { value } = description;
    if (value === "") {
      return;
    } else {
      handleAddNewItem(value);
      description.value = "";
    }
  }

  return (
    <header className={styles.inputContainer}>
      <h1>TodoInput</h1>
      <div className={styles.inputContent}>
        <input id="description" placeholder="New Task"></input>
        <Button functionButton={addItem} buttonDescription="Add new task" />
      </div>
    </header>
  );
}
