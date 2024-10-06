import Item from "./Item";
import s from "./TodoList.module.css";

const List = ({ todos, handleDelete }) => {
  return (
    <ul className={s.list}>
      {todos.map((item) => (
        <Item key={item.id} todo={item} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default List;
