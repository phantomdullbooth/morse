import React from 'react'
import { StatusBar } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider'
import database from './database/index';

import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

import { NavigationBar } from './components/NavigationBar'
import { WorldClock } from './views/clock/WorldClock'
import { Alarms } from './views/alarms/Alarms'

import { base, colors } from './design/style'

/* ////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////// */

export default function App() {
    const Tab = createBottomTabNavigator();
    const isDarkMode = useColorScheme() === 'dark' ? true : false

    const theme = {
        backgroundColor: isDarkMode ? colors.black : colors.white,
        statusBar: isDarkMode ? 'light-content' : 'dark-content'
    }

    return (
        <AppearanceProvider>
            <NavigationContainer>
                <StatusBar barStyle={ theme.statusBar } translucent={false} />

                <DatabaseProvider database={database}>
                    <Tab.Navigator
                        initialRouteName="Alarms"
                        sceneContainerStyle={[
                            base.window,
                            { backgroundColor: theme.backgroundColor }]}
                        tabBar={props => <NavigationBar {...props} />}>
                        <Tab.Screen
                            key={'74'}
                            name="Clock"
                            component={WorldClock} />
                        <Tab.Screen
                            key={'72'}
                            name="Alarms"
                            component={Alarms} />
                    </Tab.Navigator>
                </DatabaseProvider>
            </NavigationContainer>
        </AppearanceProvider>
    )
}