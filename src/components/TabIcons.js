import React, { useEffect } from 'react'
import { Bell, Clock } from 'react-native-feather'

export function AlarmsTabIcon(props) {
    useEffect(() => {
        // console.error()
    })

    return (
        <Bell
            color={'#ff0000'}
            size={props.size} />
    )
}

export function ClockTabIcon(props) {
    useEffect(() => {
        // console.error(props.focused)
    })

    return (
        <Clock
            color={props.focused ? '#ff0000' : '#ff0000'}
            size={props.size} />
    )
}