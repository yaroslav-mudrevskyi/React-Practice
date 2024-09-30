import { useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleMinusClick = () => {
    if (counter < 1) return;
    setCounter(counter - 1);
  };

  const handleResetClick = () => {
    setCounter(0);
  };

  const handlePlusClick = () => {
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
  };

  const sum = (name) => {
    console.log(`Welcome, ${name}`);
  };

  sum("Petya");

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className={s.btn}>
            minus
          </button>
          <button onClick={handleResetClick} className={s.btn}>
            reset
          </button>
          <button onClick={handlePlusClick} className={s.btn}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
