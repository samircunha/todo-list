import {FilterTasksButtons} from "../FilterTasksButtons/index"
import { ListItems } from "../ListItems/index";
import { DeleteButtons } from '../DeleteButtons/index';

import styles from "./styles.module.scss";

export function TodoDashboard() {
  return (
    <section className={styles.todoContainer}>
      <h1>TodoList</h1>
      <div className={styles.todoCotent}>
        <FilterTasksButtons  />
        <ListItems/>
        <DeleteButtons/>
      </div>
    </section>
  );
}
