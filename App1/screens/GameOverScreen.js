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
  
function GameOver(){
return(
    <View>
        <Text>Game is oVer </Text>
    </View>
)
}


export default GameOver