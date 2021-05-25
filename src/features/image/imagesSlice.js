import { createSlice } from "@reduxjs/toolkit";

import milford1 from "../../images/milford1.jpg";
import milford2 from "../../images/milford2.jpg";
import milford3 from "../../images/milford3.jpg";
import milford4 from "../../images/milford4.jpg";

const initialState = [milford1, milford2, milford3, milford4];

const imageSlice = createSlice({
  name: "images",
  initialState: initialState,
  reducers: {
    setImages: (images, action) => action.payload,
  },
});

export const selectImages = (state) => state.images;

export const { setImages } = imageSlice.actions;

export default imageSlice.reducer;
