import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }, // <-- change 'key' to 'id'
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(
        (goal) => goal.id !== id
      );
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add new goal' 
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      <GoalInput visible={modalIsVisible} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler} 
          />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },

  goalsContainer: {
    flex: 5
 }

});
