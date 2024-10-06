import s from "./TodoList.module.css";

const SearchBar = () => {
  return (
    <input
      className={s.input}
      type="text"
      placeholder="Enter search value..."
    />
  );
};

export default SearchBar;
