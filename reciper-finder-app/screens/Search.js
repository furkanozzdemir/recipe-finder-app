import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View>
      <View
        style={{
          width: "80%",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TextInput
          placeholder="Search any recipes"
          style={{
            width: "100%",
            height: 46,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#C0C0C0",
            backgroundColor: "#FFFFFF",
            textAlign: "center",
          }}
        />
        <TouchableOpacity
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
    </View>
  );
}

export default SearchBar;
