import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import profileImg from '../assets/profileImg.jpg'
import styles from '../styles/userProfile.styles'

export const UserProfileScreen = ({ navigation }) => {
  return (
    <View style = { styles.container }>
      <Image style = { styles.img } source = { profileImg }/>
      <View style = { styles.texts }> 
        <Text style = { styles.text }>Name: Will </Text>
        <Text style = { styles.text }>Age: 20 </Text>
        <Text style = { styles.text }>E-mail: will@gmail.com </Text>
        <Text style = { styles.text }>Mobile number: 94582165 </Text>
      </View>
      <Button title = 'Log out' onPress = {() => navigation.navigate( 'Home' )}/>
      {/* <View style = {styles.btns }>
        <TouchableOpacity 
          style = { styles.btn }
          onPress = {() => navigation.navigate( 'My profile' )}
        >
          <Text style = { styles.btnText }>My profile</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}
