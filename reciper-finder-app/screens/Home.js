import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import getRandomRecipes from "../services/RandomApi";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import getRecipeWeek from "../services/recipeWeek";
import mealTypes from "../components/category";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRecipe } from "../redux/detailSlice";
import SearchBar from "./Search";
import { setCategory } from "../redux/categorySlice";
const Home = () => {
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [randomWeek, setRandomWeek] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  function goDeatil(item) {
    console.log(item);
    dispatch(getDetailRecipe(item));
    navigation.navigate("recipeDetail");
  }
  async function fetchData() {
    try {
      const random = await getRandomRecipes();
      setRandomRecipe(random);
      const weekRandom = await getRecipeWeek();
      setRandomWeek(weekRandom);

      setIsLoading(false);
    } catch (error) {
      console.error("Veri getirilirken hata:", error);
      setIsLoading(false);
    }
  }

  const getFractionalPart = (value) => {
    if (Number.isNaN(value)) return null;
    const fractionalPart = value.toFixed(0); // Virgülden sonraki tek basamak
    return fractionalPart;
  };

  function setName(item) {
    dispatch(setCategory(item.label));
    navigation.navigate("category");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F7F7F7",

        paddingTop: 30,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        paddingBottom: 120,
      }}
    >
      <View
        style={{
          width: "94%",
          height: 59,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>Hi Furkan</Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/hand.png")}
          />
        </View>

        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Got a tasty dish in mind?
        </Text>
      </View>
      <SearchBar />
      <View style={{ width: "95%" }}>
        <View style={{ paddingBottom: 5 }}>
          <Text style={{ width: "90%", fontWeight: "bold", fontSize: 20 }}>
            Categories
          </Text>
        </View>

        <FlatList
          horizontal={true}
          data={mealTypes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setName(item)}>
              <View style={{ paddingRight: 15, paddingTop: 5, paddingLeft: 2 }}>
                <View
                  style={{
                    width: 70,
                    height: 70,

                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    elevation: 10,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <Text
                  style={{
                    width: "90%",
                    textAlign: "center",
                    paddingTop: 5,
                    fontWeight: "bold",
                  }}
                >
                  {item.label}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ width: "95%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Recommended for you
          </Text>

          <Text style={{ color: "#0D9A61", fontSize: 15 }}>See more</Text>
        </View>
        <FlatList
          horizontal={true}
          data={randomRecipe}
          contentContainerStyle={{
            alignItems: "center",
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.recipe.uri}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => goDeatil(item)}>
              <View
                style={{
                  width: 140,
                  height: 230,
                  borderRadius: 10,

                  overflow: "hidden",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    borderRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingRight: 10,
                  }}
                >
                  <Image
                    source={{ uri: item.recipe.image }}
                    style={{
                      width: "100%",
                      height: 170,
                      resizeMode: "cover",
                      borderRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  />
                </View>
                <View style={{ width: "100%", alignItems: "flex-start" }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    {item.recipe.label}
                  </Text>
                </View>

                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",

                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingRight: 10,
                    }}
                  >
                    <Ionicons name="alarm" size={17} color="#0D9A61" />
                    <Text
                      style={{ color: "#BEBFC5", fontSize: 13, paddingLeft: 3 }}
                    >
                      {item.recipe.totalTime}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialIcons
                      name="local-fire-department"
                      size={18}
                      color="#FFD233"
                    />
                    <Text style={{ color: "#BEBFC5", fontSize: 13 }}>
                      {getFractionalPart(item.recipe.calories)}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{ width: "95%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Recipes of the week
          </Text>

          <Text style={{ color: "#0D9A61", fontSize: 15 }}>See more</Text>
        </View>
        <FlatList
          horizontal={true}
          data={randomWeek}
          contentContainerStyle={{
            alignItems: "center",
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.recipe.uri}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => goDeatil(item)}>
              <View
                style={{
                  width: 250,
                  height: 230,
                  borderRadius: 10,

                  overflow: "hidden",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    borderRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingRight: 10,
                  }}
                >
                  <Image
                    source={{ uri: item.recipe.image }}
                    style={{
                      width: "100%",
                      height: 170,
                      resizeMode: "cover",
                      borderRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  />
                </View>
                <View style={{ width: "100%", alignItems: "flex-start" }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    {item.recipe.label}
                  </Text>
                </View>

                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",

                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingRight: 10,
                    }}
                  >
                    <Ionicons name="alarm" size={17} color="#0D9A61" />
                    <Text
                      style={{ color: "#BEBFC5", fontSize: 13, paddingLeft: 3 }}
                    >
                      {item.recipe.totalTime}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialIcons
                      name="local-fire-department"
                      size={18}
                      color="#FFD233"
                    />
                    <Text style={{ color: "#BEBFC5", fontSize: 13 }}>
                      {getFractionalPart(item.recipe.calories)}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
