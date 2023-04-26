import { View, StyleSheet } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from '../Ui/Button'
function ExpensesForm({submitButton,onCancel, onSubmit}){
const [inputValues,setinputValues]=useState({
    dis:'',
    amount:'',
    date:''
})

    function inputChangeHundeler(id,enterData){
        setinputValues((current)=>{
            return{
                ...current,
                [id]:enterData
            }
        })
       
    }

function submitionForm(){
const expenseData={
    dis:inputValues.dis,
    amount:+inputValues.amount,
    date:new Date(inputValues.date) 
}
onSubmit(expenseData)
}

    return (
        <View>
           <Input lable='dISCREBTION' textInputConfigration={{
                keyboardType: 'default',
                onChangeText:inputChangeHundeler.bind(this, 'dis'),
                value:inputValues.dis,
                multiline:true
     
            }}/>
            <Input lable='amount' textInputConfigration={{
                keyboardType: 'decimal-pad',
                onChangeText:inputChangeHundeler.bind(this, 'amount'),
                value:inputValues.amount

            }}/>
               <Input lable='Date' textInputConfigration={{
                keyboardType: 'default',
                onChangeText:inputChangeHundeler.bind(this, 'date'),
                value:inputValues.date,
                placeholder:"YYYY-MM-DD",
                maxLength:10
            }}/>
              <View style={styles.buttons}>
            <Button style={styles.button} 
            mode='flat' onPress={onCancel}>Cancel</Button>
            <Button style={styles.button} 
            onPress={submitionForm}>{submitButton}</Button>
        </View>
        </View>
    )
}
export default ExpensesForm ;
const styles=StyleSheet.create({
    buttons:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
      },
      button:{
        marginHorizontal:8,
        minWidth:120
      },
})