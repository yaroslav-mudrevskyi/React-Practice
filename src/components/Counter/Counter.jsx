import { useEffect, useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("Component was mount");
  }, []);

  useEffect(() => {
    console.log("Component was updated :", counter);
  }, [counter]);

  useEffect(() => {
    console.log("Step was updated :", step);
  }, [step]);

  useEffect(() => {
    console.log("Step or C ounter was updated");
  }, [step, counter]);

  const handleMinusClick = () => {
    if (counter < 1) return;
    setCounter((prev) => prev - step);
  };

  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };

  const handlePlusClick = () => {
    // setCounter(counter + 1);
    setCounter((prev) => prev + step);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={(e) => setStep(+e.target.value)} />
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
