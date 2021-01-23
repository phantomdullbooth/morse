import React, { useState } from 'react'
import { useEffect } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { useColorScheme } from 'react-native-appearance'

import { app, colors, shape } from '../design/style'

/* ////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////// */

export function WeekOverview(props) {
    const [daysSelected, setDaysSelected] = useState([])
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const isDarkMode = useColorScheme() === 'dark' ? true : false

    const theme = {
        selectedText: colors.whiteOnDark,
        unselectedText: '#808080'
    }

    function toggleDaySelection(day) {
        let dayIndex;

        if (daysSelected.includes(day)) {
            dayIndex = daysSelected.indexOf(day)

            daysSelected.splice(dayIndex, 1)
        } else {
            daysSelected.push(day)
        }
    }

    function abbreviateDay(day) {
        return day.slice(0, 3)
    }

    return (
        <View style={[app.outlook]}>
            <FlatList
                data={days}
                horizontal
                keyExtractor={(item, index) => item.id}
                scrollEnabled={false}
                contentContainerStyle={{
                    justifyContent: 'space-evenly',
                    width: '100%'
                }}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => toggleDaySelection(item)}
                        key={item.id}
                        style={{ flexDirection: 'column' }}>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '700',
                            marginBottom: 5,
                            color: daysSelected.includes(item) ? theme.selectedText : theme.unselectedText
                        }}>{abbreviateDay(item)}.</Text>

                        {item.isHighlighted ? <View style={[shape.long]}></View> : null}
                    </Pressable>)
                } />
        </View >
    )
}