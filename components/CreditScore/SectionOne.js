import React,{useState} from 'react';
import { View ,StyleSheet ,Text} from 'react-native';

function SectionOne()
{
    return(
      <View style={styles}>
      
        <View style={styles.secOne}>
          <Text style={styles.text}>400</Text>
          <Text style={styles.text}>Last update on 20 Jul 2020</Text>
          <Text style={styles.text}>850</Text>
        </View>
        <View></View>
      </View>
    )

}
export default  SectionOne
const styles= StyleSheet.create({
containeer:{},
secOne:{
  flexDirection:'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderTopEndRadius:44,
  borderTopStartRadius:100,
  borderLeftWidth:1,
  borderRightWidth:1,
  borderTopLeftRadius:18,
  borderTopRightRadius:18,
  borderTopColor: 'red',
  borderTopWidth: 1,
},
text:{
  color:'#AEABC2',
  margin:10
}
})