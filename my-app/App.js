import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './src/screens/mainPage';
import { SignUpScreen } from './src/screens/signUp';
import { LoginScreen } from './src/screens/login';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component = { MainScreen } />
        <Stack.Screen name = 'Sign Up' component = { SignUpScreen }/>
        <Stack.Screen name = 'Login' component = { LoginScreen }/>
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}
