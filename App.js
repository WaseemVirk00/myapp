import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // Import React
import { StyleSheet, Text, View, Button, TextInput,ScrollView ,FlatList} from 'react-native';
import ToDoItem from './components/ToDoItem'; 

export default function App() {
  const [enteredTodoText, setEnteredTodoText] = useState('');
  const [todosList, setTodosList] = useState([]);

  function enterTodoText(enteredText) { 
    setEnteredTodoText(enteredText); 
  }

  function addTodoText() {
    if (enteredTodoText!=""){
      setTodosList([...todosList, enteredTodoText]);
      setEnteredTodoText(''); 
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.flexforToDo}>
        <TextInput
          placeholder='Add your todo'
          onChangeText={enterTodoText}          
        />
        <Button title='Add Todo' onPress={addTodoText} />
      </View>
      <ScrollView style={styles.todosList}>
      
      {todosList.map((todo) => <ToDoItem text={todo} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : 20,
    padding: 20,
  },
  flexforToDo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 20,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 5,
    padding: 10,
  },  
  todosList:{
    height:'85%'
  }
});

