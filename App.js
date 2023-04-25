import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from'@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ManageExpenses from './screen/ManageExpenses';
import RecentExpenses from './screen/RecentExpenses';
import AllExpenses from './screen/AllExpenses';
import { GlobalStyles } from './constant/Styles';
import {Ionicons} from '@expo/vector-icons'
import IcomButton from './components/Ui/IconButton';
import ExpenseContextProvider from './store/expenses-context';


const Stack= createNativeStackNavigator();
const BottomTabs= createBottomTabNavigator();

function ExpensesOverview(){
  return (
    <BottomTabs.Navigator screenOptions={({navigation})=>(
      {headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor:'white',
      tabBarStyle:{ backgroundColor:GlobalStyles.colors.primary500},
    
      tabBarActiveColor:GlobalStyles.colors.accent500,
      headerRight:({tintColor})=>
      <IcomButton icon='add'
      color={tintColor}
      size={24}
      onPress={()=>{navigation.navigate('manageExpenses')}}

      />
    
    })}>
      <BottomTabs.Screen 
      name='RecentExpenses' 
      component={RecentExpenses} options={{
      title:"recent expenses",
      tabBarLabel:'recent',
    tabBarIcon:({color,size})=>(
<Ionicons  name='hourglass'
color={color}
size={size}
/>
  )
      
       
        }
      }/>
      <BottomTabs.Screen 
      name='AllExpenses' 
      component={ AllExpenses}
      options={{
        title:"All expenses",
        tabBarLabel:'All expenses',
      tabBarIcon:({color,size})=>(
  <Ionicons  name='calendar'
  color={color}
  size={size} 
  />
  )
        
         
          }
        }
       />
    </BottomTabs.Navigator>
  )
  
}


export default function App() {
  return (
 <>
 <StatusBar style='auto'/>
 <ExpenseContextProvider>
 <NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
  headerTintColor:"white"}
  }>
    <Stack.Screen name='ExpensesOverview'
     component={ExpensesOverview}
     options={{headerShown:false}} />
    <Stack.Screen name='manageExpenses'
     component={ManageExpenses}
     options={
      {presentation:"modal"}
     } />
  </Stack.Navigator>
 </NavigationContainer>
 </ExpenseContextProvider>
 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
