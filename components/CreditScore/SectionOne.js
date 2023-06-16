import React,{useState} from 'react';
import { View ,StyleSheet ,Text} from 'react-native';
import Main from '../Bill/Main';

function SectionOne()
{
    return(
      <View style={styles.containeer}>
     
        <View style={styles.secOne}>
       
          <View style={styles.undeSec0}></View>
     
         
          <View style={styles.undeSec1}></View>
          <View style={styles.undeSec2}></View>
          <View style={styles.undeSec3}></View>
        </View>
        <View style={styles.counter}>
        <Text style={styles.text}>850</Text>
          <Text style={styles.text}>Last update on 20 Jul 2020</Text>
          <Text style={styles.text}>400</Text>
          </View>
       
        <View style={styles.center}>
          <Text style={styles.textbase}>Good</Text>
          <Text style={styles.num}>660</Text>
          <Text style={styles.numPlase}>+6pts</Text>
        </View>
      </View>
    )

}
export default  SectionOne
const styles= StyleSheet.create({
containeer:{marginBottom:195
},
secOne:{
flexDirection:'row',
},
undeSec:{
  width:5,
  height:100,
  position:'absolute',
  top:80,
  left:280,
  backgroundColor:'#856FE5',
  // borderTopRightRadius:12,
  borderColor: '#856FE5',
  borderWidth: 2,
  marginBottom:20,
},
undeSec0:{
  width:100,
  position:'absolute',
  top:60,
  height:110,
  borderTopEndRadius:330,
  borderTopStartRadius:1,
  borderBottomEndRadius:5,
  borderRightColor:'#856FE5',
  borderRightWidth:3,
  borderBottomWidth:0,
  borderLeftWidth:0,
  right:39,
  borderColor: '#856FE5',
  borderWidth: 3,
  marginBottom:20,
},
undeSec1:{
  width:60,
  position:'absolute',
  top:60,
  height:90,
  borderTopEndRadius:0,
  borderTopStartRadius:0,
  borderTopLeftRadius:1,
  borderRightColor:'#856FE5',
  borderRightWidth:0,
  borderLeftWidth:0,
  borderBottomWidth:0,
  right:142,
  borderColor: '#856FE5',
  borderWidth: 3,
  // marginBottom:20,
},
undeSec2:{
  width:80,
  position:'absolute',
  top:60,
  height:70,
  borderTopEndRadius:0,
  borderTopStartRadius:390,
  borderRightColor:'#856FE5',
  borderRightWidth:2,
  borderBottomWidth:0,
  borderRightWidth:0,
  right:210,
  borderColor: '#C4C4C4',
  borderWidth: 3.5,
  marginBottom:20,
},
undeSec3:{
  width:60,
  position:'absolute',
  top:95,
  height:75,
  borderTopEndRadius:0,
  borderTopStartRadius:250,
  borderRightColor:'#856FE5',
  borderRightWidth:2,
  borderBottomStartRadius:10,
  borderBottomEndRadius:12,
  borderBottomWidth:0,
  borderRightWidth:0,
  right:270,
  borderColor: '#C4C4C4',
  borderWidth: 3.5,
  marginBottom:20,
},
counter:{
  flexDirection:'row',
  position:'relative',
  top:170,
  alignItems: 'center',
  justifyContent: 'center',

},
center:{
  position:'absolute',
  top:100,
  left:165,
},
text:{
  color:'#AEABC2',
  marginTop:15,
  marginHorizontal:10,
  paddingHorizontal:12
},
textbase:{
  color:'#908BA6',
fontSize:17},
num:{
  fontSize:24,
  fontWeight:'bold',
},
numPlase:{
  fontSize:14,
  fontWeight:700,
  color:"#6347EB"

}
})