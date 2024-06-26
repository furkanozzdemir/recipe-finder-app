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
import { removeFavorite } from "../redux/savedSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
function Saved() {
  const savedRecipes = useSelector((state) => state.save);
  const dispatch = useDispatch();
  const getFractionalPart = (value) => {
    if (Number.isNaN(value)) return null;
    const fractionalPart = value.toFixed(0); // Virgülden sonraki tek basamak
    return fractionalPart;
  };

  const handleRemoveFavorite = (label) => {
    dispatch(removeFavorite(label));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 60,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>Favorites</Text>
      <FlatList
        data={savedRecipes}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: "100%", height: 700 }}
        ItemSeparatorComponent={() => <View style={{ height: 50 }} />}
        renderItem={({ item }) => (
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

                <View>
                  <TouchableOpacity
                    onPress={() => handleRemoveFavorite(item.recipe.label)}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-remove"
                      size={39}
                      color="black"
                    />
                  </TouchableOpacity>
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
        )}
      />
    </View>
  );
}
export default Saved;
