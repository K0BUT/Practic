import { useNavigate, Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "../UI/Button";
import styles from "./Form.module.css";

const MoreInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = handleSubmit((data) => {
    navigate("/Check", { state: data });
    console.log(data);
  });

  useEffect(() => {
    reset(state);
  }, []);

  return (
    <div className={styles.MoreInfo}>
      <form onSubmit={submitHandler}>
        <h2>{state.firstName}</h2>
        <h2>Продолжим вот этим</h2>
        <div>
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              minLength: 6,
              maxLength: 24,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            className={styles.input}
            style={{
              ...styles.MoreInfo.input,
              borderBottomColor: errors.email && "red",
            }}
          />
        </div>
        <div>
          <p>Мобильный телефон</p>
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            {...register("phone", {
              required: true,
            })}
            className={styles.input}
            style={{
              ...styles.MoreInfo.input,
              borderBottomColor: errors.phone && "red",
            }}
          />
        </div>
        <div>
          <p>Ваш пол</p>
          <label className={styles.label1}>Мужской</label>
          <input
            value="Мужской"
            type="radio"
            name="gender"
            {...register("gender")}
            className={styles.radio}
          />
          <label className={styles.label2}>Женский</label>
          <input
            value="Женский"
            type="radio"
            name="gender"
            {...register("gender")}
            className={styles.radio}
          />
        </div>
        <Link to="/" state={state}>
          <Button className={styles.click}>Назад</Button>
        </Link>
        <Button
          variant="secondary"
          type="submit"
          value="Submit"
          className={styles.click}
        >
          Вперёд
        </Button>
      </form>
    </div>
  );
};

export default MoreInfo;
