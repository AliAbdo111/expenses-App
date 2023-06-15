import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Text style={styles.text}>Your monthly payment for subcriptions</Text>
        <Text style={styles.num}>$61.88</Text>
      </View>
      <View style={styles.twoPlas}>
        <View style={styles.two}>
          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
          <View style={styles.discrebtion}>
            <Text style={{ color: "#433E5B", fontSize: 18 }}>
              Patreon membership
            </Text>
            <Text
              style={{ color: "#433E5B", fontSize: 18, fontWeight: "bold" }}
            >
              $19.99/mo
            </Text>
          </View>
          <View style={styles.icon}>
            <FontAwesome5 name="patreon" size={24} color="black" />
          </View>
        </View>
        <View style={styles.two}>
          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
          <View style={styles.discrebtion}>
            <Text style={{ color: "#433E5B", fontSize: 18 }}>Netflix </Text>
            <Text
              style={{ color: "#433E5B", fontSize: 18, fontWeight: "bold" }}
            >
              $12/mo
            </Text>
          </View>
          <View style={styles.netflix}>
            <Fontisto name="netflix" size={24} color="black" />
          </View>
        </View>
        <View style={styles.two}>
          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
          <View style={styles.discrebtion}>
            <Text style={{ color: "#433E5B", fontSize: 18 }}>
              Apple payment
            </Text>
            <Text
              style={{ color: "#433E5B", fontSize: 18, fontWeight: "bold" }}
            >
              $19.99/mo
            </Text>
          </View>
          <View style={styles.apple1}>
            <AntDesign name="apple1" size={24} color="black" />
          </View>
        </View>
        <View style={styles.two}>
          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
          <View style={styles.discrebtion}>
            <Text style={{ color: "#433E5B", fontSize: 18 }}>Spotify</Text>
            <Text
              style={{ color: "#433E5B", fontSize: 18, fontWeight: "bold" }}
            >
              $6.99/mo
            </Text>
          </View>
          <View style={styles.spotify}>
            <FontAwesome5 name="spotify" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}
export default Main;
const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#000000'
  },
  one: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 23,
    marginTop: 10,
    width: 190,
  },
  text: {
    color: "#2C2646",
    fontSize: 16,
  },
  num: {
    fontSize: 20,
    fontWeight: "bold",
  },
  two: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 10,
    padding: 18,
  },
  twoPlas: {
    margin: 10,
    marginTop: 10,
    borderWidth: 1.6,
    borderRadius: 14,
    borderColor: "#EAE9F0",
    padding: 18,
    alignItems: "center",
    // alignSelf: "center"
  },
  icon: {
    backgroundColor: "#F76754",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginLeft: 16,
  },
  discrebtion: {
    marginLeft: 70,
    width: 120,
    paddingRight: 10,
  },
  spotify: {
    backgroundColor: "#1ED760",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginLeft: 10,
  },
  apple1: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginLeft: 10,
  },
  netflix: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginLeft: 10,
  },
});
