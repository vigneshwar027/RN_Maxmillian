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
  Modal,
} from "react-native";

GoalsInput = function ({ onPressFunction, isModalVisible }) {
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
    <Modal visible={true} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={{ alignItems: "center" }}>
          <TextInput
            onChangeText={getInputText}
            style={styles.inputText}
            placeholder="Your goals here"
            value={goalsInputText}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="New button" />
          </View>
          <View style={styles.button}>
            <Button
              onPress={addGoalsHandler}
              title="Add"
              backgroundColor="blue"
            />
          </View>
        </View>
      </View>
    </Modal>
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
    width: "100%",
    marginHorizontal: "10%",
  },
  inputContainer: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: "5%",
    borderBottomWidth: 1,
    borderBottomColor: "red",
    // flexDirection: "row",
    justifyContent: "center",
    // alignItems: "stretch",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    width: "40%",
    marginHorizontal: "3%",
    backgroundColor:"magenta",
    borderRadius:"50",
  },
});
