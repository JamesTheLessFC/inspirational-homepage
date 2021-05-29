import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherAPI";

const initialState = {
  latitude: "",
  longitude: "",
  temperature: "",
  icon: "",
  description: "",
  loading: true,
  failedToLoad: false,
};

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrent",
  async (location) => {
    const response = await fetchWeather(location);
    return response;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    setLocation: (weather, action) => {
      weather.latitude = action.payload.latitude;
      weather.longitude = action.payload.longitude;
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
        latitude: weather.latitude,
        longitude: weather.longitude,
      };
    },
    [fetchCurrentWeather.rejected]: (weather) => {
      weather.loading = false;
      weather.failedToLoad = true;
    },
  },
});

export const selectWeather = (state) => state.weather;

export const { setLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
