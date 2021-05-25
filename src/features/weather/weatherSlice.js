import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temperature: "73.45",
  icon: "01d",
  description: "clear sky",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    setWeather: (weather, action) => {
      weather = action.payload;
    },
  },
});

export const selectWeather = (state) => state.weather;

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
