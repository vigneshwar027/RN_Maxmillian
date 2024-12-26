import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Autolink from "react-native-autolink";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#Ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.15,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <StartGameScreen />
        </View>
      </ImageBackground>
    </LinearGradient>
  );

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
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
