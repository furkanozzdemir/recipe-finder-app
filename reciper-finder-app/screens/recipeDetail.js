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
import Axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { saveRecipes } from "../redux/savedSlice";

function RecipeDetail() {
  const recipeDetail = useSelector((state) => state.detail.details);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  function savedPage() {
    dispatch(saveRecipes(recipeDetail));
    alert("favorilere eklendi");
  }
  const getFractionalPart = (value) => {
    if (Number.isNaN(value)) return null;
    const fractionalPart = value.toFixed(0); // Virgülden sonraki tek basamak
    return fractionalPart;
  };

  const getFractional = (value) => {
    if (Number.isNaN(value)) return null;
    const fractionalPart = value.toFixed(1); // Virgülden sonraki tek basamak
    return fractionalPart;
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 45,
        position: "relative",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("recipeList")}
        style={{ position: "absolute", left: 12, top: 45 }}
      >
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold", fontSize: 21, marginBottom: 10 }}>
        Reciep
      </Text>
      <Image
        source={{ uri: recipeDetail.recipe.image }}
        resizeMode="cover"
        style={{
          width: "90%",
          height: 220,
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 10,
        }}
      />
      <View style={{ width: "90%" }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            paddingLeft: 10,
            fontWeight: "bold",
            fontSize: 25,
            paddingTop: 15,
            paddingBottom: 15,
            textAlign: "left",
          }}
        >
          {recipeDetail.recipe.label}
        </Text>
      </View>

      <View
        style={{
          width: "90%",
          height: 80,
          flexDirection: "row",
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#BEBFC5",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View style={{ gap: 4, alignItems: "center" }}>
          <Text style={{ color: "#4F8777", fontWeight: "bold", fontSize: 20 }}>
            {getFractionalPart(recipeDetail.recipe.calories)}
          </Text>
          <Text style={{ color: "grey" }}>Kcal</Text>
        </View>
        <View style={{ alignItems: "center", gap: 4 }}>
          <Text style={{ color: "#4F8777", fontWeight: "bold", fontSize: 20 }}>
            {getFractionalPart(recipeDetail.recipe.totalWeight)}
          </Text>
          <Text style={{ color: "grey" }}>grams</Text>
        </View>
        <View style={{ alignItems: "center", gap: 4 }}>
          <Text style={{ color: "#4F8777", fontWeight: "bold", fontSize: 20 }}>
            {recipeDetail.recipe.totalTime}
          </Text>
          <Text style={{ color: "grey" }}>minutes</Text>
        </View>
        <View style={{ alignItems: "center", gap: 4 }}>
          <Text style={{ color: "#4F8777", fontWeight: "bold", fontSize: 19 }}>
            {recipeDetail.recipe.dietLabels[0]}
          </Text>
          <Text style={{ color: "grey" }}>diet</Text>
        </View>
      </View>

      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "flex-start",
          height: 50,
          flexDirection: "row",
          gap: 20,
          borderRadius: 15,

          marginTop: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#43927D",
            padding: 10,
            borderRadius: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {recipeDetail.recipe.cuisineType[0]}
        </Text>
        <Text
          style={{
            backgroundColor: "#43927D",
            padding: 10,
            borderRadius: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {recipeDetail.recipe.mealType[0]}
        </Text>
        <Text
          style={{
            backgroundColor: "#43927D",
            padding: 10,
            borderRadius: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {recipeDetail.recipe.dishType[0]}
        </Text>
      </View>

      <View
        style={{
          width: "90%",
          height: 315,
          paddingTop: 15,
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Ingredients</Text>
          <Text style={{ fontSize: 18, color: "grey" }}>İtems</Text>
        </View>

        <FlatList
          data={recipeDetail.recipe.ingredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{}}>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      resizeMode="stretch"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 15,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                        paddingLeft: 5,
                      }}
                    >
                      {item.food}
                    </Text>
                  </View>
                  <Text>{getFractional(item.quantity)}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      <View
        style={{
          width: "90%",
          height: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <TouchableOpacity
          onPress={savedPage}
          style={{
            width: "18%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#ced4da",
          }}
        >
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={39}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "78%",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#43927D",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "white",
              paddingBottom: 5,
            }}
          >
            Start cooking
          </Text>
          <Entypo name="controller-play" size={26} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default RecipeDetail;
