import s from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={s.formWrapper}>
      <form className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input className={s.input} placeholder="Enter your name..." />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input className={s.input} placeholder="Enter your email..." />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input className={s.input} placeholder="Enter your password..." />
        </label>
        <button className={s.btn}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
