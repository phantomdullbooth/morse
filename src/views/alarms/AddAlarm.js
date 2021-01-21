/* ////////////////////// IMPORTS ////////////////////// */
/* ////////////////////// IMPORTS ////////////////////// */

import React, { useState } from 'react'
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { useDatabase } from '@nozbe/watermelondb/hooks'
import { Q } from '@nozbe/watermelondb'

import { app, base, buttonType, text } from '../../style'
import { WeeklyOverview } from '../../Snacks'


/* ////////////////////// ADD ALARM MODAL ////////////////////// */
/* ////////////////////// ADD ALARM MODAL ////////////////////// */

export function AddAlarm(props) {
    const database = useDatabase()
    const alarms = database.collections.get('user_alarms')

    const [date, setDate] = useState(null)
    const [outlookDays, setOutlookDays] = useState([])
    const [title, setTitle] = useState('')
    const [isTitleEditable, setIsTitleEditable] = useState(false)
    const today = new Date()



    function onChangeSpacetime(event, selectedDate) {
        const currentDate = selectedDate || date
        setDate(currentDate)
    }

    async function createAlarm() {
        try {
            await database.action(addNewAlarm(title))
        } catch (error) {
            console.error('nope')
        }
    }

    // async function createAlarm() {
    //     await database.action(async () => {
    //         try {
    //             const newAlarm = alarms.create(alarm => {
    //                 alarm.title = title,
    //                 alarm.spacetime = date
    //             })
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     })
    // }

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
                        : <Pressable
                            style={[app.headspaceTitle]}
                            onPress={() => setIsTitleEditable(true)}>
                            <Text style={[app.h1, app.headspaceTitle, text.standby]}>Change title here</Text>
                        </Pressable>}

                    <Text style={[text.h4]}>Or let it remain untitled</Text>
                </View>
            </View>

            <View style={[app.mainContent]}>
                <WeeklyOverview fromAddAlarm />


                <View style={[app.bulletOption]}>
                    <Text style={{ fontWeight: '600', fontSize: 25 }}>Time</Text>

                    <RNDateTimePicker
                        onChange={onChangeSpacetime}
                        style={{ width: 320 }}
                        display="inline"
                        mode="time"
                        value={date || today} />
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


                <Pressable onPress={() => props.setIsModalOpen(false)} style={[buttonType.lengthLong, buttonType.accept, { marginBottom: 15 }]}>
                    <Text style={[app.headspaceButtonText]}>Cancel</Text>
                </Pressable>



                <Pressable onPress={() => { createAlarm(), props.setIsModalOpen(false) }} style={[buttonType.lengthLong, buttonType.accept]}>
                    <Text style={[app.headspaceButtonText]}>Add Alarm</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}