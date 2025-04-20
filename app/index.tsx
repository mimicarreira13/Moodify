import React, { useEffect } from "react";
import { Animated, Easing, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LoadingScreen() {
    const router = useRouter();
    const logoScale = new Animated.Value(0.1); // Initialize scale for animation

    useEffect(() => {
        Animated.sequence([
            Animated.timing(logoScale, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.out(Easing.exp),
            }),
            Animated.delay(2000), // Shorter delay for testing (2 seconds)
        ]).start(() => {
            router.replace("/home"); // Navigate to the Home screen after animation
        });
    }, [router]);

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
    },
    logo: {
        width: 300,
        height: 300,
    },
});
