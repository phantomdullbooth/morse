/* ////////////////////// IMPORTS ////////////////////// */
/* ////////////////////// IMPORTS ////////////////////// */

import React, { useEffect, useState } from 'react'
import { FlatList, Modal, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { useDatabase } from '@nozbe/watermelondb/hooks'
import moment from 'moment'

import Swipeable from 'react-native-gesture-handler/Swipeable';

import { AddAlarm } from './AddAlarm'
import { Header } from '../../snacks/Header'
import { Separator, WeeklyOverview } from '../../Snacks';
import { useColorScheme } from 'react-native-appearance'
import { app, base, colors } from '../../design/style'



/* ////////////////////// INDIVIDUAL ALARM ////////////////////// */
/* ////////////////////// INDIVIDUAL ALARM ////////////////////// */

function AlarmBullet(props) {
    moment.locale('en')

    const dt = props.item.spacetime

    useEffect(() => {
        console.error(props.item.spacetime)
    })

    return (
        <View style={[app.bullet]} key="30">
            <Text style={[app.bulletName]}>{props.item.title}</Text>


            <View style={[app.spacetime]}>
                <Text style={[app.spacetimeTime]}>{moment(dt).format('h:mm a')}</Text>
                <Text style={[app.spacetimeDate]}>Weekdays</Text>
            </View>
        </View>
    )
}


/* ////////////////////// ALARM LISTING ////////////////////// */
/* ////////////////////// ALARM LISTING ////////////////////// */

export function Alarms() {
    const [alarmGreeting, setAlarmGreeting] = useState('')
    const [fetchedAlarms, setFetchedAlarms] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const database = useDatabase()
    const alarms = database.collections.get('user_alarms')


    async function fetchAlarms() {
        try {
            const response = await alarms.query().fetch()
            setFetchedAlarms(response)
        } catch (error) {
            console.error(error)
        }
    }

    const isSchemeDark = useColorScheme() === 'dark' ? true : false


    useEffect(() => {
        function determineAlarmGreeting() {
            const hour = moment().format('h')
            const period = moment().format('a')

            if (4 >= hour < 12 && period === 'am') {
                setAlarmGreeting('Good Morning')
            } else if (hour <= 5 && hour <= 12 && period === 'pm') {
                setAlarmGreeting('Good Afternoon')
            } else if (hour >= 17 && hour < 22 && period === 'pm') {
                setAlarmGreeting('Good Evening')
            } else {
                setAlarmGreeting('Good Evening')
            }
        }

        determineAlarmGreeting()
        fetchAlarms()
    }, [])

    return (
        <SafeAreaView
            style={[
                base.window,
                { backgroundColor: isSchemeDark ? colors.black : colors.white }]} forceInset={{ 'top': 'never' }
                }>
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

            <WeeklyOverview />

            <View style={[app.mainContent]}>
                <FlatList
                    data={fetchedAlarms}
                    ItemSeparatorComponent={() =>  <Separator />}
                    ListHeaderComponent={() =>  <Separator />}
                    renderItem={({ item }) => <View style={[app.bullet]} key="30">
                        <Text style={[app.bulletName]}>{item.title}</Text>


                        <View style={[app.spacetime]}>
                            <Text style={[app.spacetimeTime]}>{moment().format('h:mm a')}</Text>
                            <Text style={[app.spacetimeDate]}>Weekdays</Text>
                        </View>
                    </View>}
                />
            </View>
        </SafeAreaView>
    )
}