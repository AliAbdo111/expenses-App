import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import IcomButton from "../components/Ui/IconButton";
import { GlobalStyles } from "../constant/Styles";
import Button from "../components/Ui/Button";
import {ExpensesContext } from '../store/expenses-context'
import ExpensesForm from "../components/ManageExpenses/ExpensesForm";
function ManageExpenses({ route, navigation }) {

 const expensesCtx=useContext(ExpensesContext);
    const editExpenseId = route.params?.ExpensId;
    const isEdit = !!editExpenseId;
    
      useLayoutEffect(() => {
        navigation.setOptions({
          title: isEdit ? "Edit expense" : "Add expense",
        });
      }, [navigation, isEdit]);
     
    function deleteItem() {
      expensesCtx.deleteExpense(editExpenseId)
       navigation.goBack()
    }

    function cancelHundler()
    {
        navigation.goBack()
    }

    function confirmlHundler(expenseData)
    {
      if(isEdit){
        expensesCtx.updateExpense(
          editExpenseId
          ,expenseData)
      }else{
        expensesCtx.addExpense(expenseData)
      }
      navigation.goBack()
    }

  return (
    <View style={styles.container}>
      <ExpensesForm 
      submitButton={isEdit?'Update':'Add'}
      onCancel={cancelHundler}
      onSubmit={confirmlHundler}/>
      {isEdit && (
        <View style={styles.deleteContaine}>
          <IcomButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteItem}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary50,
  },
 
  deleteContaine: {
    marginTop: 16,
    paddingTop: 8,
    alignItems: "center",
    borderTopWidth: 2,
   
    borderColor: GlobalStyles.colors.primary100,
  },
});
