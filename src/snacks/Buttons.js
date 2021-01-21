import React from 'react'
import { Pressable, Text } from 'react-native'
import { buttonType, text } from '../style'

import { useColorScheme } from 'react-native-appearance'
import { colors } from '../design/style'

export function LongButton(props) {
    const isSchemeDark = useColorScheme() === 'dark' ? true : false

    return (
        <Pressable
            onPress={() => props.optionFunction(props.optionArgs)}
            style={[buttonType.lengthLong, { backgroundColor: isSchemeDark ? '#1c1c1e' : colors.black }]}>
            <Text style={[text.buttonDark, { color: isSchemeDark ? colors.whiteOnDark : colors.whiteOnLight }]}>{props.optionLabel}</Text>
        </Pressable>
    )
}