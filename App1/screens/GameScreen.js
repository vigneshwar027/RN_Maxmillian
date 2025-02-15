import { Text, View, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
let direction;

function GameScreen({ userNumber, onGameOver }) {
  console.log("game screen called");
  initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [currentDirection, setCurrentDirection] = useState("");
  useEffect(() => {
    console.log("change detected..");
    if (currentGuess == userNumber) {
      onGameOver(); 
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    // console.log("\n\n\ndirection-->", direction);
    // console.log("currentGuess-->", currentGuess);
    // console.log("userNumber-->", userNumber);

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont Lie, Buddy !", "You are cheating", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "higher") {
      minBoundary = currentGuess + 1;
      console.log(currentGuess);
    } else {
      maxBoundary = currentGuess;
      console.log(currentGuess);
    }
    const nextRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    console.log("Current guess finally", nextRndNum);
    setCurrentGuess(nextRndNum);
  }

  return (
    <View style={styles.rootScreen}>
      <Title>Opponent's Choice</Title>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <NumberContainer number={currentGuess} />
      </View>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <PrimaryButton
          onPressHandler={nextGuessHandler.bind(this, "higher")}
          text="+"
        />
        <PrimaryButton
          onPressHandler={nextGuessHandler.bind(this, "lower")}
          text="-"
        />
      </View>
    </View>
  );
}

export default GameScreen;

styles = StyleSheet.create({
  rootScreen: {
    marginHorizontal: 18,
    // flex:1
  },
});
