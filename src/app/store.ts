import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../features/weatherApi";
import logger from "redux-logger";


export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
})
