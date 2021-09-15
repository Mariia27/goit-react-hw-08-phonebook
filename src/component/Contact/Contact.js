import { useSelector } from "react-redux";
import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../Redux/book/phonebook-actions";
import Button from "../ButtonList/ButtonList";
import * as phonebookSelectors from "../../Redux/book/phonebook-selectors";
import style from "../styles.module.css";

export default function СontactList() {
  const stateContacts = useSelector(phonebookSelectors.getFilterContacts);

  return (
    <>
      {stateContacts.length > 0 && (
        <div>
          <p className={style.infoContact}>Набрати номер</p>
          <ul className={"js-list"}>
            {stateContacts.map(({ id, newName, number }) => {
              return (
                <li key={id}>
                  <span className={style.nameContact}>{newName}: </span>
                  <span className={style.numberContact}>
                    +38
                    <a href={`tel: ${number}`} className={style.numberContact}>
                      {number}
                    </a>
                  </span>
                  <Button id={id}>Видалити</Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
