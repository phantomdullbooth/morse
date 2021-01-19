/* ////////////////////// IMPORTS ////////////////////// */

import React, { useState } from 'react'
import { Alert, Modal, Platform, Pressable, SafeAreaView, Switch, Text, TextInput, View } from 'react-native'
import { app, base, buttonType, text } from '../../style'
import DateTimePicker from '@react-native-community/datetimepicker'
import alarms from '../../models/schema'
import { useDatabase } from '@nozbe/watermelondb/hooks';



/* ////////////////////// RENDERS ADD ALARM PAGE ////////////////////// */

export function AddAlarm(props) {
    const database = useDatabase()
    const [alarmTitle, setAlarmTitle] = useState('')
    const [willSnooze, setWillSnooze] = useState(false)

    const [isTitleEditable, setIsTitleEditable] = useState(false)

    function toggleWillSnooze() {
        setWillSnooze(!willSnooze)
    }






    async function handleSubmit() {
        await database.action(async () => {
            const alarms = database.collections.get('alarms')
            console.log(alarms)

            try {
                return await alarms.create((alarm) => {
                    alarm.title = alarmTitle
                })
            } catch (error) {
                console.error(message)
            }
        })
    }


    return (
        <SafeAreaView style={[base.window]} forceInset={{ 'top': 'never' }}>

            <View style={[app.headspace]}>
                <View style={[app.headspaceHeadline]}>
                    {isTitleEditable === true
                        ? <TextInput
                            multiline={true}
                            maxLength={35}
                            placeholder="Untitled Alarm"
                            style={[app.h1, app.headspaceTitle]}
                            value={alarmTitle}
                            onChangeText={setAlarmTitle} />
                        : <Pressable style={[app.headspaceTitle]} onPress={() => setIsTitleEditable(true)}>
                            <Text style={[app.h1, app.headspaceTitle, text.standby]}>Untitled Alarm</Text>
                        </Pressable>}

                    <Text style={[text.h4]}>Tap to change title</Text>
                </View>
            </View>

            <View style={[app.mainContent]}>


                <View style={[app.bulletOption]}>
                    <Text style={{ fontWeight: '600', fontSize: 25 }}>Time</Text>

                    <DateTimePicker
                        style={{ flex: 1 }}
                        testID="dateTimePicker"
                        value={date}
                        mode="time"
                        is24Hour={true}
                        display="inline"
                        onChange={onChange}
                    />
                </View>



                <View style={[app.bulletOption]}>
                    <Text style={{ fontWeight: '600', fontSize: 25 }}>Snooze</Text>

                    <Switch
                        onValueChange={toggleSnooze}
                        value={isSnoozeEnabled} />
                </View>

                <View style={[app.bulletOption]}>
                    <Text style={{ fontWeight: '600', fontSize: 25 }}>Notification</Text>

                    <Switch
                        onValueChange={toggleSnooze}
                        value={isSnoozeEnabled} />
                </View>





                {/* <View style={[app.bullet]} key="30">
                    <Text style={[app.bulletName]}>Time</Text>

                    <DateTimePicker
                        display="inline"
                        style={{ width: 320, backgroundColor: "white" }}
                        testID="dateTimePicker"
                        value={date}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                </View> */}
            </View>


            <View style={[app.group]}>
                {/* <Pressable onPress={() => props.setIsModalOpen(false)} style={[buttonType.lengthShort, { marginRight: 15 }]}>
                    <Text style={[app.headspaceButtonText]}>X</Text>
                </Pressable> */}

                <Pressable onPress={() => props.setIsModalOpen(false)} style={[buttonType.lengthLong, buttonType.accept, { marginBottom: 15 }]}>
                    <Text style={[app.headspaceButtonText]}>Cancel</Text>
                </Pressable>



                <Pressable onPress={handleSubmit} style={[buttonType.lengthLong, buttonType.accept]}>
                    <Text style={[app.headspaceButtonText]}>Add Alarm</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}