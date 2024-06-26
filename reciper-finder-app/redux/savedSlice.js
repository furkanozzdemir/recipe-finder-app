import { createSlice } from "@reduxjs/toolkit";

export const saveSlice = createSlice({
  name: "save",
  initialState: [],
  reducers: {
    saveRecipes: (state, action) => {
      state.push(action.payload);
    },

    removeFavorite: (state, action) => {
      return state.filter((recipe) => recipe.recipe.label !== action.payload);
    },
  },
});

export const { saveRecipes, removeFavorite } = saveSlice.actions;

export default saveSlice.reducer;
