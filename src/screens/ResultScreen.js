import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import yelp from "../api/yelp";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function ResultScreen({ route }) {
  const id = route.params.item;
  const [result, setResult] = useState(null);
  const item = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  console.log("result", result);
  useEffect(() => {
    item(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={{ alignSelf: "center" }}>
        {result.is_close ? (
          <AntDesign name="closecircleo" size={24} color="black" />
        ) : (
          <FontAwesome name="openid" size={24} color="black" />
        )}
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    height: 180,
    margin: 10,
    borderRadius: 20,
  },
  phone: { fontSize: 20, alignSelf: "center" },
  name: { fontSize: 25, alignSelf: "center", fontWeight: "bold" },
});
