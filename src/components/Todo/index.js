import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const Todo = ({ title, deleteTodo, id }) => {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity style={{ padding: 12 }} onPress={() => deleteTodo(id)}>
        <MaterialCommunityIcons name="close" size={24} color="#7159f9" />
      </TouchableOpacity>
      <Text style={styles.todoText}>{title}</Text>
    </View>
  );
};

export default Todo;
