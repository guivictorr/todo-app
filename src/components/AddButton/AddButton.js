import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const AddButton = ({newTodo}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.addTodoButton} onPress={newTodo}>
        <Text style={styles.addTodoButtonText}>ADICIONAR</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    addTodoButton:{
        backgroundColor: '#7159f9',
        padding:12,
        borderRadius:4,
        width:300,
        alignItems:'center',
    },
    addTodoButtonText:{
        color:'white', 
        fontWeight:'bold', 
        fontSize: 16,
    }
})

export default AddButton;