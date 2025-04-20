import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router'; // This should be expo-router's useRouter
import AsyncStorage from '@react-native-async-storage/async-storage';

const moods = [
    { emoji: '🙂', label: 'Happy', color: '#FFD93D' },
    { emoji: '😢', label: 'Sad', color: '#5DA9E9' },
    { emoji: '⚡', label: 'Energetic', color: '#FF6B6B' },
    { emoji: '🌙', label: 'Relaxed', color: '#A29BFE' },
];

export default function HomeScreen() {
    const [firstTime, setFirstTime] = useState(true);
    const router = useRouter(); // Use expo-router's useRouter

    useEffect(() => {
        const checkFirstTime = async () => {
            const hasLaunched = await AsyncStorage.getItem('hasLaunched');
            if (hasLaunched) setFirstTime(false);
            else await AsyncStorage.setItem('hasLaunched', 'true');
        };
        checkFirstTime();
    }, []);

    const handleMoodSelect = (mood: string) => {
        console.log(`Navigating to /mood/${mood.toLowerCase()}`);
        router.push(`/mood/${mood.toLowerCase()}`); // Use the router to navigate to the dynamic mood page
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to Moodify</Text>
            <Text style={styles.subtitle}>
                {firstTime ? 'Choose your mood and let’s vibe 🎶' : 'Welcome back! What’s your mood today?'}
            </Text>

            <View style={styles.moodContainer}>
                {moods.map((mood) => (
                    <TouchableOpacity
                        key={mood.label}
                        style={[styles.moodButton, { backgroundColor: mood.color }]}
                        onPress={() => handleMoodSelect(mood.label)} // Navigate to mood page
                    >
                        <Text style={styles.moodEmoji}>{mood.emoji}</Text>
                        <Text style={styles.moodLabel}>{mood.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
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
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
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
