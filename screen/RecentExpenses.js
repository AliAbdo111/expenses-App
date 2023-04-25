import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {ExpensesContext } from '../store/expenses-context'
import {useContext} from 'react'
import { getMinusDays } from "../util/formatDtae";
 function RecentExpenses()

{
    const expensesCtx=useContext(ExpensesContext)
    const recentExpense=expensesCtx.expenses.filter((expense)=>{
        const toDay=new Date();
        const date7DaysAgo=getMinusDays(toDay,7)
        return expense.date > date7DaysAgo
    })
    return <ExpensesOutput expenses={recentExpense} ExpensesPeriod='last 7 days' />
}


export default RecentExpenses;