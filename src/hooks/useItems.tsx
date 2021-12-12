import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Item } from "../components/item/item";

interface Items {
  id: number;
  description: string;
  done: boolean;
}

interface ItemProviderProps {
  children: ReactNode;
}

interface ItemsContextData {
  items: Items[];
  filterTasks: string;
  handleAddNewItem: (text: string) => void;
  handleSetNewFilter: (newFilter: string) => void;
  changeStateItems: (items: Items[]) => void;
  handleDeleteItem: (items: Items[]) => void;
  handleDeleteAllItems: (clearItems: []) => void;
  handleDeleteDoneItems: (todoItems: Items[]) => void;
}

const ItemsContext = createContext<ItemsContextData>({} as ItemsContextData);

export function ItemProvider({ children }: ItemProviderProps) {
  const [items, setItems] = useState<Items[]>([]);
  const [filterTasks, setFilterTasks] = useState<string>("all");

  useEffect(() => {
    const takeItemsFromStorage = JSON.parse(
      localStorage.getItem("items") as string
    );
    if (takeItemsFromStorage) {
      setItems(takeItemsFromStorage);
    } else {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    const savingItemsInStorage = JSON.stringify(items);
    localStorage.setItem("items", savingItemsInStorage);
  }, [items]);

  function handleAddNewItem(text: string) {
    const newItem = new Item(text);

    setItems([...items, newItem]);
  }

  function handleSetNewFilter(newFilter: string) {
    setFilterTasks(newFilter);
  }

  function changeStateItems(changedItems: Items[]) {
    setItems(changedItems);
  
  }
  function handleDeleteItem(atualizedItems: Items[]) {
    setItems(atualizedItems);
  }

  function handleDeleteAllItems(clearItems: []) {
    setItems(clearItems);
  }

  function handleDeleteDoneItems(todoItems: Items[]) {
    setItems(todoItems);
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        filterTasks,
        handleAddNewItem,
        handleSetNewFilter,
        changeStateItems,
        handleDeleteItem,
        handleDeleteAllItems,
        handleDeleteDoneItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems () {
  const context = useContext(ItemsContext);

  return context;
}
