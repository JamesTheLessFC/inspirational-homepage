import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "../features/goals/goalsSlice";
import quoteReducer from "../features/quote/quoteSlice";
import timeReducer from "../features/time/timeSlice";
import weatherReducer from "../features/weather/weatherSlice";
import imagesReducer from "../features/image/imagesSlice";

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
    quote: quoteReducer,
    time: timeReducer,
    weather: weatherReducer,
    images: imagesReducer,
  },
});
