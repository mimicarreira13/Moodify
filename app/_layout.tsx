import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

// Import your screens
import HomeScreen from './home'; // This is your Home screen
import MyFavoritesScreen from './screens/favorites';
import MoodHistoryScreen from './screens/history';
import AboutScreen from './screens/about';
import FeedbackScreen from './screens/feedback';
import PrivacyScreen from './screens/privacy';
import LoadingScreen from './index'; // Import the Loading Screen

const Drawer = createDrawerNavigator();

type DrawerParamList = {
    Home: undefined;
    'My Favorites': undefined;
    'Mood History': undefined;
    'About Moodify': undefined;
    Feedback: undefined;
    Privacy: undefined;
};

function CustomMenuButton() {
    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

    return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 16 }}>
            <Ionicons name="menu" size={36} color="black" />
        </TouchableOpacity>
    );
}

export default function Layout() {
    const [isLoading, setIsLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000); // Simulate loading screen
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    if (isLoading) {
        return <LoadingScreen />;
    }

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
                component={HomeScreen} // Home screen with the mood buttons
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