import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { app, buttonType, text } from '../style'
import { LongButton } from './Buttons'

export function Header(props) {
    return (
        <View style={[app.header]}>
            <View style={[app.headlineGroup]}>
                <Text style={[text.h1]}>{props.title}</Text>
                <Text style={[text.h4]}>{props.subtitle}</Text>
            </View>

            <LongButton
                optionArgs={props.optionArgs}
                optionFunction={props.optionFunction}
                optionLabel={props.optionLabel} />
        </View>
    )
}