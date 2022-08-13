import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './src/screens/mainPage'
import { SignUpScreen } from './src/screens/signUp';
import { LoginScreen } from './src/screens/login';
import { WelcomeScreen } from './src/screens/welcomePage';
import { UserProfileScreen } from './src/screens/userProfile';
import { TutorsListingScreen } from './src/screens/tutorsListing';
import { TutorsProfileScreen } from './src/screens/tutorsProfile';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component = { MainScreen } />
        <Stack.Screen name = 'Sign Up' component = { SignUpScreen }/>
        <Stack.Screen name = 'Login' component = { LoginScreen }/>
        <Stack.Screen name = 'Welcome' component = { WelcomeScreen }/>
        <Stack.Screen name = 'My profile' component = { UserProfileScreen }/>
        <Stack.Screen name = 'Tutors' component = { TutorsListingScreen }/>
        <Stack.Screen name = 'Tutors profile' component = { TutorsProfileScreen }/>
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}
