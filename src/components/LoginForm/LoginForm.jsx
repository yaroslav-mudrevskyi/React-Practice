import s from "./LoginForm.module.css";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log({ username, email, password });
    form.reset();
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            className={s.input}
            name="username"
            placeholder="Enter your name..."
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            className={s.input}
            name="email"
            placeholder="Enter your email..."
          />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            className={s.input}
            name="password"
            placeholder="Enter your password..."
          />
        </label>
        <button className={s.btn}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
