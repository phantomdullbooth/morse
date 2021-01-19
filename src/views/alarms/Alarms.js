/* ////////////////////// IMPORTS ////////////////////// */

import React, { useEffect, useState } from 'react'
import { Alert, Modal, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { app, base } from '../../style'
import { AddAlarm } from './AddAlarm'
import { Header } from '../../snacks/Header'
import { Outlook } from '../../snacks/Outlook'
import moment from 'moment'


/* ////////////////////// RENDERS ALARM PAGE ////////////////////// */

export function Alarms() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [alarmGreeting, setAlarmGreeting] = useState('')

    function determineAlarmGreeting() {
        const hour = moment().format('h')
        const period = moment().format('a')

        if ( 4 >= hour < 12 && period === 'am') {
            setAlarmGreeting('Good Morning')
        } else if ((hour <= 12 && hour < 17) && period === 'pm') {
            setAlarmGreeting('Good Afternoon')
        } else if (hour >= 17 && hour < 22 && period === 'pm') {
            setAlarmGreeting('Good Evening')
        } else {
            setAlarmGreeting('Good Evening')
        }
    }

    


    useEffect(() => {
        determineAlarmGreeting()
    })

    return (
        <SafeAreaView style={[base.window]} forceInset={{ 'top': 'never' }}>
            <Header
                optionArgs={true}
                optionFunction={setIsModalOpen}
                optionLabel="Add Alarm"
                title={alarmGreeting}
                subtitle="No alarms scheduled" />
            
            <Modal
                animationType="slide"
                presentationStyle="pageSheet"
                visible={isModalOpen}>
                <AddAlarm setIsModalOpen={setIsModalOpen} />
            </Modal>

            <Outlook />

            <ScrollView style={[app.mainContent]}>
                <View style={[app.bullet]} key="30">
                    <Text style={[app.bulletName]}>Morning {'\n'}Meditation</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>6:45 am</Text>
                        <Text style={[app.spacetimeDate]}>Weekdays</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}