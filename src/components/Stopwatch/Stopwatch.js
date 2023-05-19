import styles from "./Stopwatch.module.scss";

export const Stopwatch = ({ time }) => {
    return (
      <div className={styles.stopwatch}>
        <span>{("0" + Math.floor((time / 60 / 60 / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60 / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
        <span>{("0" + (time % 1000)).slice(-2)}</span>
      </div>
    );
};