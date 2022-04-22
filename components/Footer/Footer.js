import { View, Text,StyleSheet } from "react-native";
import { MaterialCommunityIcons,AntDesign  } from '@expo/vector-icons';
import React from "react";

export default function Footer() {
  return (
    <View style={styles.Fcontainer}>
      <MaterialCommunityIcons name="movie-filter" size={24} color="black" />
      <AntDesign name="pluscircle" style={styles.addIco} size={30} />
      <MaterialCommunityIcons name="ticket" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
    addIco:{
        color:"black",
    },
    Fcontainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        paddingVertical: 10,
        position: "absolute",
        width: "100%",
        // height: "10%",
        // top: "95%",
        bottom: 0,
        zIndex: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,

    }
});