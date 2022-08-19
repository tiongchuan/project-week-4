import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../styles/welcomePage.styles'
import boy from '../assets/Boy.jpg'
import profileImg from '../assets/profileImg.jpg'

// import Tabs from '../navigation/tabs'

export const WelcomeScreen = ({ navigation, route }) => {


    // console.log(route);

  return (

    <ScrollView 
    // style = { styles.container }
    >

      <Text style={styles.p1}>Welcome </Text>
      <Text style={styles.p2}> { route.params.email } </Text>

      <Image style = { styles.img } source = { boy } />

      <View style = { styles.texts }> 
   {/* <Text style = { styles.text }>Name: { route.params.name }</Text> */}
        <Text style = { styles.text }>Age: 20 </Text>
        <Text style = { styles.text }>E-mail: { route.params.email } </Text>
        <Text style = { styles.text }>Mobile number: 94582165 </Text>
      </View>

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

   
    </ScrollView>
  )
}
