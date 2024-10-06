import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import AddForm from "./AddForm";
import Filter from "./Filter";
import List from "./List";
import SearchBar from "./SearchBar";
import todosData from "../../assets/todos.json";
import s from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("todos")) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    const newItem = { id: nanoid(), todo, completed: "false" };
    setTodos((prev) => [...prev, newItem]);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={s.wrapperTodoList}>
      <section className={s.actionSection}>
        <AddForm handleAdd={handleAdd} />
        <SearchBar />
      </section>
      <Filter />
      <List todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoList;
