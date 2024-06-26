import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
};

export const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
