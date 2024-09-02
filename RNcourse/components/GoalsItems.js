import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";

GoalsItem = function (props) {
  console.log(props);

  return (
    <View style={styles.individualGoals}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.onDeleteFunction.bind(this, props.id)}
        style={({pressed}) => {
          pressed && styles.pressedIOS;
        }}
      >
        <Text style={styles.goalsText}>{props.goal_text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalsItem;

styles = StyleSheet.create({
  goalsText: { color: "white", backgroundColor: "blue", padding: "2%" },
  individualGoals: {
    margin: "2%",
    backgroundColor: "red",
    borderRadius: 10,
    color: "green",
  },
  pressedIOS: {
    opacity: 0.5,
  },
});
