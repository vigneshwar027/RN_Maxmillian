import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";

// import { StatusBar } from "expo-status-bar";

// test commit
import GoalsItem from "./components/GoalsItems";
import GoalsInput from "./components/GoalsInput";

import generateUniqueNumber from "./helpers/goalsHelper";

export default function Appssed() {
  const [allGoals, setAllGoals] = useState([]);

  const [isModalVisible, setisModalVisible] = useState(false);

  function makeModalVisible() {
    setisModalVisible(true);
  }

  function makeModalInVisible() {
    setisModalVisible(false);
  }

  const all_goals_comp = (goalsInputText) => {
    `the below is one way of appending to the list in usestate but is not the right approach`;

    // setAllGoals([...allGoals,goalsInputText]);

    `here in below current state of the var is passed as a param which can used to handled the logic`;

    setAllGoals((current_goal) => [
      ...current_goal,
      { goal_text: goalsInputText, id: generateUniqueNumber() },
    ]);

    makeModalInVisible();

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
    <>
    {/* the statusBar compoment from the expo is a sibling component and cannot be used at the root level. */}
      <StatusBar style="auto" /> 
      <View style={styles.appcontainer}>
        <Button title="Add goal" onPress={makeModalVisible} />

        <GoalsInput
          isModalVisible={isModalVisible}
          onPressFunction={all_goals_comp}
          onCancelFunction={makeModalInVisible}
        />

        <View style={styles.goalsContainer}>
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

          {/* the below is other  way to do it*/}
          {/* <ScrollView>
          {allGoals.map((goal) => (
            <View style={styles.individualGoals}>
              <Text key={{ goal }} style={styles.goalsText}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView> */}
        </View>
      </View>
    </>
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
    backgroundColor: "#3116b6",
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
  goalsContainer: { marginVertical: 20, flex: 3 },
  goalsText: { color: "white" },
  individualGoals: {
    margin: "2%",
    padding: "2%",
    borderRadius: 10,
    color: "green",
  },
});
