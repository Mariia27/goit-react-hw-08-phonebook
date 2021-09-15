import React from "react";
import shortid from "shortid";
import * as phonebookActions from "../../Redux/book/phonebook-actions";

import style from "../../component/styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as phonebookSelectors from "../../Redux/book/phonebook-selectors";

export default function SearchContact() {
  const state = useSelector(phonebookSelectors.getContactFilter);
  const dispatch = useDispatch();

  const searchContact = (e) => {
    dispatch(phonebookActions.veluesFilter(e.target.value));
  };

  const id = shortid.generate();
  return (
    <div className={style.containerSearch}>
      <label className={style.labelSearch} htmlFor={id}>
        Пошук контакту а ім"ям
      </label>
      <input
        type="text"
        name="filter"
        value={state}
        onChange={searchContact}
        id={id}
        autoComplete="off"
        className={style.inputSearch}
      ></input>
    </div>
  );
}
