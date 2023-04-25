import { Pressable, View, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IcomButton({ icon, size, color, onPress }) {
  return( 
  <Pressable onPress={onPress}
    style={({pressed})=>pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>)
  
}
export default IcomButton;
const styles = StyleSheet.create({
  buttonContainer: {
    padding: 6,
    margin: 8,
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.75,
  },
});
