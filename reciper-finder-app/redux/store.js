import { configureStore } from "@reduxjs/toolkit";
import recipe from "./recipeSlice";
import details from "./detailSlice";

import saved from "./savedSlice";

import categories from "./categorySlice";
export const store = configureStore({
  reducer: {
    recipes: recipe,
    detail: details,
    save: saved,
    category: categories,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // SerializableStateInvariantMiddleware'i devre dışı bırakır
    }),
});
