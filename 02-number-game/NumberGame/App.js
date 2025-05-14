import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen.js';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});
