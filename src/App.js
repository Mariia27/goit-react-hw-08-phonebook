import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./component/styles.module.css";

import authOperations from "./Redux/auth/auth-operations";
import NavBar from "./component/NavBar/NavBar";
import { Switch } from "react-router-dom";
import RegisterView from "./component/views/RegisterView";
import LoginView from "./component/views/LoginView";
import ContactsView from "./component/views/ContactsView";
import HomeView from "./component/views/HomeView";
import PrivateRoute from "./component/views/PrivateRoute";
import PublicRoute from "./component/views/PublicRoute";
import { authSelectors } from "./Redux/auth";

export default function Mobile() {
  const dispatch = useDispatch();
  const refreshingPage = useSelector(authSelectors.getRefreshingPage);
  console.log(refreshingPage);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !refreshingPage && (
      <div className={style.container}>
        <NavBar />
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" exact restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" exact restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" exact>
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </div>
    )
  );
}
