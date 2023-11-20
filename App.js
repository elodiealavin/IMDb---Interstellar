import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logo.png")} style={styles.img} />
      </View>

      <ScrollView style={styles.scrollViewHorizontal}>
        <Text style={styles.Txt}>Interstellar</Text>
        <View style={styles.containerDescription}>
          <Text style={styles.Description}>2014 </Text>
          <Text style={styles.Description}>PG-13 </Text>
          <Text style={styles.Description}>2h 49min </Text>
          <Text style={styles.Description}>Adventure, Drama, Sci-Fi </Text>
        </View>

        <View style={styles.firstContainer}>
          <View style={styles.abstract}>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.imgFilm}
            />
            <Text style={styles.abstractTxt}>
              A team of explores travel{"\n"}through a wormwhole in {"\n"}space
              in an attempt to {"\n"}ensure humanity's survival.
            </Text>
          </View>
          <View style={styles.buttonAdd}>
            <TouchableOpacity>
              <Text style={styles.button}> + ADD TO WATCHLIST </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerVote}>
            <View style={styles.vote}>
              <Ionicons name="star" size={30} color="yellow" />
              <View style={styles.meanContainer}>
                <Text style={styles.mean}>8.6</Text>
                <Text style={styles.note}>/10</Text>
              </View>
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
        </View>

        <View style={styles.picturesContainers}>
          <View style={styles.actors}>
            <Text style={styles.actorsTitle}>Top Billed Cast</Text>
            <TouchableOpacity>
              <Text style={styles.actorsMoreView}>SEE ALL</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.pictures}>
            <View stye={styles.names}>
              <Image
                source={require("./assets/matthew.jpg")}
                style={styles.imgActor}
              />
              <View style={{ width: 130 }}>
                <Text style={styles.actorName} numberOfLines={1}>
                  Matthew McConaughey
                </Text>
              </View>
              <Text style={styles.role}>Cooper</Text>
            </View>

            <View stye={styles.names}>
              <Image
                source={require("./assets/anne.jpg")}
                style={styles.imgActor}
              />
              <Text style={styles.actorName}>Anne Hathaway</Text>
              <Text style={styles.role}>Amelia Brand</Text>
            </View>

            <View stye={styles.names}>
              <Image
                source={require("./assets/jessica.jpg")}
                style={styles.imgActor}
              />
              <Text style={styles.actorName}>Jessica Chastain</Text>
              <Text style={styles.role}>Murphy Cooper</Text>
            </View>

            <View stye={styles.names}>
              <Image
                source={require("./assets/mackenzie.jpg")}
                style={styles.imgActor}
              />
              <Text style={styles.actorName}>Mackenzie Foy</Text>
              <Text style={styles.role}>Murphy Cooper</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.titleFooter}>Director</Text>
          <Text style={styles.nameFooter}>Christopher Nolan</Text>
        </View>
        <View>
          <Text style={styles.titleFooter}>Writers</Text>
          <Text style={styles.nameFooter}>
            Jonathan Nolan(written by) and Chastain Nolan (written by)
          </Text>
        </View>

        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 3,
    // borderColor: "red",
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
    fontSize: 50,
    padding: 5,
  },

  containerDescription: {
    flexDirection: "row",
    gap: 10,
    paddingLeft: 10,
  },

  Description: {
    color: "white",
    // borderColor: "yellow",
    // borderWidth: 1,
    marginBottom: 20,
    fontSize: 15,
  },

  firstContainer: {
    backgroundColor: "#303028",
    paddingBottom: 25,
    marginBottom: 30,
  },

  imgFilm: {
    marginLeft: 10,
    height: 200,
    width: 140,
  },

  abstract: {
    // borderBlockColor: "salmon",
    borderColor: "#303028",
    borderWidth: 1,
    flexDirection: "row",
  },

  abstractTxt: {
    color: "white",
    fontSize: 18,
    paddingTop: 50,
    flexWrap: "wrap",
    marginLeft: 5,
  },

  buttonAdd: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  button: {
    backgroundColor: "blue",
    color: "white",
    height: 30,
    width: 200,
    textAlign: "center",
    padding: 8,
    position: "relative",
    top: -50,
    marginRight: 10,
  },

  containerVote: {
    // borderColor: "green",
    // borderWidth: 2,
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
  },

  vote: {
    // borderColor: "green",
    borderColor: "#303028",
    borderWidth: 1,
    width: 100,
    // justifyContent: "center",
    alignItems: "center",
    // textAlign: "center",
  },

  meanContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  mean: {
    fontSize: 18,
    color: "white",
  },

  view: {
    color: "lightgrey",
    fontSize: 15,
  },

  note: {
    fontSize: 13,
    color: "white",
  },

  like: {
    // borderColor: "orange",
    borderColor: "#303028",
    borderWidth: 1,
    width: 100,
    alignItems: "center",
  },

  score: {
    // borderColor: "orange",
    borderColor: "#303028",
    borderWidth: 1,
    width: 100,
    // justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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

  picturesContainers: {
    backgroundColor: "#303028",
  },

  actors: {
    // borderColor: "purple",
    borderBlockColor: "#303028",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  pictures: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#303028",
    // justifyContent: "center",
    // alignItems: "centers",
    borderColor: "red",
    borderWidth: 1,
    width: 600,
  },

  actorsTitle: {
    color: "white",
    fontSize: 25,
    // textAlign: "center",
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

  actorName: {
    color: "white",
    fontSize: 18,
    marginLeft: 15,
  },

  role: {
    textAlign: "center",
    color: "grey",
    fontSize: 15,
  },

  scrollViewHorizontal: {
    // backgroundColor: "pink",
    marginHorizontal: 3,
  },

  scrollViewVertical: {
    // backgroundColor: "pink",
    marginHorizontal: 3,
  },

  footer: {
    marginTop: 15,
  },

  titleFooter: {
    color: "white",
    fontSize: 18,
  },
  nameFooter: {
    color: "lightgrey",
    fontSize: 15,
  },
});
