import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Search from "../screens/searchScreen";
import Saved from "../screens/saved";
import Home from "../screens/Home";
import MyTabs from "./tabNavigator";
import recipeList from "../screens/recipeList";
import detail from "../screens/recipeDetail";

import category from "../screens/categories";
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="tab"
          component={MyTabs}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="recipeList"
          component={recipeList}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="recipeDetail"
          component={detail}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="category"
          component={category}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
