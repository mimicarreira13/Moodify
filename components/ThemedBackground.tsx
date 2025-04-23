import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ThemedBackground(props: ViewProps) {
    const { isDarkMode } = useTheme();
    return (
        <View
            {...props}
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? '#121212' : '#F5F5F5' },
                props.style,
            ]}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});