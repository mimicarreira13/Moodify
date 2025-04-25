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
import { useTheme } from '../context/ThemeContext';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const { isDarkMode, toggleMode } = useTheme();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: { backgroundColor: isDarkMode ? '#121212' : '#fff', width: 240 },
                headerStyle: { backgroundColor: isDarkMode ? '#121212' : '#fff' },
                headerTintColor: isDarkMode ? '#fff' : '#000',
                drawerActiveTintColor: isDarkMode ? '#1DB954' : '#000',
                drawerInactiveTintColor: isDarkMode ? '#ccc' : '#000',
                headerLeft: () => <CustomMenuButton isDarkMode={isDarkMode} />,
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
            <Drawer.Screen
                name={isDarkMode ? "Dark Mode" : "Light Mode"}
                component={() => null}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name={isDarkMode ? "moon" : "sunny"}
                            size={20}
                            color={color}
                        />
                    ),
                    drawerLabelStyle: {
                        fontWeight: 'normal',
                    },
                    drawerItemStyle: {
                        height: 50,
                    },
                }}
                listeners={{
                    drawerItemPress: (e) => {
                        e.preventDefault();
                        toggleMode();
                    },
                }}
            />
        </Drawer.Navigator>
    );
}