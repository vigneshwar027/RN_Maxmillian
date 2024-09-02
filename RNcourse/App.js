import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";


// test commit
import GoalsItem from "./components/GoalsItems";
import generateUniqueNumber from "./helpers/goalsHelper";

export default function Appssed() {
  const [goalsInputText, setgoalsInputText] = useState("");
  const [allGoals, setAllGoals] = useState([]);

  const getInputText = (inputtext) => {
    setgoalsInputText(inputtext);
    console.log("Input text-->  ", goalsInputText);
  };

  const all_goals_comp = () => {
    `the below is one way of appending to the list in usestate but is not the right approach`;

    // setAllGoals([...allGoals,goalsInputText]);

    `here in below current state of the var is passed as a param which can used to handled the logic`;

    setAllGoals((current_goal) => [
      ...current_goal,
      { goal_text: goalsInputText, id: generateUniqueNumber() },
    ]);

    console.log(`all goals--->  `, allGoals);
  };

  const deleteGoalsHandler = (id) => {
    // console.log('id here',id)
    // new_goals = allGoals.filter((goal)=>{
    //   return goal.id !== id
    // })

    // console.log('newgoals',new_goals)
    // setAllGoals(new_goals)

    // console.log("aaaall goals", allGoals);
    // console.log("id hereree", id);

    setAllGoals((current_goals) =>
      current_goals.filter((goal) => goal.id !== id)
    );
  };
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={getInputText}
          style={styles.inputText}
          placeholder="Your goals here"
        />

        <Button onPress={all_goals_comp} title="Add" backgroundColor="blue" />
      </View>

      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {allGoals.map((goal) => (
            <View style={styles.individualGoals}>
              <Text key={{ goal }} style={styles.goalsText}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView> */}

        <FlatList
          data={allGoals}
          renderItem={(itemobject) => {
            console.log("code here", itemobject.item.id);
            return (
              <GoalsItem
                goal_text={itemobject.item.goal_text}
                id={itemobject.item.id}
                onDeleteFunction={deleteGoalsHandler}
              />
            );
          }}
          keyExtractor={(itemobject) => {
            return itemobject.id;
          }}
        />
      </View>
    </View>
  );
}

const new_style = {
  margin: 10,
  borderWidth: 2,
  borderColor: "red",
  margin: 20,
  padding: 20,
};

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor: "#ffd",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  inputText: {
    // marginVertical:10  ,
    borderColor: "blue",
    color: "red",
    borderWidth: 2,
    padding: 10,
    width: "70%",
  },
  inputContainer: {
    paddingBottom: 20,
    marginTop: "20%",
    borderBottomWidth: 1,
    borderBottomColor: "red",
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
  },
  goalsContainer: { backgroundColor: "pink", marginVertical: 20, flex: 3 },
  goalsText: { color: "white" },
  individualGoals: {
    margin: "2%",
    padding: "2%",
    backgroundColor: "red",
    borderRadius: 10,
    color: "green",
  },
});
