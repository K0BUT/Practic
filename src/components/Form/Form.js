import styles from './Form.module.css';
import { Routes, Route } from "react-router-dom";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import Check from "./Check";
import Message from "./Message";
import Button from "../UI/Button";

const Form = (props) => {
  
  return (
    <div>
      <div className={styles.backdrop} onClick={props.isShow}></div>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="MoreInfo" element={<MoreInfo />} />
            <Route path="Check" element={<Check />} />
            <Route path="Message" element={<Message />} />
          </Routes>
          <Button onClick={props.isShow} className={styles.click2}>Выйти</Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
