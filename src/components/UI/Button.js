import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button  onClick={props.onClick} className={`${styles.button} ${props.className}`}>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
