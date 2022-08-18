import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/welcomePage.styles'
import boy from '../assets/Boy.jpg'

export const WelcomeScreen = ({ navigation, route }) => {

  return (
    <View style = { styles.container }>

      
      <Text style={styles.p1}>Welcome </Text>
      <Text style={styles.p2}> { route.params.name } </Text>

      <Image style = { styles.img } source = { boy } />
      
      <View style = {styles.btns }>
        <TouchableOpacity 
          style = { styles.btn }
          onPress = {() => navigation.navigate( 'My profile', {name: route.params.name, email: route.params.email} )}
        >
          <Text style = { styles.btnText }>My profile</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = { styles.btn }
          onPress = {() => navigation.navigate( 'Tutors' )}
        >
          <Text style = { styles.btnText }>Tutors listing</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = { styles.btn }
          onPress = {() => navigation.navigate( 'My Activity' )}
        >
          <Text style = { styles.btnText }>My activity</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
