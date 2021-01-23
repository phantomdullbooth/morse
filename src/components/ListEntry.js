import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import moment from 'moment'
import { app, base, colors } from '../design/style'


export function ListEntry(props) {
    const isDarkMode = useColorScheme() === 'dark' ? true : false
    const item = props.item

    const theme = {
        backgroundColor: isDarkMode ? colors.black : colors.white,
        primaryText: isDarkMode ? colors.whiteOnDark : colors.black,
        unfocusedText: '#808080'
    }

    return (
        <Pressable key={item.key}>
            <View style={[ base.entry ]}>
                <Text style={[ base.entryTitle, { color: theme.primaryText }]}>{item.title}</Text>

                <View style={[ app.spacetime ]}>
                    <Text style={[ base.entryTime, { color: theme.primaryText }]}>
                    {moment(item.datetime).format('h:mm a')}
                    </Text>

                    <Text style={[ base.entrySubtitle, { color: theme.unfocusedText } ]}>[subtitle here]</Text>
                </View>
            </View>
        </Pressable>
    )
}