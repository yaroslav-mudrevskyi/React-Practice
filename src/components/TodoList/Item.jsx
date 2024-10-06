import s from "./TodoList.module.css";

const Item = ({ todo, handleDelete }) => {
  return (
    <li className={s.item}>
      <input type="checkbox" />
      <p>{todo.todo}</p>
      <button onClick={() => handleDelete(todo.id)}>x</button>
    </li>
  );
};

export default Item;
