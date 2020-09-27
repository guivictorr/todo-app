import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const AddButton = ({ newTodo }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.addTodoButton}
      onPress={newTodo}
    >
      <Text style={styles.addTodoButtonText}>ADICIONAR</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
