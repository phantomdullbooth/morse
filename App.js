/* ////////////////////// IMPORTS ////////////////////// */
/* ////////////////////// IMPORTS ////////////////////// */

import React from 'react'
import {
    SafeAreaView,
    StatusBar
} from 'react-native'
import { WorldClock } from './components/tabs/WorldClock'
import { Alarms } from './components/tabs/Alarms'
import { app } from './components/design/Style'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { BlurView, VibrancyView } from "@react-native-community/blur";


import { View, Text, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function NavigationBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={[ app.navigationBar ]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <Text style={{ color: isFocused ? '#0044ff' : '#222' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

// ...





export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} translucent={false} />
            {/* <SafeAreaView style={[app.window]} forceInset={{ 'top': 'never' }}>
                
            </SafeAreaView> */}

<Tab.Navigator tabBar={props => <NavigationBar {...props} />}>
                <Tab.Screen key="1" name="World Clock" component={WorldClock} />
                <Tab.Screen key="2" name="Alarms" component={Alarms} />
            </Tab.Navigator>
            
        </NavigationContainer>
    )
}

