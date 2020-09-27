import React, { useState } from "react";
import { FlatList, View, TextInput, Image } from "react-native";

import AddButton from "../../components/AddButton";
import Todo from "../../components/Todo";

import styles from "./styles";

import imageUri from "../../../assets/empty.png";

const Home = () => {
  const [todos, setTodo] = useState([]);
  const [text, setText] = useState("");

  const newTodo = () => {
    if (!text) {
      alert("Você precisa digitar algo");
      return;
    }

    const todo = {
      title: text,
      finished: false,
      id: `${Date.now()}`,
    };

    setTodo([...todos, todo]);
    setText("");
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    todos.splice(todoIndex, 1);

    setTodo([...todos]);
  };

  const renderItem = ({ item }) => {
    return <Todo deleteTodo={deleteTodo} title={item.title} id={item.id} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.addTodoContainer}>
        <TextInput
          style={styles.addTodoInput}
          placeholder="O que fazer ?"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <AddButton newTodo={newTodo} />
      </View>
      {todos.length === 0 ? (
        <Image style={styles.emptyImage} source={imageUri} />
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(todo) => todo.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Home;
