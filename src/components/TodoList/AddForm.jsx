import { useState } from "react";
import s from "./TodoList.module.css";

const AddForm = ({ handleAdd }) => {
  const [value, setValue] = useState("");

  return (
    <div className={s.addForm}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={s.input}
        type="text"
        placeholder="Enter new todo..."
      />
      <button onClick={() => handleAdd(value)} className={s.btn}>
        Add todo
      </button>
    </div>
  );
};

export default AddForm;
