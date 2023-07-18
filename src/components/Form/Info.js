import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "../UI/Button";
import styles from "./Form.module.css";

export default function Info() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, reset, handleSubmit, formState: {errors} } = useForm();

  const submitHandler = handleSubmit((data) => {
    navigate("/MoreInfo", { state: data });
    console.log(data);
  });

  useEffect(() => {
    reset(state);
  }, []);

  return (
    <div className={styles.Info}>
      <form onSubmit={submitHandler}>
        <h2>Начнем вот с этих данных</h2>
        <div>
          <p>Ваше имя</p>
          <input
            {...register("firstName", {
              required: true,
              minLength: 6,
              maxLength: 24,
            })}
            type="text"
            name="firstName"
            placeholder="First Name"
            style={{...styles.Info.input, borderBottomColor: errors.firstName && "red"}}
          />
        </div>
        <div>
          <p>Ваша фамилия</p>
          <input
            {...register("lastName", {
              required: true,
              minLength: 6,
              maxLength: 24,
            })}
            type="text"
            name="lastName"
            placeholder="Last Name"
            style={{...styles.Info.input, borderBottomColor: errors.lastName && "red"}}
          />
        </div>
        <div>
          <p>Придумайте ник</p>
          <input
            {...register("nicName", {
              required: true,
              minLength: 6,
              maxLength: 24,
            })}
            type="text"
            name="nicName"
            placeholder="Nic Name"
            style={{...styles.Info.input, borderBottomColor: errors.nicName && "red"}}
          />
        </div>
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

