import { 
  View, 
  Text,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native'
import React from 'react'
import styles from '../styles/login.styles'
import loginPic from '../assets/loginPic.jpg'

export const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView 
    style = { styles.container } 
    behavior= { Platform.OS === "ios" ? "padding" : "height" }>
    <TouchableWithoutFeedback onPress = { Keyboard.dismiss }>
    <View style = { styles.inner }>
      <Image style = { styles.img } source = { loginPic }/>
      <View style = { styles.inputField }>
        <TextInput 
          style = { styles.input } 
          placeholder = 'user name or e-mail'
          // value = { name }
          // onChangeText = { handleName } 
        />
        <TextInput 
          style = {styles.input} 
          placeholder = 'password' 
          // value = { email }
          //onChangeText = { handleEmail }
          />
        <Text style = { styles.text }>Forgot password?</Text>
        <TouchableOpacity
          style = { styles.btn } 
          onPress = {() => navigation.navigate( 'Login' )}
          >
          <Text style = { styles.login }>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  )
}