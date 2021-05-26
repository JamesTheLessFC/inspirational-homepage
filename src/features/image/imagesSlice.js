import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchImages } from "./imageAPI";

import milford1 from "../../images/milford1.jpg";
import milford2 from "../../images/milford2.jpg";
import milford3 from "../../images/milford3.jpg";
import milford4 from "../../images/milford4.jpg";

const initialState = {
  images: [milford1, milford2, milford3, milford4],
  loading: false,
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
  reducers: {
    setImages: (images, action) => action.payload,
  },
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

export const selectImages = (state) => state.images.images;

export const { setImages } = imageSlice.actions;

export default imageSlice.reducer;
