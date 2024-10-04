import { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ onClose, children, title = "Default modal" }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handlePressKey = (e) => {
      console.log(e.key);

      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handlePressKey);
    return () => {
      document.removeEventListener("keydown", handlePressKey);
    };
  }, [onClose]);

  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
