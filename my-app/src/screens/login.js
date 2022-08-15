import { 
  View, 
  Text,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'
import React from 'react'
import styles from '../styles/login.styles'
import loginPic from '../assets/loginPic.jpg'

export const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <KeyboardAvoidingView 
        style = { styles.container } 
        behavior= { Platform.OS === "ios" ? "padding" : "height" }>
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss }>
          <View style = { styles.innerContainer }>
            <Image style = { styles.img } source = { loginPic }/>
            <View style = { styles.inputContainer }>
              <TextInput 
                style = { styles.input } 
                placeholder = 'username or email'
                // value = { name }
                // onChangeText = { handleName } 
              />
              <TextInput 
                style = {styles.input} 
                placeholder = 'password' 
                secureTextEntry
                // value = { email }
                //onChangeText = { handleEmail }
                />
              <Text style = { styles.text }>Forgot password?</Text>
              <TouchableOpacity
                style = { styles.btn } 
                onPress = {() => navigation.navigate( 'Welcome' )}
                >
                <Text style = { styles.btnText }>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ScrollView>
  )
}