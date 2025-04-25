import { View, StyleSheet } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedBackground from '../../components/ThemedBackground';

export default function AboutScreen() {
    return (
        <ThemedBackground style={styles.container}>
            <ThemedText style={styles.text}>🙋‍♂️ About Moodify</ThemedText>
        </ThemedBackground>
    );
}

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 20, fontWeight: 'bold' },
});