import styles from "./ButtonList.module.css";
import phonebookOperations from "../../Redux/book/phonebook-operations";
import { useDispatch } from "react-redux";

export default function ButtonList({ children, id }) {
  const dispatch = useDispatch();
  return (
    <button
      className={styles.btnList}
      onClick={() => dispatch(phonebookOperations.onDeleted(id))}
      type="button"
    >
      <span> {children}</span>
    </button>
  );
}
