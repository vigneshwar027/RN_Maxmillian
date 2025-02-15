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
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
onPressHandler = () => {
  console.log("Button pressed");
};

function StartGameScreen({ pickedNumberHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  console.log("START GAME RUNSS");
  function resetInput() {
    setEnteredNumber("");
  }

  function confirmInputNumber() {
    let the_number = parseInt(enteredNumber);
    if (isNaN(the_number) || the_number < 0 || the_number > 99) {
      Alert.alert("Invalid Number!", "Enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
    } else {
      pickedNumberHandler(enteredNumber);
    }
  }

  function numberInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredNumber(enteredText);
  }

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.outside_box}>
        <View>
          <TextInput
            style={styles.text_input}
            keyboardType="number-pad"
            maxLength={3}
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  outside_box: {
    backgroundColor: Colors.primary500,
    width: "90%",
    // width: 210,
    marginTop: 100,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text_input: {
    marginTop: 50,
    marginLeft: 30,
    borderBottomColor: Colors.accent500,
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
