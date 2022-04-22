import { View, Text,ScrollView, StyleSheet } from "react-native";
import React from "react";
import Header from "../Helper/Header";
import Card from "../Helper/Card";
import PopularCard from "../Helper/PopularCard";
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Now Showing" />
      <Card />
      <Header title="Popular" />
      <PopularCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "85%",
    width: "100%",
    top: "10%",
    bottom: 500,
    zIndex: -10,
  },
})

export default Home;
