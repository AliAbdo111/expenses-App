import React from 'react';
import { View,StyleSheet ,Text } from 'react-native';



function SectionTwo(){
return (
    <View style={styles.container}>
   <View style={[styles.main]}>
    <View style={styles.cunt}>
    <View style={styles.one}>
        <Text style={styles.text}>90%</Text>
        <Text>1 Missed</Text>
    </View>
    <View style={styles.one}>
        <Text style={styles.text}>time patments</Text>
        <Text style={[styles.text,{color:'#31B447'}]}>Good</Text>
    </View>
    </View>
    <View style={styles.cunt}>
    <View style={styles.one}>
        <Text style={styles.text}>95%</Text>
        <Text style={{color:'#F88736'}}>-15%</Text>
    </View>
    <View style={styles.one}>
        <Text style={styles.text}>Credit Utilization</Text>
        <Text style={[styles.text,{color:'#F88736'}]}>Not bad</Text>
    </View>
    </View>
    <View style={styles.cunt}>
    <View style={styles.one}>
        <Text style={styles.text}>8 year</Text>
        {/* <Text>-15%</Text> */}
    </View>
    <View style={styles.one}>
        <Text style={styles.text}>Age of credit</Text>
        <Text style={[styles.text,{color:'#31B447'}]}>Good</Text>
    </View>
    </View>

    
   </View>
    </View>
)
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems: 'center',

    }
    ,main:{
        flexDirection:'column',
        borderRadius:14,
        borderColor:'#EAE9F0',
        borderWidth:1,
        width:300,
        backgroundColor:"white",
        justifyContent:'center',
        alignItems: 'center',
        padding:7
    },
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      cunt:{flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'#EAE9F0',
      
   
  },
    one:{

        alignItems:'flex-end'
        ,marginLeft:10
        ,
        borderRadius:14,
        borderColor:'#EAE9F0',
        margin:18,
        padding:10,
        paddingLeft:6
    },
    text: {
        fontSize: 16,
        marginBottom:5,
        fontWeight: 700,
      },
})
export default SectionTwo;