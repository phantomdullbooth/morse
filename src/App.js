import React, { useEffect } from 'react'
import { Appearance, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

import { Alarms } from './views/alarms/Alarms'
import { WorldClock } from './views/clock/WorldClock'
import { NavigationBar } from './Navigation'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import database from './db/db';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

const Tab = createBottomTabNavigator();

export default function App() {
    const isDarkMode = Appearance.getColorScheme() === 'dark' ? true : false

    useEffect(() => {
        console.log(Appearance.getColorScheme())
    })
    
    return (
        <NavigationContainer>
            <StatusBar barStyle={isDarkMode === true ? 'light-content' : 'dark-content'} translucent={false} />

            <DatabaseProvider database={database}>
                <Tab.Navigator tabBar={props => <NavigationBar {...props} />}>
                    <Tab.Screen name="Alarms" component={Alarms} />
                    <Tab.Screen name="World Clock" component={WorldClock} />
                </Tab.Navigator>
            </DatabaseProvider>
        </NavigationContainer>
    )
}