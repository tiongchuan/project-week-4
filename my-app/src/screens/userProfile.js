import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import mainPic from '../assets/mainPic.png'
import styles from '../styles/userProfile.styles'

export const UserProfileScreen = () => {
  return (
    <View style = { styles.container }>
      <Image style = { styles.img } source = { mainPic } />
      <Text style = { styles.text }>Name: Will </Text>
      <Text style = { styles.text }>Age: 20 </Text>
      <Text style = { styles.text }>E-mail: will@gamil.com </Text>
      <Text style = { styles.text }>Mobile number: 94582165 </Text>
      <View style = {styles.btns }>
        <TouchableOpacity 
          style = { styles.btn }
          // onPress = {() => navigation.navigate( 'My profile' )}
        >
          <Text style = { styles.btnText }>My profile</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = { styles.btn }
          // onPress = {() => navigation.navigate( 'Login' )}
        >
          <Text style = { styles.btnText }>Tutors listing</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = { styles.btn }
          // onPress = {() => navigation.navigate( 'Login' )}
        >
          <Text style = { styles.btnText }>My activity</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
