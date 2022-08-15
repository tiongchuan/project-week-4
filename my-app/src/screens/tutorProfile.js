import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import profileImg from '../assets/profileImg.jpg'
import styles from '../styles/tutorProfile.styles'

export const TutorProfileScreen = ({ navigation }) => {
  return (
    <View style = { styles.container }>
      <Image style = { styles.img } source = { profileImg } />
      <View style = { styles.texts }>
        <Text style = { styles.text }>Name: Will </Text>
        <Text style = { styles.text }>Age: 20 </Text>
        <Text style = { styles.text }>E-mail: will@gamil.com </Text>
        <Text style = { styles.text }>Mobile number: 94582165 </Text>
      </View>
      
      <TouchableOpacity 
        style = { styles.btn }
        onPress = {() => navigation.navigate( 'Request Tutor' )}
      >
        <Text style = { styles.btnText }>Request</Text>
      </TouchableOpacity>
    </View>
  )
}