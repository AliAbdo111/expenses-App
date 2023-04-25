import { FlatList,Text } from "react-native";
import ExpensItem from "./ExpensesItem";

function ExpensesList({expenses}){
    function renderExpensesItem(itemData){
        return <ExpensItem {...itemData.item}/>
    }
return(
    <FlatList  
    data={expenses} 
    renderItem={renderExpensesItem}
    keyExtractor={(item)=>{item.id}} />
)
}
export default ExpensesList ;