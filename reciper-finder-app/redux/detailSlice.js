import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: null,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    getDetailRecipe: (state, action) => {
      state.details = action.payload;
    },
  },
});
export const { getDetailRecipe } = detailSlice.actions;

export default detailSlice.reducer;
