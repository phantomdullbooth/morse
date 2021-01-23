import React, { useState } from 'react'
import { Pressable, SafeAreaView, Text, TextInput, View, Switch, StatusBar } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import Slider from '@react-native-community/slider';
import Expand from 'react-native-simple-expand';

import { useDatabase } from '@nozbe/watermelondb/hooks'
import { Q } from '@nozbe/watermelondb'

import DateTimePicker from '@react-native-community/datetimepicker';

import { WeekOverview } from '../../components/WeekOverview'
import { app, base, buttonType, colors, text } from '../../design/style'
import { Separator } from '../../components/Separator'


/* ////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////// */

export function AddAlarm(props) {
    const database = useDatabase()
    const alarms = database.collections.get('user_alarms')
    const isDarkMode = useColorScheme() === 'dark' ? true : false
    const today = new Date()

    const theme = {
        backgroundColor: isDarkMode ? colors.black : colors.white,
        primaryText: isDarkMode ? colors.whiteOnDark : colors.black,
        unfocusedText: isDarkMode ? '#1c1c1e' : '#AEAEB2'
    }

    const [title, setTitle] = useState('')
    const [selectedDays, setSelectedDays] = useState([])
    const [isSnooze, setIsSnooze] = useState(false)
    const [snoozeTime, setSnoozeTime] = useState(9)
    const [datetime, setDatetime] = useState(today)

    /* =================== */
    /* =================== */

    async function createAlarm() {
        await database.action(async () => {
            try {
                const newAlarm = alarms.create(alarm => {
                    alarm.title = title,
                        alarm.isSnooze = isSnooze,
                        alarm.snoozeTime = snoozeTime,
                        alarm.datetime = datetime.toISOString()
                })
                props.fetchAlarms()
            } catch (error) {
                console.error(error)
            }
        })
    }

    async function fetchThisAlarm() {
        try {
            const response = await alarms.query().fetch(Q.where('id', alarm.id))
            setFetchedAlarm(response)
        } catch (error) {
            console.error(error)
        }
    }
    
    const onChangeDatetime = (event, selectedDate) => {
        const currentDate = selectedDate || datetime;
        setDatetime(currentDate);
      };


    /* =================== */
    /* =================== */

    return (
        <SafeAreaView
            forceInset={{ 'top': 'never' }}
            style={[base.window, { backgroundColor: theme.backgroundColor }]}>
            <StatusBar barStyle='light-content' translucent={false} />

            <View style={[app.header]}>
                <View style={[app.headspaceHeadline]}>
                    <TextInput
                        blurOnSubmit={true}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Untitled Alarm"
                        placeholderTextColor={theme.unfocusedText}
                        maxLength={35}
                        multiline={true}
                        selectTextOnFocus={true}
                        returnKeyType="next"
                        style={[app.h1, app.headspaceTitle, { color: theme.primaryText }]} />

                    <Text style={[text.h4, { color: '#8B8B8B' }]}>Add a title or leave it blank</Text>
                </View>
            </View>

            <WeekOverview selectedDays={selectedDays} />

            <View style={[app.mainContent]}>
                <Separator />
                <View style={[app.bulletOption]}>
                    <Text style={{
                        color: theme.primaryText,
                        fontSize: 25,
                        fontWeight: '600'
                    }}>Time</Text>

                    <DateTimePicker
                        onChange={onChangeDatetime}
                        style={{ width: 320 }}
                        display="inline"
                        mode="time"
                        value={datetime} />
                </View>

                <Separator />
                <View style={[app.bulletOption]}>
                    <Text style={{
                        color: theme.primaryText,
                        fontSize: 25,
                        fontWeight: '600'
                    }}>Snooze</Text>

                    <Switch
                        onChange={() => setIsSnooze(!isSnooze)}
                        value={isSnooze} />
                </View>

                <Expand value={isSnooze}>
                <Text
                        style={[
                            text.h5,
                            { textAlign: 'center', color: theme.primaryText }
                            ]}>{snoozeTime} minutes</Text>
                        <Slider
                            onValueChange={setSnoozeTime}
                            style={{ flex: 0.7 }}
                            minimumValue={4}
                            maximumValue={15}
                            minimumTrackTintColor="#FF0000"
                            maximumTrackTintColor={colors.blackOnDark}
                            step={1}
                            value={snoozeTime} />
                </Expand>
            </View>

            <View style={[app.group]}>


                <Pressable onPress={() => props.setIsModalOpen(false)} style={[buttonType.lengthLong, buttonType.accept, { marginBottom: 15 }]}>
                    <Text style={[app.headspaceButtonText]}>Cancel</Text>
                </Pressable>



                <Pressable onPress={() => { createAlarm(), props.setIsModalOpen(false) }} style={[buttonType.lengthLong, buttonType.accept]}>
                    <Text style={[app.headspaceButtonText]}>Finished</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}