import { FC, memo } from "react";
import styles from "./Weather.module.css";


const Weather: FC = () => {
  return (
    <div className={styles.weather}>Weather</div>
  )
}

export default memo(Weather);
