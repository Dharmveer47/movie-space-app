import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

// http://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg

export default function PopularCard() {
  return (
    <ScrollView style={styles.MainContainer}>
      <SingleMovie />
      <SingleMovie />
      <SingleMovie />
    </ScrollView>
  );
}
export const Rating = () => {
  return (
    <View style={styles.Desc}>
      <AntDesign name="star" size={18} style={styles.ratingIco} />
      <Text style={styles.rating}>9.1/10 IMDb</Text>
    </View>
  );
};

const SingleMovie = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "http://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        }}
      />
      <View style={styles.des}>
        <Text style={styles.title}>Spider Man : No Way Home</Text>
        <Rating />
        <View style={styles.TypeContainer}>
          <Text style={styles.MovieType}>HORROW</Text>
          <Text style={styles.MovieType}>MYSTERY</Text>
          <Text style={styles.MovieType}>THRILLER</Text>
        </View>
        <View style={styles.Desc}>
          <Ionicons name="md-time-outline" size={18} color="black" />
          <Text style={styles.rating}>2h 34m</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    // marginBottom: 100,
  },
  TypeContainer: {
    flexDirection: "row",
  },
  MovieType: {
    fontSize: 8,
    // width: 80,
    textAlign: "center",
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 8,
    marginTop: 5,
    color: "gray",
    borderColor: "gray",
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 160,
    borderRadius: 10,
    margin: 5,
    position: "relative",
    zIndex: -1,
  },
  container: {
    flexDirection: "row",
    margin: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    width: 200,
  },
  des: {
    marginTop: 15,
    marginLeft: 10,
  },
  Desc: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    margin: 5,
  },
  ratingIco: {
    color: "#FFD700",
  },
});
