
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyActivityScreen } from '../screens/myActivity';
import { TutorProfileScreen } from '../screens/tutorProfile';
import { TutorsListingScreen } from '../screens/tutorsListing';
import { UserProfileScreen } from '../screens/userProfile';
import { WelcomeScreen } from '../screens/welcomePage';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>

            {/* <Tab.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    tabBarLabel: 'Home',
                      tabBarActiveBackgroundColor:"#D9D9D9" ,
                    //   tabBarIcon: 'home-account',
                    // tabBarIcon: ({size, color}) => (<Icon name={"Home"} color={color} size={size} />)
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons name="home" color="purple" size={size} />)
                }}
            /> */}

            <Tab.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarActiveBackgroundColor: "#D9D9D9",
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons name="account" color="purple" size={size} />)
                }}
            />
            <Tab.Screen
                name="Tutors"
                component={TutorsListingScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarActiveBackgroundColor: "#D9D9D9",
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons name="magnify" color="purple" size={size} />)
                }}
            />

            <Tab.Screen
                name="My Activity"
                component={MyActivityScreen}
                options={{
                    tabBarLabel: 'Bookings',
                    tabBarActiveBackgroundColor: "#D9D9D9",
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons name="bookmark" color="purple" size={size} />)
                }}
            />

        </Tab.Navigator>
    )
}



