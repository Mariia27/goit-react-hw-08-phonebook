import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../Redux/auth";
import { ImUser } from "react-icons/im";

import style from "./User.module.css";
export default function User() {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.containerNav}>
        <div>
          <ImUser className={style.containerUser} />
        </div>
        <p className={style.user}>Доброго дня, {userName} !</p>
        <button
          className={style.btn}
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Вийти
        </button>
      </div>
    </>
  );
}
