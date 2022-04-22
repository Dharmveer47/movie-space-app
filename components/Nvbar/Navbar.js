import React, { useState } from "react";
import { Text, View, Button, Pressable } from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { styles } from "./Styles.module";

export default function App() {
  const [show, setShow] = useState(false);
  const showMessage = () => {
    alert("onPress Called...");
  };
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.container}>
        <View>
          <Ionicons
            onPress={() => setShow(true)}
            style={show && styles.hide}
            name="ios-menu"
            size={24}
            color="black"
          />
          <Entypo
            onPress={() => setShow(false)}
            style={!show && styles.hide}
            name="cross"
            size={25}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.title} onPress={showMessage}>
            Movie-Space
          </Text>
        </View>
        <View>
          <Feather name="bell" size={24} color="black" />
        </View>
      </View>
      <View style={show ? styles.DropDown : styles.hide}>
        <Text style={styles.DropDownText}>Movies</Text>
        <Text style={styles.DropDownText}>Tv Shows</Text>
        <Text style={styles.DropDownText}>People</Text>
        <Text style={styles.DropDownText}>My List</Text>
      </View>
    </View>
  );
}
