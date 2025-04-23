import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ThemedText(props: TextProps) {
    const { isDarkMode } = useTheme();
    return (
        <Text
            {...props}
            style={[props.style, { color: isDarkMode ? '#FFF' : '#000' }]}
        />
    );
}