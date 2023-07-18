import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";

const Check = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { reset, handleSubmit } = useForm();

  const submitHandler = handleSubmit((data) => {
    navigate("/Message", { state: data });
    console.log(data);
    reset();
  });

  return (
    <div>
      <form className={styles.Info} onSubmit={submitHandler}>
        <h2>Проверти свои данные</h2>
        <p>Имя: {state.firstName}</p>
        <p>Фамилия: {state.lastName}</p>
        <p>Ник: {state.nicName}</p>
        <p>Email: {state.email}</p>
        <p>Телефон: {state.phone}</p>
        <p>Пол: {state.gender}</p>

        <Link to="/MoreInfo" state={state}>
          <Button className={styles.click}>Назад</Button>
        </Link>

        <Button
          variant="secondary"
          type="submit"
          value="Submit"
          className={styles.click}
        >
          Завершить
        </Button>
      </form>
    </div>
  );
};

export default Check;
