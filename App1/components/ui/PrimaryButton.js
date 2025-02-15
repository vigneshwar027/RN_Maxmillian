import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton(props) {
  //   console.log(props);
  return (
    <View>
      <Pressable onPress={props.onPressHandler} style={styles.buttons}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: Colors.white300,
    borderRadius: 10,
    margin: 7,
    height: 35,
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
