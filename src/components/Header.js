import React from 'react'
import {  Text, View } from 'react-native'
import { app, text } from '../style'
import { LongButton } from './Buttons'
import { useColorScheme } from 'react-native-appearance'
import { colors } from '../design/style'

export function Header(props) {
    const isSchemeDark = useColorScheme() === 'dark' ? true : false

    return (
        <View style={[app.header]}>
            <View style={[app.headlineGroup]}>
                <Text style={[text.h1, {color: isSchemeDark ? colors.whiteOnDark : colors.black }]}>{props.title}</Text>
                <Text style={[text.h4, {color: '#8B8B8B'}]}>{props.subtitle} </Text>
            </View>

            <LongButton
                optionArgs={props.optionArgs}
                optionFunction={props.optionFunction}
                optionLabel={props.optionLabel} />
        </View>
    )
}