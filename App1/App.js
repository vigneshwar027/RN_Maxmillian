import { StatusBar } from "expo-status-bar";
import { useState,useEffect } from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Autolink from "react-native-autolink";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOverScreen";

export default function App() {
  const [confirmedNumber, setconfirmedNumber] = useState();
  const [isGameOver,setIsGameOver] = useState(false)

  function onGameOverHandler(){
    setIsGameOver(true)
  }

  function pickedNumberHandler(pickedNumber) {
    console.log('confirmedNumber updated-->', pickedNumber)
    setconfirmedNumber(pickedNumber);
  }

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  // if (true) {
  if (confirmedNumber) {
    screen = <GameScreen userNumber={confirmedNumber} onGameOver = {onGameOverHandler}/>;
  }

  if (isGameOver){
    screen = <GameOver/>
  }

  
  return (
    <LinearGradient colors={[Colors.primary500, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.15,
        }}
      >
        <View>
          <SafeAreaView>{screen}</SafeAreaView>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

// for testing
// return (
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
//     <View style={{ backgroundColor: "red", height: 90, width: 90, flex: 1 }}>
//       <Text>dafsdfsdfsd</Text>
//     </View>
//     <View style={{ backgroundColor: "blue", height: 90, width: 90, flex: 3 }}>
//       <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
//     </View>
//     <View
//       style={{ backgroundColor: "green", height: 90, width: 90, flex: 1 }}
//     ></View>
//   </View>
// );
