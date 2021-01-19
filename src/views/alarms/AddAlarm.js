/* ////////////////////// IMPORTS ////////////////////// */

import React, { useState } from 'react'
import { Alert, Modal, Platform, Pressable, SafeAreaView, Switch, Text, TextInput, View } from 'react-native'
import { app, base, buttonType, text } from '../../style'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useDatabase } from '@nozbe/watermelondb/hooks'
import { useEffect } from 'react';
import { Q } from '@nozbe/watermelondb'



/* ////////////////////// RENDERS ADD ALARM PAGE ////////////////////// */

export function AddAlarm(props) {
    const database = useDatabase()
    const alarmsCollection = database.collections.get('ualarms')
    const [title, setTitle] = useState('')
    const [willSnooze, setWillSnooze] = useState(false)
    const [isTitleEditable, setIsTitleEditable] = useState(false)

    function toggleWillSnooze() {
        setWillSnooze(!willSnooze)
    }

    async function createAlarm() {
        await database.action(async () => {
            try {
                const newAlarm = alarmsCollection.create(alarm => {
                    alarm.title = title
                })
            } catch (error) {
                console.error(error)
            }
        })
    }

    async function deleteAlarms() {
        await database.action(async () => {
            await alarmsCollection.query(Q.where('title', 'Seeds')).destroyAllPermanently()
        })
    }

    async function fetchAlarms() {
        console.log(await alarmsCollection.query().fetch())
    }

    useEffect(() => {
        fetchAlarms()
    })

    return (
        <SafeAreaView style={[base.window]} forceInset={{ 'top': 'never' }}>

            <View style={[app.headspace]}>
                <View style={[app.headspaceHeadline]}>
                    {isTitleEditable === true
                        ? <TextInput
                            multiline={true}
                            maxLength={35}
                            onChangeText={setTitle}
                            placeholder="Untitled Alarm"
                            style={[app.h1, app.headspaceTitle]}
                            value={title}
                             />
                        : <Pressable style={[app.headspaceTitle]} onPress={() => setIsTitleEditable(true)}>
                            <Text style={[app.h1, app.headspaceTitle, text.standby]}>Untitled Alarm</Text>
                        </Pressable>}

                    <Text style={[text.h4]}>Tap to change title</Text>
                </View>
            </View>

            <View style={[app.mainContent]}>


                <View style={[app.bulletOption]}>
                    <Text style={{ fontWeight: '600', fontSize: 25 }}>Time</Text>
                </View>



                <View style={[app.bulletOption]}>
                    <Text style={{ fontWeight: '600', fontSize: 25 }}>Snooze</Text>

                </View>

                <View style={[app.bulletOption]}>
                    <Text style={{ fontWeight: '600', fontSize: 25 }}>Notification</Text>

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



                <Pressable onPress={createAlarm} style={[buttonType.lengthLong, buttonType.accept]}>
                    <Text style={[app.headspaceButtonText]}>Add Alarm</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}