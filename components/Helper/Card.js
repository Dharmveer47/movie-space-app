import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Card() {
  const Data = [
    {
      id: 1,
      image: "http://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",

      title: "Spider Man : No Way Home",
    },
    {
      id: 2,
      image: "http://image.tmdb.org/t/p/w300/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
      title: "Eternals ",
    },
    {
      id: 3,
      image: "http://image.tmdb.org/t/p/w300/x6FsYvt33846IQnDSFxla9j0RX8.jpg",
      title: "Moon Knight",
    },
    {
      id: 4,
      image: "http://image.tmdb.org/t/p/w300/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
      title: "Doctor Strange in the Multiverse ...",
    },
  ];
  return (
    <ScrollView style={styles2.CardContainer} horizontal={true}>
      {Data.map((item) => {
        return (
          <SingleCard key={item.id} image={item.image} title={item.title} />
        );
      })}
    </ScrollView>
  );
}

export const SingleCard = ({ image, title }) => {
  return (
    <View style={styles.SingleCard}>
      <Image
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      <Text style={styles.titile}>{`${title}`}</Text>
      <Rating />
    </View>
  );
};

export const Rating = () => {
  return (
    <View style={styles.Desc}>
      <AntDesign name="star" size={18} style={styles.ratingIco} />
      <Text style={styles.rating}>9.1/10 IMDb</Text>
    </View>
  );
};

const styles2 = StyleSheet.create({
  CardContainer: {
    flexDirection: "row",
    // Overflow scroll in react native
    overflow: "scroll",
    paddingVertical: 10,
    // Scroll Vertical
  },
});

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 160,
    borderRadius: 10,
  },
  SingleCard: {
    margin: 10,
    width: 120,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    position: "relative",
    elevation: 5,
    flexDirection: "column",
  },
  Desc: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    margin: 5,
  },
  ratingIco: {
    color: "#FFD700",
  },
  // Center title text
  titile: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
