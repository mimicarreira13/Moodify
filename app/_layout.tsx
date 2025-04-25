import React, { useState, useEffect } from 'react';
import DrawerNavigator from '../navigators/DrawerNavigator';
import LoadingScreen from './index';
import { ThemeProvider } from '../context/ThemeContext';

export default function Layout() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
    }, []);

    return (
        <ThemeProvider>
            {isLoading ? <LoadingScreen /> : <DrawerNavigator />}
        </ThemeProvider>
    );
}