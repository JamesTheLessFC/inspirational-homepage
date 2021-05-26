import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherAPI";

const initialState = {
  temperature: "73.45",
  icon: "01d",
  description: "clear sky",
  loading: false,
  failedToLoad: false,
};

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrent",
  async () => {
    const response = await fetchWeather();
    return response;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    setWeather: (weather, action) => {
      weather = action.payload;
    },
  },
  extraReducers: {
    [fetchCurrentWeather.pending]: (weather) => {
      weather.loading = true;
    },
    [fetchCurrentWeather.fulfilled]: (weather, action) => {
      return {
        ...action.payload,
        loading: false,
        failedToLoad: false,
      };
    },
    [fetchCurrentWeather.rejected]: (weather) => {
      weather.loading = false;
      weather.failedToLoad = true;
    },
  },
});

export const selectWeather = (state) => state.weather;

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
