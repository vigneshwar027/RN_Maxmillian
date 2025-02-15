import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    padding: 12,
    color: Colors.accent500,
    textAlign: "center",
    borderColor: "#Ddb52f",
    borderWidth: 2,
    fontWeight: "bold",
    fontSize: 24,
  },
});
