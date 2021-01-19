import React from 'react'
import { Text, View } from 'react-native'
import { app, shape } from '../style'

function DailyView(props) {
    return (
        <View>
            <Text style={{ color: props.set ? '#000000' : '#AEAEB2', fontWeight: '700', fontSize: 17, marginBottom: 5 }}>{props.label}</Text>
            {props.set === true ? <View style={[ shape.long ]}></View> : null }
        </View>
    )
}

export function Outlook() {
    return (
        <View style={[ app.outlook ]}>
            <DailyView label="Sun." />
            <DailyView label="Mon." />
            <DailyView label="Tue." set={true} />
            <DailyView label="Wed." />
            <DailyView label="Thu." />
            <DailyView label="Fri." set={true} />
            <DailyView label="Sat." />
        </View>
        
    )
}