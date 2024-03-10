import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar({onTermChange,onTermSubmit,term}) {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome
        style={styles.searchIcon}
        name="search"
        size={24}
        color="black"
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Ara"
        placeholderTextColor={"white"}
        onChangeText={onTermChange}
        onSubmitEditing={onTermSubmit}
        value={term}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    borderRadius: 20,
    margin: 15,
  },
  searchIcon: {
    margin: 10,
    fontSize: 28,
  },
  searchInput: {
    backgroundColor: "gray",
    flex: 1,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    padding: 10,
    color: "white",
    fontSize: 18,
  },
});
