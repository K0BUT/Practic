import styles from "./Form.module.css";
import Button from "../UI/Button";
import { Link, useLocation } from "react-router-dom";
const Message = () => {
  const { state } = useLocation();
  
  return (
    <div className={styles.Message}>
      <p>Все прошло успешно</p>
      <Link to="/" state={state}>
        <Button className={styles.click} >Назад</Button>
      </Link>
    </div>
  );
};

export default Message;
