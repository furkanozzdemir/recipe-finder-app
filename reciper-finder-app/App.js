import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./screens/Home";
import getRandomRecipes from "./services/RandomApi";
import category from "./components/category";
import mealTypes from "./components/category";
import Constants from "expo-constants";
import SearchBar from "./screens/Search";
import MyTabs from "./navigation/tabNavigator";
import SearchScreen from "./screens/searchScreen";
import Saved from "./screens/saved";
import MyStack from "./navigation/stackNavigator";
import recipeslice from "./redux/recipeSlice";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import recipList from "./screens/recipeList";
import Recipe from "./screens/recipeDetail";
import saved from "./redux/savedSlice";

import categories from "./screens/categories";
export default function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}
