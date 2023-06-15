import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Transport()
{
    return(
        <View style={styels.sectionOne}>

          <View style= {{flexDirection:'row'}}>
            <AntDesign name="caretdown" size={10} color="black"  />  
            <Text style={{fontWeight:600 ,fontSize:14}}>September 2020</Text>
            </View>
            <Text style={styels.header}>$1,189</Text>
        </View>
    )
}
export default Transport;
const styels=StyleSheet.create({
    sectionOne:{
        marginVertical:20,
        alignSelf: 'center',
      
    },
    header:{
        marginVertical:4,
        alignSelf: 'center',
        fontSize:30,
        fontWeight:"bold",
  
    }
})

