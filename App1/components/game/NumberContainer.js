import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ number }) {
  console.log(number);
  return (
    <View style={styles.container}>
      <Text style= {styles.number}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    border: 4,
    borderColor: Colors.accent500,
    borderWidth: 2,
    borderRadius: 4,
    margin: 20,
    padding: 5,
    height:100,
    width:200,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    justifyContent: "center",
    color:Colors.accent500,
    fontWeight:"bold",
    fontSize:24,
    alignItems: "center",
  },
});

export default NumberContainer;
