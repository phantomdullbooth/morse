import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { app, shape } from './style'
import { useColorScheme } from 'react-native-appearance'
import { colors } from './design/style'

export function Separator() {
    const isSchemeDark = useColorScheme() === 'dark' ? true : false
    
    return (
        <View
            style={{
                backgroundColor: isSchemeDark ? colors.blackOnDark : colors.whiteOnLight,
                height: 1,
                width: '100%'
            }} />
    )
}

export function WeeklyOverview(props) {
    const [days, setDays] = useState([
        {
            name: 'Sunday',
            shortName: 'Sun',
            isHighlighted: false
        },
        {
            name: 'Monday',
            shortName: 'Mon',
            isHighlighted: false
        },
        {
            name: 'Tuesday',
            shortName: 'Tue',
            isHighlighted: false
        },
        {
            name: 'Wednesday',
            shortName: 'Wed',
            isHighlighted: false
        },
        {
            name: 'Thursday',
            shortName: 'Thu',
            isHighlighted: false
        },
        {
            name: 'Friday',
            shortName: 'Fri',
            isHighlighted: false
        },
        {
            name: 'Saturday',
            shortName: 'Sat',
            isHighlighted: false
        },
    ])

    function toggleThisDay(e) {
        console.error(e)
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
                    key={item.id}
                        style={{flexDirection: 'column'}}
                        onPress={() => props.fromAddAlarm ? toggleThisDay() : null}>
                        <Text style={{
                            color: item.isHighlighted ? '#000000' : '#AEAEB2',
                            fontSize: 17,
                            fontWeight: '700',
                            marginBottom: 5
                        }}>{item.shortName}</Text>

                        {item.isHighlighted ? <View style={[shape.long]}></View> : null}
                    </Pressable>)
                } />
        </View >
    )
}