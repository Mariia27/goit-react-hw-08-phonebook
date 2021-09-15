import phonebookOperations from "../../Redux/book/phonebook-operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Form from "../Form/Form";
import ContactList from "../Contact/Contact";
import SearchContact from "../Search/Search";
import style from "../styles.module.css";

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContact());
  }, [dispatch]);

  return (
    <>
      <h1 className={style.headingForm}>Телефонна книга</h1>
      <Form />
      <h2 className={style.contactList}>Контакти</h2>
      <SearchContact />
      <ContactList />
    </>
  );
}
