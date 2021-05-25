import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "There is no try.",
  author: "Yoda",
};

const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    setQuote: (quote, action) => {
      quote.text = action.payload.text;
      quote.author = action.payload.author;
    },
  },
});

export const { setQuote } = quoteSlice.actions;

export const selectQuote = (state) => {
  return state.quote;
};

export default quoteSlice.reducer;
