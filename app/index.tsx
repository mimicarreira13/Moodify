import React, { useEffect, useRef } from "react";
import { Animated, Easing, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../context/ThemeContext";

export default function LoadingScreen() {
    const router = useRouter();
    const { isDarkMode } = useTheme();
    const logoScale = useRef(new Animated.Value(0.1)).current; // UseRef para manter o valor da animação

    useEffect(() => {
        // Executa a animação
        Animated.sequence([
            Animated.timing(logoScale, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.out(Easing.exp),
            }),
            Animated.delay(2000),
        ]).start(() => {
            // Navega após a animação
            router.replace("/home");
        });
    }, [router, logoScale]);

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? "#000" : "#fff" },
            ]}
        >
            <Animated.Image
                source={
                    isDarkMode
                        ? require("../assets/images/logo_dark.png")
                        : require("../assets/images/logo_light.png")
                }
                style={[styles.logo, { transform: [{ scale: logoScale }] }]}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 300,
        height: 300,
    },
});