import ThemedBackground from '../../components/ThemedBackground';
import ThemedText from '../../components/ThemedText';
import { StyleSheet } from 'react-native';

export default function MoodHistoryScreen() {
    return (
        <ThemedBackground style={styles.container}>
            <ThemedText style={styles.text}>🕒 Mood History</ThemedText>
        </ThemedBackground>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 20, fontWeight: 'bold' },
});