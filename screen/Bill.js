import React from 'react';
import { View ,Text ,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main from '../components/Bill/Main';
function Bill(){
return (
    <SafeAreaView>
    <View style={styles.container}> 
      <Main />
      
    </View>
    </SafeAreaView>
)
}
export default  Bill
const styles =StyleSheet.create({
    container:{
      backgroundColor:'#FFFFFF',
    }
})