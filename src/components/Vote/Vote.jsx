import { useState } from "react";

const Vote = () => {
  const [options, setOptions] = useState({
    mac: 0,
    windows: 0,
    linux: 0,
  });

  const handleChangeValue = (option) => {
    setOptions((prev) => {
      return {
        ...prev,
        [option]: prev[option] + 1,
      };
    });
  };

  const btns = Object.keys(options);

  return (
    <div>
      <ul>
        <li>Mac: {options.mac}</li>
        <li>Windows: {options.windows}</li>
        <li>Linux: {options.linux}</li>
      </ul>
      <div>
        {btns.map((btn) => (
          <button key={btn} onClick={() => handleChangeValue(btn)}>
            {btn}
          </button>
        ))}
        {/* <button onClick={() => handleChangeValue("mac")}>Mac</button>
        <button onClick={() => handleChangeValue("windows")}>Windows</button>
        <button onClick={() => handleChangeValue("linux")}>Linux</button> */}
      </div>
    </div>
  );
};

export default Vote;
