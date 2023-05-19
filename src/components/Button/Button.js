import styles from "./Button.module.scss";

export const Button = ({ onClick, children }) => {
    return (
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    );
};