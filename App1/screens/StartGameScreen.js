import {
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Text,
  SafeAreaView,
  SafeAreaProvider,
  Alert,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

onPressHandler = () => {
  console.log("Button pressed");
};

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmInputNumber(chosenNumber) {
    is_int = parseInt(chosenNumber);

    if (isNaN(is_int) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
    } else {
      console.log("Valid number");
    }
  }

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
    console.log(enteredText);
  }
  3;

  return (
    <View style={styles.outside_box}>
      <View>
        <TextInput
          style={styles.text_input}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
      </View>

      <View style={[styles.buttons_container]}>
        <View style={styles.indiv_button_container}>
          <PrimaryButton onPressHandler={resetInput} text="Reset" />
        </View>
        <View style={styles.indiv_button_container}>
          <PrimaryButton onPressHandler={confirmInputNumber} text="Confirm" />
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  outside_box: {
    backgroundColor: "#72063c",
    width: "90%",
    // width: 210,
    marginTop: "30%",
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text_input: {
    marginTop: 50,
    marginLeft: 30,
    borderBottomColor: "#Ddb52f",
    borderBottomWidth: 2,
    width: 40,
    fontSize: 30,
    color: "white",
  },
  buttons_container: {
    // flex:1,
    width: "90%",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  indiv_button_container: {
    flex: 1,
  },
});
