import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../Redux/auth";
import style from "../NavBar/Navigation.module.css";

export default function Navigation() {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <NavLink
        to="/"
        className={style.linkNavig}
        activeClassName={style.active}
        exact
      >
        Головна
      </NavLink>
      {IsLoggedIn && (
        <NavLink
          to="/contacts"
          className={style.linkNavig}
          activeClassName={style.active}
        >
          Контакти
        </NavLink>
      )}
    </div>
  );
}
