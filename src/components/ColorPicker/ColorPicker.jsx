import { useState } from "react";
import colors from "../../assets/colors.json";
import s from "./ColorPicker.module.css";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");

  return (
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div className={s.pallette}>
        <h2>CurrentColor: {currentColor}</h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              className={s.item}
              key={item.id}
              onClick={() => setCurrentColor(item.color)}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;
