import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

import authOperations from "../../Redux/auth/auth-operations";
import style from "../../component/styles.module.css";
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const idEmail = shortid.generate();
  const idPassword = shortid.generate();

  return (
    <div>
      <h1 className={style.headingForm}>Сторінка авторизації</h1>
      <form className={style.form} action="" onSubmit={handleSubmite}>
        <label className={style.labelName} htmlFor={idEmail}>
          Пошта
        </label>
        <input
          id={idEmail}
          value={email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <label className={style.labelName} htmlFor={idPassword}>
          Пароль
        </label>
        <input
          id={idPassword}
          value={password}
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button className={style.btnReg} type="submit">
          Увійти
        </button>
      </form>
    </div>
  );
}
