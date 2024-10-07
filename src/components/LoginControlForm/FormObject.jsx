import { useState } from "react";
import s from "./LoginControlForm.module.css";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  age: "",
  country: "",
  gender: "male",
  comment: "",
  agree: true,
};

const FormObject = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChangeInput = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      return setFormData({ ...formData, [name]: !formData[name] });
    }
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={onSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            onChange={handleChangeInput}
            value={formData.username}
            className={s.input}
            placeholder="Enter your name..."
            name="username"
            type="text"
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            onChange={handleChangeInput}
            value={formData.email}
            className={s.input}
            placeholder="Enter your email..."
            name="email"
            type="email"
          />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            onChange={handleChangeInput}
            value={formData.password}
            className={s.input}
            placeholder="Enter your password..."
            name="password"
            type="password"
          />
        </label>
        <label className={s.label}>
          <span>Age:</span>
          <input
            onChange={handleChangeInput}
            value={formData.age}
            className={s.input}
            placeholder="Enter your age..."
            name="age"
            type="number"
          />
        </label>
        <label className={s.label}>
          <span>County:</span>
          <select
            name="country"
            onChange={handleChangeInput}
            value={formData.country}
            className={s.input}
          >
            <option disabled value="">
              Choose your country
            </option>
            <option value="Ukraine">Ukraine</option>
            <option value="USA">USA</option>
            <option value="GB">GB</option>
            <option value="Italy">Italy</option>
          </select>
        </label>
        <label>
          <input
            onChange={handleChangeInput}
            checked={formData.gender === "male"}
            type="radio"
            name="gender"
            value="male"
          />
          <span>Male:</span>
        </label>
        <label>
          <input
            onChange={handleChangeInput}
            checked={formData.gender === "female"}
            type="radio"
            name="gender"
            value="female"
          />
          <span>Female:</span>
        </label>
        <label className={s.label}>
          <span>Comment:</span>
          <textarea
            className={s.textarea}
            onChange={handleChangeInput}
            value={formData.comment}
            placeholder="Enter your comment..."
            name="Comment"
            type="text"
          />
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChangeInput}
            checked={formData.agree}
            className={s.input}
            name="agree"
          />
          <span>I confirm rules!</span>
        </label>
        <button className={s.btn}>Login</button>
      </form>
    </div>
  );
};

export default FormObject;
