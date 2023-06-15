import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ManageExpenses from "./screen/ManageExpenses";
import RecentExpenses from "./screen/RecentExpenses";
import AllExpenses from "./screen/AllExpenses";
import OverView from "./screen/OverView";
import Offer from "./screen/Offer";
import Setting from "./screen/Setting";
import CreditScore from "./screen/CreditScore";
import Bill from "./screen/Bill";

import { GlobalStyles } from "./constant/Styles";
import { Ionicons } from "@expo/vector-icons";
import IcomButton from "./components/Ui/IconButton";
import ExpenseContextProvider from "./store/expenses-context";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
    initialRouteName="OverView"
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        tabBarStyle: "wihte",

        tabBarActiveColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IcomButton
            icon="add"
            color={tintColor}
            size={24}
            onPress={() => {
              navigation.navigate("manageExpenses");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="Sitteing"
        component={Setting}
        options={{
          title: "Sitteing",
          tabBarLabel: "sitteing",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="RecentExpenses"
        component={CreditScore}
        options={{
          title: "Credit Score ",
          tabBarLabel: "Credit Score",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "This month",
          tabBarLabel: "This month",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="OverView"
        component={OverView}
        options={{
          title: " Expense",
          tabBarLabel: "OverView",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  // const navigation=useNavigation();

  return (
    <>
      <StatusBar style="black" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "black",
              headerRight: ({ tintColor }) => (
                <IcomButton
                  icon="add"
                  color={tintColor}
                  size={24}
                  // onPress={()=>{navigation.navigate('manageExpenses')}}
                />
              ),
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bill"
              component={Bill}
              options={{ headerShown: true, BottomTabs: true }}
            />
            <Stack.Screen
              name="manageExpenses"
              component={ManageExpenses}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
