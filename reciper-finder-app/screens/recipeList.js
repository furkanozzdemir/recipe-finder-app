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
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getDetailRecipe } from "../redux/detailSlice";
function RecipesList() {
  const navigation = useNavigation();
  const recipess = useSelector((state) => state.recipes.data);
  const dispatch = useDispatch();

  function setDetail(item) {
    dispatch(getDetailRecipe(item));
    navigation.navigate("recipeDetail");
  }

  const getFractionalPart = (value) => {
    if (Number.isNaN(value)) return null;
    const fractionalPart = value.toFixed(0); // Virgülden sonraki tek basamak
    return fractionalPart;
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        position: "relative",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("search")}
        style={{ position: "absolute", top: 50, left: 15 }}
      >
        <Ionicons name="arrow-back" size={39} color="black" />
      </TouchableOpacity>

      <FlatList
        data={recipess}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: "100%", height: 700 }}
        ItemSeparatorComponent={() => <View style={{ height: 50 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setDetail(item)}>
            <View
              style={{
                width: "100%",
                alignItems: "center",

                paddingTop: 20,
              }}
            >
              <View
                style={{
                  width: "80%",
                  height: 300,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                  overflow: "hidden",

                  borderColor: "grey",
                  elevation: 10,
                }}
              >
                <Image
                  source={{ uri: item.recipe.image }}
                  resizeMode="stretch"
                  style={{
                    width: "100%",
                    height: 300,
                    borderRadius: 15,
                  }}
                />
              </View>

              <View style={{ width: "80%" }}>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 24,
                    textAlign: "center",
                    paddingTop: 20,
                  }}
                >
                  {item.recipe.label}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: 10,
                    alignItems: "center",
                    justifyContent: "space-around",
                    gap: 50,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="timer" size={30} color="#0D9A61" />
                    <Text
                      style={{
                        color: "black",
                        fontSize: 18,
                      }}
                    >
                      {item.recipe.totalTime}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="lightning-bolt"
                      size={30}
                      color="#FFBF00"
                    />
                    <Text style={{ color: "black", fontSize: 18 }}>
                      {getFractionalPart(item.recipe.calories)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
export default RecipesList;
