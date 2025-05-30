import React from 'react'
import { MEALS } from '../data/dummy-data'
import { Text, View } from 'react-native-web'
import { StyleSheet } from 'react-native'


function MealsOverviewScreen({ route }) {

  const catId = route.params.catrgoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.container}>
        <Text>
            Meal Overview Screen - {displayedMeals}
        </Text>
    </View>
  )
}

export default MealsOverviewScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})
