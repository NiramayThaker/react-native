import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';


function generateRandowBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) 
        return generateRandowBetween(min, max, exclude);
    else
        return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber}) {
    const initialGuess = generateRandowBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'greater' && currentGuess < userNumber)
        ){
            Alert.alert("Lie !!", [{text: 'Sorry', style: 'cancel'}]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandowBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

  return (
    <View style={styles.screen}>
      <Title titleText={"Opponent's Guess"} />
      
      <NumberContainer>{currentGuess}</NumberContainer>
      
      <View>
        <Text>Higher Or Lower</Text>
        <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </View>
      
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
