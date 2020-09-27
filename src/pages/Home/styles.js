import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },

  addTodoContainer: {
    marginTop: 70,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
  },

  addTodoInput: {
    padding: 8,
    backgroundColor: "#f1f1f1",
    borderColor: "#7159f9",
    borderBottomWidth: 2,
    width: 300,
    fontSize: 16,
  },
  emptyImage: {
    width: 300,
    height: 300,
    marginTop: 150,
  },
});

export default styles;
