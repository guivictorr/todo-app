import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Todo = ({title, deleteTodo}) => {
  return (
    <View style={styles.todoContainer}>
        <View style={styles.todoContent}>
            <TouchableOpacity style={styles.todoButton} onPress={deleteTodo}>
                <MaterialCommunityIcons name="close" size={24} color="#7159f9" />
            </TouchableOpacity>
            <Text style={styles.todoText}>{title}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    todoContainer:{
        backgroundColor:'#f1f1f1',
        padding:16,
        borderRadius:6,
        marginVertical:6,
        width:320,
    },
    todoContent:{
        flexDirection:'row',
        alignItems:'center',
    },
    todoText:{
        fontSize:18,
        marginHorizontal:24,
    },
})

export default Todo;