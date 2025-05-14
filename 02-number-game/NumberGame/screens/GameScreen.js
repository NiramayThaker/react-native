import React from 'react'
import { Text, StyleSheet} from 'react-native';

function GameScreen() {
  return (
    <Text style={styles.rootScreen}>Game Screen</Text>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
