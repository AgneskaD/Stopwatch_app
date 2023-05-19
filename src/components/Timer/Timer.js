import styles from "./Timer.module.scss";
export const Timer = ({ time }) => {
  const convertTime = (miliseconds) => {
    const hh = String(Math.floor((miliseconds / (60 * 60 * 1000)) % 60))
      .padStart(2, "0")
      .slice(-2);
    const mm = String(Math.floor((miliseconds / (60 * 1000)) % 60))
      .padStart(2, "0")
      .slice(-2);
    const ss = String(Math.floor((miliseconds / 1000) % 60))
      .padStart(2, "0")
      .slice(-2);
    const mil = String(Math.floor(miliseconds % 1000))
      .padStart(2, "0")
      .padStart(3, "0")
      .slice(-3);

    return `${hh}:${mm}:${ss}.${mil}`;
  };
  return <div className={styles.timer}>{convertTime(time)}</div>;
};