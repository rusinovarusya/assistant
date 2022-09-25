import { useGetWeatherQuery } from "../../features/weatherApi";


export type DaylightHours = {
  sunrise?: number;
  sunset?: number;
  currentTime?: number;
}

export const useDaylightIndicatorData = (): {
  daylightHours: DaylightHours,
  isLoading: boolean
} => {
  const lat: number = 0;
  const lon: number = 0;
  const language = "en";

  const { data, isLoading } = useGetWeatherQuery({ lat, lon, language });

  const daylightHours = {
    sunrise: data?.current.sunrise,
    sunset: data?.current.sunset,
    currentTime: data?.current.dt
  }
  return { daylightHours, isLoading };
}


export const getGradient = (sunrise?: number, sunset?: number, currentTime?: number) => {
  if (sunrise && sunset && currentTime) {
    const elapsedPartOfDaylight = (sunrise < currentTime) ? (currentTime - sunrise) / (sunset - sunrise) * 100 : 0;
    const restOfDaylight = (elapsedPartOfDaylight) ? elapsedPartOfDaylight + 5 : elapsedPartOfDaylight;
    return { 
      background: `linear-gradient(to right, var(--main-color) ${elapsedPartOfDaylight}%, var(--extra-color) ${restOfDaylight}%)` 
    }
  }
}
