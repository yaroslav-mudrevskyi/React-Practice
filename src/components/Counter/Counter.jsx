import { useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const handleMinusClick = () => {
    if (counter < 1) return;
    setCounter(counter - 1);
  };

  const handleResetClick = () => {
    setCounter(1);
  };

  const handlePlusClick = () => {
    setCounter(counter + 1);
  };

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
