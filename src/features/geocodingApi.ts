import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GeocodingObject } from "../types/geocoding.types";


const apiKey = process.env.REACT_APP_WEATHER_API_KEY; // maybe other

export const geocodingApi = createApi({
  reducerPath: "geocodingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.openweathermap.org/geo/1.0/ "}),
  endpoints: (builder) => ({
    getGeocoding: builder.query<GeocodingObject, { cityName: string, stateCode: number, countryCode: number, limit: number }>({
      query: (arg) => {
        const { cityName, stateCode, countryCode, limit = 1 } = arg;
        return {
          url: `direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`,
          params: { cityName, stateCode, countryCode, limit }
        }
      }
    })
  })
})

export const { useGetGeocodingQuery } = geocodingApi;
