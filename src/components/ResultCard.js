import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ResultCard({ item }) {
  return (
    <View style={styles.container}>
      <Image
        source={item.image_url ? { uri: item.image_url } : null}
        style={{ width: 250,height:120, backgroundColor: "red" ,borderRadius:15,marginBottom:10}}
      />
      <Text style={{fontWeight :'700'}}>{item.name}</Text>
      <Text>{item.rating} Değerlendirme Puanı</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
        marginLeft:10
    }
});
