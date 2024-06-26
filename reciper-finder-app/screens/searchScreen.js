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
import { useEffect, useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { Foundation } from "@expo/vector-icons";
import { setRecipes } from "../redux/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function SearchRecipe() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const animation = useRef(null);
  const [data, setData] = useState(true);

  async function getRecipes() {
    try {
      const search = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=7399df41&app_key=f21cb635ad6a425d9ed9dee34d999a3d&from=0&to=10`
      );

      const response = search.data.hits;

      dispatch(setRecipes(response));

      navigation.navigate("recipeList");
      setQuery("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingTop: 100,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#F7F7F7",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 18,
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Foundation name="lightbulb" size={35} color="#FFD233" />
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>
            Search any recipe
          </Text>
          <Foundation name="lightbulb" size={35} color="#FFD233" />
        </View>

        <View
          style={{
            width: "95%",
            paddingLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search any recipes"
            style={{
              width: "80%",
              height: 46,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#C0C0C0",
              backgroundColor: "#FFFFFF",
              textAlign: "center",
            }}
          />
          <TouchableOpacity
            onPress={() => getRecipes()}
            style={{
              width: 50,
              height: 45,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0D9A61",
            }}
          >
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <LottieView
          autoPlay
          speed={1.5}
          ref={animation}
          style={{
            width: 450,
            height: 600,
            backgroundColor: "#F7F7F7",
          }}
          source={require("../assets/anim.json")}
        />
      </View>
    </View>
  );
}
export default SearchRecipe;
