import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ResultCard from "./ResultCard";
import { useNavigation } from "@react-navigation/native";



export default function ResultList({ title, result }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={result}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {navigation.navigate('ResultScreen',{item : item.id})}}>
              <ResultCard item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  header: { fontSize: 18, fontWeight: "bold", marginLeft: 20 },
});
