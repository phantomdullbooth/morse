import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { useColorScheme } from 'react-native-appearance'

import { useDatabase } from '@nozbe/watermelondb/hooks'
import 'react-native-gesture-handler'

import { base, colors } from '../design/style'
import { Bell, Clock } from 'react-native-feather'

/* ////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////// */

export function NavigationBar({ state, descriptors, navigation }) {
    const database = useDatabase()
    const alarms = database.collections.get('user_alarms')
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    const isDarkMode = useColorScheme() === 'dark' ? true : false

    const theme = {
        backgroundColor: isDarkMode ? colors.blackOnDark : colors.whiteOnLight,
        borderColor: isDarkMode ? '#0e0e0f' : '#d4d4d4',
        iconColor: isDarkMode ? '#0044FF' : '#5F5F60',
        focusedIcon: '#0044FF',
        unfocusedIcon: '#5F5F60',
        focusedText: isDarkMode ? colors.whiteOnDark : colors.black,
        unfocusedText: isDarkMode ? '#5F5F60' : '#5F5F60'
    }




    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View
            style={[
                base.navBar,
                {
                    backgroundColor: theme.backgroundColor,
                    borderColor: theme.borderColor
                }
            ]}>

            {state.routes.map((route, index) => {

                const { options } = descriptors[route.key];

                const icon =
                    typeof options.tabBarIcon === 'function'
                        ? options.tabBarIcon({ isFocused })
                        : null

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

                function renderIconByRoute({ isFocused }) {
                    if (route.name === 'Clock') {
                        <Clock
                            color={isFocused ? '#ff0000' : '#ff0000'}
                            size={25} />
                    } else if (route.name === 'Alarms') {
                        <Bell
                            color={isFocused ? '#ff0000' : '#0044ff'}
                            size={25} />
                    }
                }

                return (
                    <React.Fragment key={index}>
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            delayLongPress={2000}
                            onLongPress={prepForDeletion}
                            style={{ flex: 1 }} style={[base.navButton]}
                            key={index}>
                            <View style={[base.navButtonLabel]}>


                                {route.name === 'Clock'
                                    ?
                                    <Clock
                                        color={isFocused ? theme.focusedIcon : theme.unfocusedIcon}
                                        size={25}
                                        marginRight={10} />
                                    : <Bell
                                        color={isFocused ? theme.focusedIcon : theme.unfocusedIcon}
                                        size={25}
                                        marginRight={10} />}
                                <Text
                                    style={[
                                        base.navButtonTitle,
                                        { color: isFocused ? theme.focusedText : theme.unfocusedText }
                                    ]}>{label}</Text>
                            </View>
                        </TouchableOpacity>
                    </React.Fragment>
                );
            })}
        </View>
    );
}