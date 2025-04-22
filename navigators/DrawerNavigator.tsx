import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from '../app/home';
import MyFavoritesScreen from '../app/screens/favorites';
import MoodHistoryScreen from '../app/screens/history';
import AboutScreen from '../app/screens/about';
import FeedbackScreen from '../app/screens/feedback';
import PrivacyScreen from '../app/screens/privacy';
import CustomMenuButton from '../components/buttons/CustomMenuButton';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

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
            <Drawer.Screen
                name={isDarkMode ? "Dark Mode" : "Light Mode"}
                component={() => null} // Não renderiza uma nova página
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name={isDarkMode ? "moon" : "sunny"}
                            size={20}
                            color={color}
                        />
                    ),
                    drawerLabelStyle: {
                        fontWeight: 'normal', // Garante que o texto não fique em negrito
                    },
                    drawerItemStyle: {
                        height: 50, // Garante que o tamanho seja consistente com os outros itens
                    },
                }}
                listeners={{
                    drawerItemPress: (e) => {
                        e.preventDefault(); // Evita que o painel lateral feche
                        toggleMode(); // Alterna o tema
                    },
                }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10, // Reduzido para diminuir o espaço à esquerda
    },
    icon: {
        marginRight: 10,
    },
    toggleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});