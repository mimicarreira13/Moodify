import React, { useState, useEffect } from 'react';
import DrawerNavigator from '../navigators/DrawerNavigator';
import LoadingScreen from './index';

export default function Layout() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return <DrawerNavigator />;
}