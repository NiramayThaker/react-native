import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 5, // For android
    }
})
