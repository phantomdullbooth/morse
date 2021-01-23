import React, { useState } from 'react'
import { View } from 'react-native'
import { useColorScheme } from 'react-native-appearance'

import { colors } from '../design/style'

export function Separator() {
    const isDarkMode = useColorScheme() === 'dark' ? true : false

    const [theme, setTheme] = useState({
        unfocusedObject: isDarkMode ? colors.blackOnDark : colors.whiteOnLight
    })

    return (
        <View
            style={{
                backgroundColor: theme.unfocusedObject,
                height: 1,
                width: '100%'
            }} />
    )
}