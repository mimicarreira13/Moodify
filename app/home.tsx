import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const moods = [
    { emoji: '🙂', label: 'Happy', color: '#FFD93D' },
    { emoji: '😢', label: 'Sad', color: '#5DA9E9' },
    { emoji: '⚡', label: 'Energetic', color: '#FF6B6B' },
    { emoji: '🌙', label: 'Relaxed', color: '#A29BFE' },
];

function MoodButtons() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose your mood:</Text>
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

function MoodScreen({ route }: { route: any }) {
    const { mood } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>You selected: {mood}</Text>
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