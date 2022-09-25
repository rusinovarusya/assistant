import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherObject } from "../types/weather.types";


const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/data/2.5/" }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherObject, { lat: number, lon: number, language: string }>({
      query: (arg) => {
        const { lat, lon, language } = arg;
        return {
          url: `onecall?lat=${lat}&lon=${lon}&units=metric&lang=${language}&appid=${apiKey}`,
          params: { lat, lon }
        }
      }
    })
  })
})

export const { useGetWeatherQuery } = weatherApi;
