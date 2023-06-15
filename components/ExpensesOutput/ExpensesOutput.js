import { View ,StyleSheet} from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSamary from "./ExpensesSamary";
import { GlobalStyles } from "../../constant/Styles";

function ExpensesOutput({expenses,ExpensesPeriod}){

return( 
    <View style={styles.container}> 
    <ExpensesSamary expenses={expenses} periodName={ExpensesPeriod} />
    <ExpensesList expenses={expenses}/>
    </View>
)
}
export default ExpensesOutput ;
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary50
    }
})