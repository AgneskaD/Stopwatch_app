import styles from "./Timer.module.scss";

export const Timer = ({ time }) => {
  const convertTime = (miliseconds) => {
    const hh = String(
      Math.floor((miliseconds / (60 * 60 * 1000)) % 60)
    ).padStart(2, "0");
    const mm = String(Math.floor((miliseconds / (60 * 1000)) % 60)).padStart(
      2,
      "0"
    );
    const ss = String(Math.floor((miliseconds / 1000) % 60)).padStart(2, "0");
    const mil = String(Math.floor(miliseconds % 1000)).padStart(3, "0");

    return `${hh}:${mm}:${ss}.${mil}`;
  };