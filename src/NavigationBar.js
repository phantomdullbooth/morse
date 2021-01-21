/* ////////////////////// IMPORTS ////////////////////// */

import React from 'react'
import { Alert, Appearance, Text, TouchableOpacity, View } from 'react-native'
import { BlurView } from "@react-native-community/blur"
import 'react-native-gesture-handler'
import { app, nav } from './style'
import { useDatabase } from '@nozbe/watermelondb/hooks'
import { useColorScheme } from 'react-native-appearance'
import { base, colors } from './design/style'
import { useEffect } from 'react'

export function NavigationBar({ state, descriptors, navigation }) {
    const database = useDatabase()
    const alarms = database.collections.get('user_alarms')
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    const isSchemeDark = useColorScheme() === 'dark' ? true : false



    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        
        <>
            <View
                style={[
                    base.navBar,
                    {
                        backgroundColor: isSchemeDark ? colors.blackOnDark : colors.whiteOnLight,
                        borderColor: isSchemeDark ? '#0e0e0f' : '#d4d4d4'
                    }
                ]}>
                    
                    
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


                    async function deleteAllAlarms() {
                        await database.action(async () => {
                            await alarms.query().destroyAllPermanently()
                        })
                    }

                    function prepForDeletion() {
                        Alert.alert(
                            'Warning',
                            'Are you sure you want to delete all alarms?',
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                { text: "Delete All", onPress: () => { deleteAllAlarms(), Alert.alert('All alarms deleted') } },
                                { cancelable: false }
                            ]
                        )
                    }




                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <React.Fragment key={index}>
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                delayLongPress={3000}
                                onLongPress={prepForDeletion}
                                style={{ flex: 1 }} style={[base.navButton]}
                                key={index}>
                                <Text style={[nav.buttonTitle, { color: isFocused ? colors.whiteOnDark : '#4A4A4A' }]}>{label}</Text>
                            </TouchableOpacity>
                        </React.Fragment>
                    );
                })}
            </View>
        </>
    );
}