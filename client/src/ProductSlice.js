import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const ProductSlice = createSlice({
  name: "changer",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = ProductSlice.actions;

export default ProductSlice.reducer;
