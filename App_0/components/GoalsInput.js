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
  Image,
} from "react-native";

GoalsInput = function ({ onPressFunction, isModalVisible, onCancelFunction }) {
  const [goalsInputText, setgoalsInputText] = useState("");

  const getInputText = (inputtext) => {
    setgoalsInputText(inputtext);
    console.log("Input text-->  ", goalsInputText);
  };

  const addGoalsHandler = function () {
    console.log(typeof isModalVisible);
    onPressFunction(goalsInputText);
    setgoalsInputText("");
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/images/goal.png")}
            style={styles.image}
          />
          <TextInput
            onChangeText={getInputText}
            style={styles.inputText}
            placeholder="Your goals here"
            value={goalsInputText}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color={"#3116b6"} onPress={addGoalsHandler} title="Add" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={onCancelFunction}
              color={"#3116b6"}
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
    borderColor: "white",
    color: "white",
    borderWidth: 2,
    padding: 10,
    width: "100%",
    marginHorizontal: "10%",
  },
  inputContainer: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: "7%",
    // borderBottomColor: "red",
    // flexDirection: "row",
    justifyContent: "center",
    // alignItems: "stretch",
    backgroundColor: "#3116b6",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    width: "40%",
    marginHorizontal: "3%",
    backgroundColor: "white",
    borderRadius: "50",
  },
  image: {
    height: 150,
    width: 150,
  },
});
