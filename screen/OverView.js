import React from "react";
import { View, Text, ScrollView } from "react-native";
import TotalExpense from "../components/Overview/Totalexpenses";
import Transport from "../components/Overview/Transport.js";
import SectionThree from "../components/Overview/sectionThree";
import BillAndUtile from '../components/Overview/BillAndUtile'


function OverView() {
  return (
    <ScrollView>
   <View>
      <Transport />
      <TotalExpense />
      <SectionThree />
      <BillAndUtile />
    </View>
    </ScrollView>
 
  );
}

export default OverView;
