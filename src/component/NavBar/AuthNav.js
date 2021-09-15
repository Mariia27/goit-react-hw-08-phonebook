import { NavLink } from "react-router-dom";
import style from "../styles.module.css";

export default function authNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={style.linkNavig}
        activeClassName={style.active}
      >
        Реєстрація
      </NavLink>
      <NavLink
        to="/login"
        className={style.linkNavig}
        activeClassName={style.active}
      >
        Авторизація
      </NavLink>
    </div>
  );
}
