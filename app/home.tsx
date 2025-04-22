import React, { useEffect, useState } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StackParamList = {
    'Mood Selector': undefined;
    Mood: { mood: string };
};

const Stack = createStackNavigator<StackParamList>();

const moods = [
    { emoji: '🙂', label: 'Happy', color: '#FFD93D' },
    { emoji: '😢', label: 'Sad', color: '#5DA9E9' },
    { emoji: '⚡', label: 'Energetic', color: '#FF6B6B' },
    { emoji: '🌙', label: 'Relaxed', color: '#A29BFE' },
];

type MoodButtonsNavigationProp = StackNavigationProp<StackParamList, 'Mood Selector'>;

function MoodButtons() {
    const navigation = useNavigation<MoodButtonsNavigationProp>();
    const [welcomeMessage, setWelcomeMessage] = useState('Welcome to Moodify!');

    useEffect(() => {
        const checkFirstTime = async () => {
            const hasOpened = await AsyncStorage.getItem('hasOpenedApp');
            if (hasOpened) {
                setWelcomeMessage('Welcome back!');
            } else {
                await AsyncStorage.setItem('hasOpenedApp', 'true');
            }
        };

        checkFirstTime();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>{welcomeMessage}</Text>
            <Text style={styles.subtext}>Choose your mood:</Text>
            <View style={styles.moodContainer}>
                {moods.map((mood) => (
                    <TouchableOpacity
                        key={mood.label}
                        style={[styles.moodButton, { backgroundColor: mood.color }]}
                        onPress={() => navigation.navigate('Mood', { mood: mood.label })}
                    >
                        <Text style={styles.moodEmoji}>{mood.emoji}</Text>
                        <Text style={styles.moodLabel}>{mood.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default function HomeScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Mood Selector" component={MoodButtons} />
            <Stack.Screen name="Mood" component={MoodScreen} />
        </Stack.Navigator>
    );
}

function MoodScreen({ route }: { route: { params: { mood: string } } }) {
    const { mood } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>You selected: {mood}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    welcome: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtext: {
        fontSize: 18, // Tamanho menor para o texto "Choose your mood"
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    moodContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },
    moodButton: {
        width: 120,
        height: 80,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    moodEmoji: {
        fontSize: 24,
    },
    moodLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
});