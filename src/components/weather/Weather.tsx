import { FC, memo } from "react";
import { useWeatherData } from "./use-weather-data";
import styles from "./Weather.module.css";


const Weather: FC = () => {
  const { weatherContent, isLoading } = useWeatherData();

  const direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
  const windDirection = direction[Math.round(Number(weatherContent.windDegree) / 45)];
  
  if (isLoading) {
    return (
      <div className={styles.mainInformation}>Loading...</div>
    )
  }

  return (
    <div className={styles.weather}>
      <div className={styles.mainInformation}>
        <img src={`http://openweathermap.org/img/wn/${weatherContent.icon}@2x.png`} alt="weather icon" className={styles.weatherIcon}/>
        <p>{weatherContent.temp}°C</p>
      </div>
      <div className={styles.extraInformation}>
        <p className={styles.weatherDescription}>{weatherContent.main} {weatherContent.description}</p>
        <p className={styles.p}>Chance of rain in the next hour {weatherContent.rainIn1Hour || weatherContent.snowIn1Hour}%</p>
        <p className={styles.p}>UVI {weatherContent.uvi}</p>
        <p className={styles.p}>Wind {weatherContent.windSpeed} m/s, {windDirection}</p>
        <p className={styles.p}>Feels like {weatherContent.feelsLike}°C</p>
        <p className={styles.p}>Pressure {weatherContent.pressure} mmHg</p>
        <p className={styles.p}>Humidity {weatherContent.humidity}%</p>
      </div>
    </div>
  )
}

export default memo(Weather);
