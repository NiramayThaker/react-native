import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'

function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
        <Pressable 
            android_ripple={{'color': '#ccc'}}
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={ onPress }
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,

        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,

        overflow: 'hidden',
    },

    button: {
        flex: 1,
    },

    buttonPressed: {
        opacity: .5,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})