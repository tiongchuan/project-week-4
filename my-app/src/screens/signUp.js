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
import React, { useState } from 'react'
import { Switch } from 'react-native-switch'
import signUpPic from '../assets/signUpPic.jpg'
import styles from '../styles/signUp.styles'

export const SignUpScreen = ({ navigation }) => {
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return(
    <ScrollView>
      <KeyboardAvoidingView 
        style = { styles.container } 
        behavior= { Platform.OS === "ios" ? "padding" : "height" }>
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss }>
          <View style = { styles.innerContainer }>
            
            <Image style = { styles.img } source = { signUpPic }/>
            <View style = { styles.inputContainer }>
              <TextInput 
                style = { styles.input } 
                placeholder = 'username'
                // value = { name }
                // onChangeText = { handleName } 
              />
              <TextInput 
                style = {styles.input} 
                placeholder = 'email' 
                // value = { email }
                //onChangeText = { handleEmail }
                />
              <TextInput 
                style = { styles.input } 
                placeholder = 'mobile number' 
                // value = { mobileNumber }
                // onChangeText = { handleMobileNumber }
                keyboardType = 'numeric' />
              <TextInput 
                style = {styles.input} 
                placeholder = 'Enter password' 
                // value = { password }
                //onChangeText = { handlePassword }
                />
              <TextInput 
                style = { styles.input } 
                placeholder = 'Confirm password' 
                // value = { confirmPassword }
                //onChangeText = { handleConfirmPassword }
                />
              <View style = { styles.toggle }>
                <Text style = { styles.text }>I am a </Text>
                <Switch
                  value = { isEnabled }
                  onValueChange = { toggleSwitch }
                  disabled = { false }
                  barHeight = { 25 }
                  circleSize = { 35 }
                  switchLeftPx = { 2 }
                  switchRightPx = { 5 }
                  circleBorderWidth = { 0 }
                  switchBorderRadius = { 10 }
                  activeText = { 'Student' }
                  inActiveText = { 'Tutor' }
                  backgroundActive = { 'gray' }
                  backgroundInactive = { 'gray' }
                  circleActiveColor = { '#D9D9D9' }
                  circleInActiveColor = { '#D9D9D9' }
                />
              </View>
              <TouchableOpacity
                style = { styles.btn } 
                onPress = {() => navigation.navigate( 'Welcome' )}
                >
                <Text style = { styles.btnText }>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>  
  )
}