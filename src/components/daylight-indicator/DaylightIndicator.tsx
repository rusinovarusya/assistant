import { FC, memo } from "react";
import styles from "./DaylightIndicator.module.css";


const DaylightIndicator: FC = () => {
  return (
    <div className={styles.indicator}></div>
  )
}

export default memo(DaylightIndicator);
