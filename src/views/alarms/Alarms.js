import React, { useEffect, useState } from 'react'
import { FlatList, Modal, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { useDatabase } from '@nozbe/watermelondb/hooks'
import moment from 'moment'

import { AddAlarm } from './AddAlarm'
import { Header } from '../../components/Header'
import { WeekOverview } from '../../components/WeekOverview'
import { useColorScheme } from 'react-native-appearance'
import { app, base, colors } from '../../design/style'

import { Separator } from '../../components/Separator'
import { ListEntry } from '../../components/ListEntry'

/* ////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////// */

export function Alarms() {
    const [alarmGreeting, setAlarmGreeting] = useState('')
    const [fetchedAlarms, setFetchedAlarms] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const isDarkMode = useColorScheme() === 'dark' ? true : false

    const theme = {
        backgroundColor: isDarkMode ? colors.black : colors.white,
        primaryText: isDarkMode ? colors.whiteOnDark : colors.black,
        unfocusedText: isDarkMode ? '#1c1c1e' : '#AEAEB2'
    }


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

    

    function determineAlarmStatusDay(datetime) {
        const formattedDatetime = moment(datetime)

        if (moment().format('a') === 'pm' && formattedDatetime.format('a') === 'am') {
            return 'tomorrow'
        }
    }

    function determineAlarmStatus(number) {
        if (number === 0) {
            return 'No alarms scheduled'
        } else if (number > 0) {
            return 'Next alarm ' + determineAlarmStatusDay(fetchedAlarms[0].datetime) + ' at ' + moment(fetchedAlarms[0].datetime).format('h:mm a')
        }
    }

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
        <SafeAreaView forceInset={{ 'top': 'never' }}>
            <Header
                optionArgs={true}
                optionFunction={setIsModalOpen}
                optionLabel="Add Alarm"
                title={alarmGreeting}
                subtitle={determineAlarmStatus(fetchedAlarms.length)} />

            <Modal
                animationType="slide"
                presentationStyle="pageSheet"
                visible={isModalOpen}>
                <AddAlarm fetchAlarms={fetchAlarms} setIsModalOpen={setIsModalOpen} />
            </Modal>

            <View style={[app.mainContent]}>
                <WeekOverview />

                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={fetchedAlarms}
                    ItemSeparatorComponent={() => <Separator />}
                    ListHeaderComponent={() => <Separator />}
                    renderItem={({ item }) => <ListEntry item={item} />} />
            </View>
        </SafeAreaView>
    )
}