import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, FlatList, View, TextInput, Image } from 'react-native';

import AddButton from '../../components/AddButton/AddButton'
import Todo from '../../components/Todo/Todo'

const Home = () => {
    const [todos, setTodo] = useState([])
    const [text, setText] = useState('')
    const [completed, setCompleted] = useState(false)
    const [id, setId] = useState(0)
    const imageUri = require('../../../assets/empty.png')

    const newTodo = () => {
        if(text === ''){
            alert('Você precisa digitar algo')
        }else{
            setCompleted(false)
            setId(id + 1)
            const todo = {
                title: text,
                id: `${id}`
            }
            setTodo([...todos, todo])
        }
    }

    const deleteTodo = () => {
        setCompleted(!completed)
        const todoIndex = todos.findIndex(todo => todo.id)
        todos.splice(todoIndex, 1) 
    }

    const renderItem = ({item}) => {
        return <Todo deleteTodo={deleteTodo} title={item.title}/>
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.addTodoContainer}>
            <TextInput style={styles.addTodoInput} clearButtonMode="always" placeholder="O que fazer ?" onChangeText={text => setText(text)}/>
            <AddButton newTodo={newTodo}/>
        </View>
        {todos.length === 0 
        ? <Image style={styles.emptyImage} 
        source={imageUri}/> 
        : <FlatList
        data={todos}
        keyExtractor={todo => todo.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop: StatusBar.currentHeight,
        marginVertical:12,
        backgroundColor:'#f9f9f9'
    },

    addTodoContainer:{
        padding:16,
        borderRadius:6,
        marginVertical:12,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        height:130,
        width:350,
    },
    addTodoInput:{
        padding:8,
        backgroundColor:'#f1f1f1',
        borderColor:'#7159f9',
        borderBottomWidth:2,
        width:300,
        fontSize:16,
    },
    emptyImage:{
        width:300,
        height:300,
        marginVertical:100,
    }
})

export default Home;