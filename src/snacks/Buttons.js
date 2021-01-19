import React from 'react'
import { Pressable, Text } from 'react-native'
import { buttonType, text } from '../style'

export function LongButton(props) {
    return (
        <Pressable
            onPress={() => props.optionFunction(props.optionArgs)}
            style={[buttonType.lengthLong]}>
            <Text style={[text.buttonDark]}>{props.optionLabel}</Text>
        </Pressable>
    )
}