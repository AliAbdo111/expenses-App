import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


import { AntDesign } from "@expo/vector-icons";
function BillAndUtile() {
  const navigation=useNavigation();
  function hundlePress()
  {
      navigation.navigate('Bill')
  }
  return (
    <>
    <Pressable onPress={hundlePress}>
      <View style={[styels.container, styels.shadowProp]}>
        <View style={styels.sectionOne}>
          <View style={styels.num}>
            <Text style={styels.num}>$320</Text>
          </View>
          <View style={styels.text}>
            <Text style={{ fontWeight: 500, fontSize: 18 }}>
              Bill & Ultilities
            </Text>
          </View>

          <View style={styels.icon}>
            <AntDesign name="calculator" size={24} color="#F46040" />
          </View>
        </View>
        <View style={styels.sectionTwo}>
          <View>
            <View>
              <Text style={{ marginTop: 10 }}>$350</Text>
            </View>
            <View>
              <Text style={{ color: "#AEABC2", marginTop: 3 }}>Left $186</Text>
            </View>
          </View>
          <View>
            <Text style={styels.text}>Subscriptions </Text>
            <View style={styels.chart}>
              <View style={styels.one}></View>
            </View>
          </View>
        </View>
        <View style={styels.sectionTwo}>
          <View>
            <View>
              <Text style={{ marginTop: 10 }}>$50</Text>
            </View>
            <View>
              <Text style={{ color: "#AEABC2", marginTop: 3 }}>Left $120</Text>
            </View>
          </View>
          <View>
            <Text style={styels.text}>House service</Text>
            <View style={styels.chart}>
              <View style={styels.one}></View>
            </View>
          </View>
        </View>
        <View style={styels.sectionTwo}>
          <View>
            <View>
              <Text style={{ marginTop: 10 }}>$157</Text>
            </View>
            <View>
              <Text style={{ color: "#AEABC2", marginTop: 3 }}>Left $120</Text>
            </View>
          </View>
          <View>
            <Text style={styels.text}>Maintenance</Text>
            <View style={styels.chart}>
              <View style={styels.one}></View>
            </View>
          </View>
        </View>
      </View>
      <View style={styels.ThreeDot}>
        <Octicons style={styels.dot} name="dot-fill" size={18} color="black" />
        <Octicons style={styels.dot} name="dot-fill" size={18} color="black" />
        <Octicons style={styels.dot} name="dot-fill" size={18} color="black" />
        
      </View>
      </Pressable>
    </>
  );
}
export default BillAndUtile;
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
    marginBottom: 20,
  },
  sectionThree: {},
  text: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
  },
  num: {
    color: "#AEABC2",
    fontWeight: "bold",
  },
  icon: {
    borderRadius: 14,
    width: 45,
    height: 45,
    backgroundColor: "#FCDFD8",
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
    backgroundColor: "#F46040",
    width: 200,
    height: 10,
    borderRadius: 14,
    alignItems: "flex-end",
    // marginLeft:15
  },
  ThreeDot: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf:'center',
    alignItems: "center",
    textAlign: "center",
    width: 200,
    height: 30,
  
  },
  dot:{
    marginHorizontal:5
  }
});
