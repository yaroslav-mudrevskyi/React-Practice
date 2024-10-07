import { useState } from "react";
import s from "./LoginControlForm.module.css";

const LoginControlForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={onSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className={s.input}
            placeholder="Enter your name..."
            name="username"
            type="text"
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={s.input}
            placeholder="Enter your email..."
            name="email"
            type="email"
          />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={s.input}
            placeholder="Enter your password..."
            name="password"
            type="password"
          />
        </label>
        <button className={s.btn}>Login</button>
      </form>
    </div>
  );
};

export default LoginControlForm;
