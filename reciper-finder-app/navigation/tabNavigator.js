import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchBar from "../screens/searchScreen";
import Saved from "../screens/saved";
import Home from "../screens/Home";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons"; // FontAwesome6'dan FontAwesome'a değiştirildi çünkü FontAwesome6 import edilemiyor gibi görünüyor.
import { Entypo } from "@expo/vector-icons";
import searchScreen from "../screens/searchScreen";
import RecipesList from "../screens/recipeList";
import RecipeDetail from "../screens/recipeDetail";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          borderTopWidth: 0,
          justifyContent: "center",
          height: 60,
          paddingTop: 9,
          borderTopWidth: 1,
          elevation: 10,
        },
        tabBarActiveTintColor: "#0D9A61", // Aktif sekme rengi
        tabBarInactiveTintColor: "black", // Pasif sekme rengi
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
            return <Entypo name={iconName} size={size} color={color} />;
          } else if (route.name === "search") {
            iconName = "search";
            return <Feather name={iconName} size={size} color={color} />;
          } else if (route.name === "save") {
            iconName = "heart";
            return <Feather name={iconName} size={size} color={color} />;
          }
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="search"
        component={SearchBar}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="save"
        component={Saved}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
