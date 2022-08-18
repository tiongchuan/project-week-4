import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './src/screens/mainPage'
import { SignUpScreen } from './src/screens/signUp';
import { LoginScreen } from './src/screens/login';
import { WelcomeScreen } from './src/screens/welcomePage';
import { UserProfileScreen } from './src/screens/userProfile';
import { TutorsListingScreen } from './src/screens/tutorsListing';
import { MyActivityScreen } from './src/screens/myActivity';
import { TutorProfileScreen } from './src/screens/tutorProfile';
import { RequestTutorScreen } from './src/screens/requestTutor';

import Tabs from './src/navigation/tabs';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name = 'Home' component = { MainScreen } />
        <Stack.Screen name = 'Sign Up' component = { SignUpScreen }/>
        <Stack.Screen name = 'Login' component = { LoginScreen }/>
        <Stack.Screen name = 'Welcome' component = { Tabs }/>
        <Stack.Screen name = 'My profile' component = { UserProfileScreen }/>
        {/* <Stack.Screen name = 'My profile' component = { UserProfileScreen }/> */}
        <Stack.Screen name = 'Tutors' component = { TutorsListingScreen }/>
        {/* <Stack.Screen name = 'My Activity' component = { MyActivityScreen }/> */}
        <Stack.Screen name = 'Tutor profile' component = { TutorProfileScreen }/>
        <Stack.Screen name = 'Request Tutor' component = { RequestTutorScreen }/>
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}
