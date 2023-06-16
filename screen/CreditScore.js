import { React } from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import SectionTwo from '../components/CreditScore/SectionTwo'
import SectionOne from '../components/CreditScore/SectionOne'
function CreditScore(){
    return(
<View style={styles.container}>
    <SectionOne />
<SectionTwo />
</View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }
})
export default CreditScore;
