import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
export const RecipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setRecipes } = RecipeSlice.actions;

export default RecipeSlice.reducer;
