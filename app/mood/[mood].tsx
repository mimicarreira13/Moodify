// app/mood/[mood].js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function MoodScreen() {
    const { mood } = useLocalSearchParams();  // Get the dynamic 'mood' parameter

    return (
        <View style={styles.container}>
            <Text style={styles.title}>You selected: {mood}</Text>
            {/* You can add additional logic here to render specific content based on the mood */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
