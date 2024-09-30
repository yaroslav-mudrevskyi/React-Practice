import s from "./Counter.module.css";

const Counter = () => {
  const handleMinusClick = () => {
    //   console.log({ x: e.pageX, y: e.pageY });
    //   e.target.innerHTML = "Click";
    console.log("Welcome");
  };

  const handleResetClick = (name) => {
    console.log(`Hello, ${name}`);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <input />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className={s.btn}>
            minus
          </button>
          <button onClick={() => handleResetClick("Vasya")} className={s.btn}>
            reset
          </button>
          <button onClick={() => console.log("Hello, user")} className={s.btn}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
