/* ////////////////////// IMPORTS ////////////////////// */

import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { BlurView } from "@react-native-community/blur"
import 'react-native-gesture-handler'
import { app, nav } from './style'

export function NavigationBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <>
        <View style={[nav.bar]}>
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
                    <>
                    <BlurView
                            //   style={styles.absolute}
                            blurType="dark"
                            blurAmount={1}
                            reducedTransparencyFallbackColor="white"
                        />
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1 }} style={[nav.button]}
                            key={index}>
                                <BlurView
                            //   style={styles.absolute}
                            blurType="dark"
                            blurAmount={1}
                        />
                            <Text style={[nav.buttonTitle, {color: isFocused ? '#234BB8' : '#000000'}]}>{label}</Text>
                        </TouchableOpacity>
                        
                        </>
                );
            })}
        </View>
        </>
    );
}