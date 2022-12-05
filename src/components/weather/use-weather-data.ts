import { useGetWeatherQuery } from "../../features/weatherApi";


export type WeatherContent = {
  description?: string;
  feelsLike?: number;
  humidity?: number;
  icon?: string;
  main?: string;
  pressure?: number;
  rainIn1Hour?: number;
  snowIn1Hour?: number;
  temp?: number;
  uvi?: number;
  windDegree?: number;
  windSpeed?: number;
}

export const useWeatherData = (): {
  weatherContent: WeatherContent,
  isLoading: boolean
} => {
  const lat: number = 51.672;
  const lon: number = 39.1843;
  const language = "en";

  const { data, isLoading } = useGetWeatherQuery({lat, lon, language});

  const weatherContent = {
    description: data?.current.weather[0].description,
    feelsLike: data?.current.feels_like,
    humidity: data?.current.humidity,
    icon: data?.current.weather[0].icon,
    main: data?.current.weather[0].main,
    pressure: data?.current.pressure,
    rainIn1Hour: 1, //data?.current.rain["1h"],
    snowIn1Hour: 1, //data?.current.snow["1h"],
    temp: data?.current.temp,
    uvi: data?.current.uvi,
    windDegree: data?.current.wind_deg,
    windSpeed: data?.current.wind_speed
  }

  return { weatherContent, isLoading };
}