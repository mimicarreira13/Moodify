import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerParamList = {
    [key: string]: undefined;
};

export default function CustomMenuButton() {
    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

    return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 16 }}>
            <Ionicons name="menu" size={36} color="black" />
        </TouchableOpacity>
    );
}