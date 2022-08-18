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
import React, {useEffect, useState} from 'react'
import styles from '../styles/login.styles'
import loginPic from '../assets/loginPic.jpg'
import API from '../config/api.js'

export const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async () => {

      await API
        .post ('/login', {
          email: email, 
          password: password,
        })
        .then (res => {

          console.log(res.data);

          if (res.data.status == "200") {
            navigation.navigate('Welcome');
            console.log(res.message);
          }
        })
        .catch (e => {

          // Check if email or password is empited
          if (e.response.status == "500") {
            const message = JSON.stringify(e.response.data.message);
            alert(`${message}`);
            // console.log(e.response.status);
            // console.log(e.response.data);
          }

          // Check if email exist in database
          if (e.response.status == "401") {
            const message = JSON.stringify(e.response.data.message);
            alert(`${message}`);
            // console.log(e.response.status);
            // console.log(e.response.data);
          }
        });
  };

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
                placeholder = 'email'
                value = { email }
                onChangeText = { setEmail } 
              />
              <TextInput 
                style = { styles.input } 
                placeholder = 'password' 
                secureTextEntry
                value = { password }
                onChangeText = { setPassword }
                />
              <Text style = { styles.text }>Forgot password?</Text>
              <TouchableOpacity
                style = { styles.btn } 
                onPress = { handleLogin }
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