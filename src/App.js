import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

import { Alarms } from './views/alarms/Alarms'
import { WorldClock } from './views/clock/WorldClock'
import { NavigationBar } from './NavigationBar'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider'
import database from './database/index';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <AppearanceProvider>
            <NavigationContainer>
                <StatusBar barStyle={useColorScheme() === 'light' ? 'dark-content' : 'light-content'} translucent={false} />

                <DatabaseProvider database={database}>
                    <Tab.Navigator
                        tabBarOptions={{ showIcon: true }}
                        initialRouteName="Alarms"
                        tabBar={props => <NavigationBar {...props} />}>
                        <Tab.Screen
                            key={1}
                            name="Alarms"
                            component={Alarms}
                            options={{
                                tabBarLabel: 'Alarms',
                                tabBarIcon: () => (
                                    null
                                )
                            }} />
                        <Tab.Screen
                            key={2}
                            name="Clock"
                            component={WorldClock}
                            options={{
                                tabBarLabel: 'Clock',
                                tabBarIcon: () => (
                                    null
                                )
                            }} />
                    </Tab.Navigator>
                </DatabaseProvider>
            </NavigationContainer>
        </AppearanceProvider>
    )
}