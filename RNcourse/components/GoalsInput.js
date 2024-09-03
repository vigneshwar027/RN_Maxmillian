import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

GoalsInput = function ({ onPressFunction }) {
  const [goalsInputText, setgoalsInputText] = useState("");

  const getInputText = (inputtext) => {
    setgoalsInputText(inputtext);
    console.log("Input text-->  ", goalsInputText);
  };

  const addGoalsHandler = function () {
    onPressFunction(goalsInputText);
    setgoalsInputText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={getInputText}
        style={styles.inputText}
        placeholder="Your goals here"
        value={goalsInputText}
      />
      <Button onPress={addGoalsHandler} title="Add" backgroundColor="blue" />
    </View>
  );
};

export default GoalsInput;

const styles = StyleSheet.create({
  inputText: {
    // marginVertical:10  ,
    borderColor: "blue",
    color: "red",
    borderWidth: 2,
    padding: 10,
    width: "70%",
  },
  inputContainer: {
    paddingBottom: 20,
    marginTop: "20%",
    borderBottomWidth: 1,
    borderBottomColor: "red",
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
  },
});
