import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import IcomButton from "../components/Ui/IconButton";
import { GlobalStyles } from "../constant/Styles";
import Button from "../components/Ui/Button";
import {ExpensesContext } from '../store/expenses-context'
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

    function confirmlHundler()
    {
      if(isEdit){
        expensesCtx.updateExpense(
          editExpenseId
          ,{
          dis:'tes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
          amount: 133.54,
       date: new Date("2023-4-12"),
        })
      }else{
        expensesCtx.addExpense({
          
            dis:'tes123 for hard code test',
            amount: 133.54,
         date: new Date("2023-4-12"),
          
        })
      }
      navigation.goBack()
    }

  return (
    <View style={styles.container}>
        <View style={styles.buttons}>
            <Button style={styles.button} mode='flat' onPress={cancelHundler}>Cancel</Button>
            <Button style={styles.button} onPress={confirmlHundler}>{isEdit?'update':'add'}</Button>
        </View>
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
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    marginHorizontal:8,
    minWidth:120
  },
  deleteContaine: {
    marginTop: 16,
    paddingTop: 8,
    alignItems: "center",
    borderTopWidth: 2,
   
    borderColor: GlobalStyles.colors.primary100,
  },
});
