import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

export default function HomeScreen() {
  const [searchApi, result] = useResults();
  const [term,setTerm] = useState('')
  const resultFilterByPrice = (price) => {
    return result.filter((result) => {
       return result.price == price;
    });
  };
  return (
    <View style = {styles.container}>
      <SearchBar onTermChange={setTerm} term={term} onTermSubmit={() => searchApi(term)}/>
      <ScrollView>
        <ResultList title="Ucuz Restoranlar" result={resultFilterByPrice("₺₺")} />
        <ResultList title="Orta Restoranlar" result={resultFilterByPrice("₺₺₺")} />
        <ResultList title="Pahalı Restoranlar" result={resultFilterByPrice("₺₺₺₺")} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({container : {flex:1}});
