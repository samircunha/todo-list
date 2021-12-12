import { TodoDashboard } from "../TodoDashboard";
import { TodoInput } from "../TodoInput";
import styles from "./styles.module.scss";

export function Dashboard() {
  return (
    <section className={styles.container}>
      <TodoInput />
      <TodoDashboard />
    </section>
  );
}
