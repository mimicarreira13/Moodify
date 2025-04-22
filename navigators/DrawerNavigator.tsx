import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../app/home';
import MyFavoritesScreen from '../app/screens/favorites';
import MoodHistoryScreen from '../app/screens/history';
import AboutScreen from '../app/screens/about';
import FeedbackScreen from '../app/screens/feedback';
import PrivacyScreen from '../app/screens/privacy';
import CustomMenuButton from '../components/buttons/CustomMenuButton';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: { backgroundColor: '#ffffff', width: 240 },
                headerStyle: { backgroundColor: '#ffffff' },
                headerTitle: '',
                drawerActiveTintColor: '#1DB954',
                drawerInactiveTintColor: '#000',
                headerLeft: () => <CustomMenuButton />,
                drawerContentContainerStyle: { paddingTop: 100 },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="home" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="My Favorites"
                component={MyFavoritesScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="heart" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Mood History"
                component={MoodHistoryScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="time" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="About Moodify"
                component={AboutScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="information-circle" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Feedback"
                component={FeedbackScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="mail" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Privacy"
                component={PrivacyScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="lock-closed" size={20} color={color} />,
                }}
            />
        </Drawer.Navigator>
    );
}