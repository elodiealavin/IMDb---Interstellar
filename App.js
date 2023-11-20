import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logo.png")} style={styles.img} />
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: "red",
    backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: "center",
  },

  header: {
    backgroundColor: "grey",
    height: 50,
    marginTop: Constants.statusBarHeight,
  },

  img: {
    width: 110,
    height: 50,
  },
});
