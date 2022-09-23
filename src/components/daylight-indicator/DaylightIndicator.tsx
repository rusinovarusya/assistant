import { FC, memo } from "react";
import styles from "./DaylightIndicator.module.css";
import { gradient } from "./use-daylight-indicator-data";


const DaylightIndicator: FC = () => {
  return (
    <div className={styles.indicator} style={gradient}></div>
  )
}

export default memo(DaylightIndicator);
