import { View, ScrollView, StyleSheet } from "react-native";
import Navbar from "./components/Nvbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Home />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});
