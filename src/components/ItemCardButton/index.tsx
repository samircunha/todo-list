import { FormEvent } from "react";
import { useItems } from "../../hooks/useItems";

import styles from "./styles.module.scss";

interface ItemCardButtonProps {
  id: number;
  done: boolean;
}

export function ItemCardButton({ id, done }: ItemCardButtonProps) {
  const { items, changeStateItems, handleDeleteItem } = useItems();

  function changeSituation(e: FormEvent, id: number) {
    const newItems = [...items];
    const { target } = e as any;

    const element = newItems.filter((item) => {
      return item.id === id;
    })[0];
    if (element.done) {
      element.done = !element.done;
      target.parentElement.parentElement.parentElement.setAttribute(
        "class",
        styles.cardContainer
      );
      target.setAttribute("src", "./assets/notDone.png");
    } else {
      element.done = !element.done;
      target.parentElement.parentElement.parentElement.setAttribute(
        "class",
        styles.cardDoneContainer
      );
      target.setAttribute("src", "./assets/done.png");
    }
    changeStateItems(newItems);
  }
  function deleteItem(id: number) {
    const filteredList = items.filter((item) => {
      return item.id !== id;
    });
    handleDeleteItem(filteredList);
  }
  return (
    <div className={styles.buttonsContainer}>
      <button
        onClick={(e) => {
          changeSituation(e, id);
        }}
      >
        <img
          alt="switch"
          src={done ? "./assets/done.png" : "./assets/notDone.png"}
        ></img>
      </button>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        <img alt="delete" src="./assets/delete.png"></img>
      </button>
    </div>
  );
}
