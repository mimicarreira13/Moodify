import { useEffect } from "react";
import { View, Image, StyleSheet, Animated, Easing } from "react-native";
import { useRouter } from "expo-router";

export default function LoadingScreen() {
    const router = useRouter();
    const logoScale = new Animated.Value(0.1);

    useEffect(() => {
        Animated.sequence([
            Animated.timing(logoScale, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.out(Easing.exp),
            }),
            Animated.delay(1000), // Optional pause before navigating
        ]).start(() => {
            // 👇 This is the key line:
            router.replace("/home"); // Navigates to your actual HomeScreen
        });
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require("../assets/logo.png")}
                style={[styles.logo, { transform: [{ scale: logoScale }] }]}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
    },
    logo: {
        width: 300,
        height: 300,
    },
});
