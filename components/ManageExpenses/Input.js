import { TextInput,StyleSheet, View ,Text} from "react-native";
import { GlobalStyles } from "../../constant/Styles";

function Input ({lable, textInputConfigration})
{
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.lable}>{lable}</Text>
            <TextInput style={styles.input}{...textInputConfigration}/>
        </View>
    )
}

export default Input

const styles=StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:8
    },
    lable:{
        color:GlobalStyles.colors.primary100,
        fontSize:12,
        marginBottom:4
    },
    input:{
        padding:6,
        color:GlobalStyles.colors.primary700,
        backgroundColor:GlobalStyles.colors.primary100,
        borderRadius:4,
        fontSize:16
    }
})