import { Pressable, View, StyleSheet ,Text} from "react-native";
import { GlobalStyles } from "../../constant/Styles";
import {getFormateDate} from '../../util/formatDtae'
import { useNavigation } from "@react-navigation/native";

function ExpensItem({id,dis,date,amount})
{
    const navigation=useNavigation();
    function expensesHundelerPress()
    {
        navigation.navigate('manageExpenses',{
            ExpensId:id
        })
    }
    return(
        <Pressable onPress={expensesHundelerPress} style={({pressed})=>pressed && styles.pressed}>
            <View style={styles.expensItem}>
                <View>
                    <Text style={[styles.dis,styles.TextBase]}>{dis}</Text>
                    <Text style={styles.TextBase}>{getFormateDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}
export default ExpensItem;

const styles= StyleSheet.create({
    expensItem:{
        padding: 12,
        backgroundColor:'white',
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        elevation:3 ,
        shadowColor:GlobalStyles.colors.gray500,
        shadowOffset:{width:1,height:1},
        shadowRadius:4,
        shadowOpacity:0.4
    },
    TextBase:{
        color:GlobalStyles.colors.primary700
    },
    dis:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    pressed: {
        opacity: 0.75,
      },
    amount:{
        color:GlobalStyles.colors.primary700,
        fontWeight:'bold'
    }
})