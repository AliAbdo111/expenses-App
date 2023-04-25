import { View, Text, StyleSheet} from "react-native";
import { GlobalStyles } from '../../constant/Styles';

function ExpensesSamary({periodName, expenses}){
    const sumExpenses = expenses.reduce((sum, Expenses)=>{
       return sum + Expenses.amount
    },0)
return(
    <View style={styles.container}>
        <Text style={styles.period}>{periodName}</Text>
        <Text style={styles.sum}>${sumExpenses.toFixed(2)}</Text>
    </View>
)
}
export default ExpensesSamary ;
const styles=StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GlobalStyles.colors.primary50,
        flexDirection:'row',
        borderRadius:6,
        justifyContent:'space-between',
        alignItems:'center'
    },
    period:{
        color:GlobalStyles.colors.primary400,
        fontSize:12
    },
    sum:{
        fontWeight:'bold',
        fontSize:16,
        color:GlobalStyles.colors.primary500
    }
})