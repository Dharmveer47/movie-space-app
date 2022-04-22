import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ title="Now Showing" }) {
  return (
    <View style={styles.Header}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnText}>See More</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "black",
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    color: "white",
    borderWidth: 1,
    borderColor: "gray",    
  },
    btnText: {
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "sans-serif",
    color: "gray",
    },
});
