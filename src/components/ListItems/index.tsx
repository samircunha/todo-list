import { useItems } from "../../hooks/useItems";

import { ItemCard } from "../ItemCard/index";

export function ListItems() {
  const { items, filterTasks } = useItems();
  let createElements = "" as any;
  switch (filterTasks) {
    case "all":
      createElements = items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            done={item.done}
            description={item.description}
          />
        );
      });
      break;
    case "done":
      createElements = items.map((item) => {
        if (item.done === true) {
          return (
            <ItemCard
              key={item.id}
              id={item.id}
              done={item.done}
              description={item.description}
            />
          );
        }
      });
      break;
    case "toDo":
      createElements = items.map((item) => {
        if (item.done === false) {
          return (
            <ItemCard
              key={item.id}
              id={item.id}
              done={item.done}
              description={item.description}
            />
          );
        }
      });
      break;
    default:
      console.log("We don't found the items.");
  }

  return <section>{createElements}</section>;
}
