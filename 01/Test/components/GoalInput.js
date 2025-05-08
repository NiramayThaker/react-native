import React from 'react'
import { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native'

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='fade'>
            <View style={styles.inputContainer}>
            
            <TextInput 
                style={styles.textInput} 
                placeholder="Your course goal .!" 
                onChangeText={goalInputHandler} 
                value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>

                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.endAddGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccc'
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#ccccc',
        width: '95%',
        // marginRight: 8,
        padding: 8,
    },

    buttonContainer: {
        flexDirection: 'row',
    },

    button: {
        width: '25%',
        marginHorizontal: 8,
        marginVertical: 10,
    }
})
