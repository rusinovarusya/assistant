import { FC, memo } from "react";
import styles from "./DaylightIndicator.module.css";
import { getGradient, useDaylightIndicatorData } from "./use-daylight-indicator-data";


const DaylightIndicator: FC = () => {
  const { daylightHours, isLoading } = useDaylightIndicatorData();
  const gradient = getGradient(daylightHours.sunrise, daylightHours.sunset, daylightHours.currentTime);
  
  if (isLoading) {
    return (
      <div className={styles.indicator}></div>
    )
  }

  return (
    <div className={styles.indicator} style={gradient}></div>
  )
}

export default memo(DaylightIndicator);
