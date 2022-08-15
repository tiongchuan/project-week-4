import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/requestTutor.styles'

export const RequestTutorScreen = ({ navigation }) => {
  return (
    <View style = { styles.container }>
        <Text style = { styles.text }>Selected Date</Text>
        <Text style = { styles.text }>Time Requested:</Text>
        <View style = { styles.inputContainer }>
            <TextInput style = { styles.input } placeholder="Additional Request">

            </TextInput>
        </View>
        <TouchableOpacity 
            style = { styles.btn }
            onPress = {() => navigation.navigate( 'Welcome' )}
        >
            <Text style = { styles.btnText }>Confirmed</Text>
        </TouchableOpacity>
    </View>
  )
}