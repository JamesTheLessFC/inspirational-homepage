import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  hours: dayjs().format("h"),
  minutes: dayjs().format("mm"),
  ampm: dayjs().format("A"),
  weekday: dayjs().format("dddd"),
  month: dayjs().format("MMM"),
  day: dayjs().format("DD"),
};

const timeSlice = createSlice({
  name: "time",
  initialState: initialState,
  reducers: {
    setTime: (time, action) => action.payload,
  },
});

export const selectTime = (state) => state.time;

export const { setTime } = timeSlice.actions;

export default timeSlice.reducer;
