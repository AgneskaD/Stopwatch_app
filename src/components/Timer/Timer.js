import styles from "./Timer.module.scss";

export const Timer = ({ time }) => {
  const convertTime = (miliseconds) => {
    const hh = ("0" + Math.floor((miliseconds / 60 / 60000) % 60)).slice(-2);
    const mm = ("0" + Math.floor((miliseconds / 60000) % 60)).slice(-2);
    const ss = ("0" + Math.floor((miliseconds / 1000) % 60)).slice(-2);
    const mil = ("0" + Math.floor((miliseconds / 10) % 100)).slice(-2);
    return hh + ":" + mm + ":" + ss + "." + mil;
  };
    return (
      <div className={styles.timer}>
      {convertTime(time)}
      {/* <span>{("0" + hours).slice(-2)}:</span>
      <span>{("0" + minutes).slice(-2)}:</span>
      <span>{("0" + seconds).slice(-2)}.</span>
      <span>{("0" + miliseconds).slice(-2)}</span> */}
    </div>
  );
};