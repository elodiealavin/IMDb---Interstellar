import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logo.png")} style={styles.img} />
      </View>

      <Text style={styles.Txt}>Interstellar</Text>
      <View style={styles.containerDescription}>
        <Text style={styles.Description}>2014 </Text>
        <Text style={styles.Description}>PG-13 </Text>
        <Text style={styles.Description}>2h 49min </Text>
        <Text style={styles.Description}>Adventure, Drama, Sci-Fi </Text>
      </View>

      <View style={styles.firstContainer}>
        <View style={styles.abstract}>
          <Image source={require("./assets/film.jpg")} style={styles.imgFilm} />
          <Text style={styles.abstractTxt}>
            A team of explores travel through a wormwhole in space in an attempt
            to ensure humanity's survival.
          </Text>
          <Text style={styles.button}> + ADD TO WATCHLIST </Text>
        </View>

        <View style={styles.vote}>
          <Ionicons name="star" size={30} color="yellow" />
          <Text style={styles.mean}>8.6</Text>
          <Text style={styles.note}>/10</Text>
          <Text style={styles.view}>1.1M</Text>
        </View>

        <View style={styles.like}>
          <Ionicons name="star-outline" size={30} color="white" />
          <Text style={styles.mean}>RATE THIS </Text>
        </View>

        <View style={styles.score}>
          <Text style={styles.scoreNote}>74</Text>
          <Text style={styles.mean}>Metascore</Text>
          <Text style={styles.view}>46 critic reviews</Text>
        </View>
      </View>

      <View style={styles.actors}>
        <Text style={styles.actorsTitle}>Top Billed Cast</Text>
        <Text style={styles.actorsMoreView}>SEE ALL</Text>
      </View>

      <View style={styles.pictures}>
        <View stye={styles.names}>
          <Image
            source={require("./assets/matthew.jpg")}
            style={styles.imgActor}
          />
          <Text>Matthew McCon...</Text>
          <Text>Cooper</Text>
        </View>

        <View stye={styles.names}>
          <Image
            source={require("./assets/anne.jpg")}
            style={styles.imgActor}
          />
          <Text>Matthew McCon...</Text>
          <Text>Cooper</Text>
        </View>

        <View stye={styles.names}>
          <Image
            source={require("./assets/jessica.jpg")}
            style={styles.imgActor}
          />
          <Text>Matthew McCon...</Text>
          <Text>Cooper</Text>
        </View>

        <View stye={styles.names}>
          <Image
            source={require("./assets/mackenzie.jpg")}
            style={styles.imgActor}
          />
          <Text>Matthew McCon...</Text>
          <Text>Cooper</Text>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: "red",
    backgroundColor: "black",
    // alignItems: "center"
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

  Txt: {
    color: "white",
    fontSize: 30,
    padding: 5,
  },

  containerDescription: {
    flexDirection: "row",
    gap: 10,
    paddingLeft: 10,
  },

  Description: {
    color: "white",
    borderColor: "yellow",
    borderWidth: 1,
    marginBottom: 20,
  },

  firstContainer: {
    backgroundColor: "#303028",
    marginBottom: 20,
  },
  imgFilm: {
    marginLeft: 10,
    height: 200,
    width: 140,
  },

  abstract: {
    borderBlockColor: "salmon",
    borderWidth: 1,

    // flexDirection: "row",
  },

  abstractTxt: {
    color: "white",
    fontSize: 15,
  },

  button: {
    backgroundColor: "blue",
    color: "white",
    height: 40,
    width: 250,
    textAlign: "center",
    padding: 10,
  },

  vote: {
    borderColor: "green",
    borderWidth: 1,
  },

  mean: {
    fontSize: 18,
    color: "white",
  },

  view: {
    color: "lightgrey",
    fontSize: 13,
  },

  note: {
    fontSize: 16,
    color: "white",
  },

  like: {
    borderColor: "orange",
    borderWidth: 1,
  },

  score: {
    borderColor: "orange",
    borderWidth: 1,
  },

  scoreNote: {
    backgroundColor: "green",
    height: 30,
    width: 30,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: 5,
  },

  actors: {
    borderColor: "purple",
    borderWidth: 1,
    backgroundColor: "#303028",
  },

  actorsTitle: {
    color: "white",
    fontSize: 25,
  },

  actorsMoreView: {
    color: "blue",
    fontSize: 20,
  },

  imgActor: {
    marginLeft: 10,
    height: 200,
    width: 140,
  },
});
