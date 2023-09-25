import { StyleSheet } from "react-native";
import { Text } from "react-native";
const toDoItem = (props) => {
    return (
        <Text style={styles.todo}>{props.text}</Text>
    );
}

export default toDoItem;

const styles = StyleSheet.create({
    todo: {
      borderWidth: 1,
      borderColor: '#cccccc',
      marginVertical: 5,
      padding: 10,
      textAlign: 'center',      
      fontSize: 30,      
      borderRadius: 50
    }
  })
