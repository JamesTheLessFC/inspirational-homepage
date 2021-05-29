import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuoteOfTheDay } from "./quoteAPI";

const initialState = {
  text: "",
  author: "",
  loading: true,
  failedToLoad: false,
};

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await fetchQuoteOfTheDay();
  return response;
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  extraReducers: {
    [fetchQuote.pending]: (quote) => {
      quote.loading = true;
    },
    [fetchQuote.fulfilled]: (quote, action) => {
      return {
        ...action.payload,
        loading: false,
        failedToLoad: false,
      };
    },
    [fetchQuote.rejected]: (quote) => {
      quote.loading = false;
      quote.failedToLoad = true;
    },
  },
});

export const selectQuote = (state) => {
  return state.quote;
};

export default quoteSlice.reducer;
