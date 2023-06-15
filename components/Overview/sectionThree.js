import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
function SectionThree() {
  return (
    <View style={[styels.container, styels.shadowProp]}>
      <View style={styels.sectionOne}>
        <View style={styels.num}>
          <Text style={styels.num}>$173</Text>
        </View>
        <View style={styels.text}>
          <Text style={{ fontSize: 18 }}> Auto & Transport</Text>
        </View>

        <View style={styels.icon}>
          <FontAwesome name="car" size={24} color="#6347EB" />
        </View>
      </View>
      <View style={styels.sectionTwo}>
        <View>
          <View>
            <Text>$350</Text>
          </View>
          <View>
            <Text style={{ color: "#AEABC2" }}>Left $186</Text>
          </View>
        </View>
        <View>
          <Text style={styels.text}>Auto & Transport </Text>
          <View style={styels.chart}>
            <View style={styels.one}></View>
          </View>
        </View>
      </View>
      <View style={styels.sectionTwo}>
        <View>
          <View>
            <Text>$250</Text>
          </View>
          <View>
            <Text style={{ color: "#AEABC2" }}>Left $120</Text>
          </View>
        </View>
        <View>
          <Text style={styels.text}>Auto insurance </Text>
          <View style={styels.chart}>
            <View style={styels.one}></View>
          </View>
        </View>
      </View>
      <View style={styels.sectionThree}></View>
    </View>
  );
}
export default SectionThree;
const styels = StyleSheet.create({
  container: {
    borderRadius: 18,
    backgroundColor: "white",
    borderWidth: 1.6,
    borderColor: "#EAE9F0",
    padding: 15,
    margin: 15,
    paddingBottom: 30,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  sectionOne: {
    flexDirection: "row",
    textAlign: "right",
    gap: 10,
    margin: 30,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  sectionTwo: {
    flexDirection: "row",
  },
  sectionThree: {},
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  num: {
    color: "#AEABC2",
    fontWeight: "bold",
  },
  icon: {
    borderRadius: 14,
    width: 45,
    height: 45,
    backgroundColor: "#D7D4E3",
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    height: 10,
    width: 230,
    borderRadius: 14,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 15,
    backgroundColor: "#EAE9F0",
    alignContent: "flex-start",
  },
  one: {
    backgroundColor: "#6347EB",
    width: 200,
    height: 10,
    borderRadius: 14,
    alignItems: "flex-end",
    // marginLeft:15
  },
});
