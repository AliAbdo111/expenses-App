import React from "react";
import { Text, View, StyleSheet } from "react-native";
function TotalExpense() {
  return (
    <View style={styels.container}>
      <View style={styels.sectionOne}>
        <Text style={styels.text}>Left to spend</Text>
        <Text style={styels.num}>$789</Text>
      </View>
      <View style={styels.sectionTwo}>
        <Text style={styels.text}>Monthly Budget</Text>
        <Text style={styels.num}>$1,789</Text>
      </View>
      <View style={styels.chart}>
        <View style={styels.one}></View>
        <View style={styels.two}></View>
        <View style={styels.three}></View>
      </View>
    </View>
  );
}
const styels = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: 280,
    flexDirection: "row-reverse",
    flexWrap:'wrap',
    borderRadius: 10,
    borderColor: "#EAE9F0",
    borderWidth: 1,
    height: 110,
    backgroundColor: "white",
    // gap:4
  },
  sectionOne: {
    alignItems: "center",
    padding: 7,
    width:'50%'
  },
  sectionTwo: {
    padding: 7,
    alignItems: "center",
    // justifyContent: "flex-start",
    // marginLeft: 40,
    width:'50%'
  },
  text: {
    color: "#908BA6",
    fontSize: 16,
  },
  num: {
    color: "#2C2646",
    fontSize: 18,
    fontWeight: "bold",
  },
  chart: {
    height: 10,
    width: 260,
    borderRadius: 14,
    flexDirection:'row',
   marginRight:10,
   marginTop:15,
    backgroundColor:'#EAE9F0',
    alignContent:'flex-start'

  },
  one:{
    backgroundColor:"#F46040",
    width:40,
    height:10,
    borderRadius: 14,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    alignItems:'flex-start'
  },
  two:{
    backgroundColor:"#56BADA",
    width:40,
    height:10,

  },
  three:{
    backgroundColor:"#6347EB",
    width:100,
    height:10,
    borderRadius: 14,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
  }
});
export default TotalExpense;
