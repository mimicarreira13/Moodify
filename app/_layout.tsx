import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#ffffff" },
                headerTitle: "",
                headerLeft: () => (
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => alert("Menu aberto!")}>
                        <Ionicons name="menu" size={24} color="#000" />
                    </TouchableOpacity>
                ),
            }}
        >
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}