import { View, Text, StyleSheet } from "react-native";

export default function MoodHistoryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>🕒 Mood History</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 20, fontWeight: "bold" },
});
