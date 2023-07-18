import { useState } from "react";
import Form from "./Form/Form";
import "./Footer.css";
import Button from "./UI/Button";

const Footer = (props) => {
  const [isShowForm, seiIsShowForm] = useState(false);

  const showFormHandler = () => {
    seiIsShowForm((prevIsShowForm) => !prevIsShowForm);
  };

  return (
    <footer className="footer">
      <div className="menu">
        <p>MY COSTS</p>
        <div className="box-footer">
          <Button onClick={showFormHandler}>FORM</Button>
        </div>
      </div>
      {isShowForm && <Form isShow={showFormHandler} />}
    </footer>
  );
};

export default Footer;
