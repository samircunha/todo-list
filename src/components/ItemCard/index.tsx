import { ItemCardButton } from "../ItemCardButton/index";

import styles from "./styles.module.scss";

interface ItemCardProps {
  id: number;
  done: boolean;
  description: string;
}

export function ItemCard({ id, done, description }: ItemCardProps) {
  return (
    <div
      key={id}
      className={done ? styles.cardDoneContainer : styles.cardContainer}
    >
      {description}
      <ItemCardButton done={done} id={id} />
    </div>
  );
}
