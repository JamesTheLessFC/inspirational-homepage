import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchImages } from "./imageAPI";

const initialState = {
  images: [],
  loading: true,
  failedToLoad: false,
};

export const fetchImageUrls = createAsyncThunk(
  "images/fetchImageUrls",
  async () => {
    const response = fetchImages();
    return response;
  }
);

const imageSlice = createSlice({
  name: "images",
  initialState: initialState,
  extraReducers: {
    [fetchImageUrls.pending]: (images) => {
      images.loading = true;
    },
    [fetchImageUrls.fulfilled]: (images, action) => {
      return {
        images: action.payload,
        loading: false,
        failedToLoad: false,
      };
    },
    [fetchImageUrls.rejected]: (images) => {
      images.loading = false;
      images.failedToLoad = true;
    },
  },
});

export const selectImages = (state) => state.images;

export default imageSlice.reducer;
