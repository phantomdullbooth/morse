/* ////////////////////// IMPORTS ////////////////////// */
/* ////////////////////// IMPORTS ////////////////////// */

import React, { useState } from 'react'
import {
        Alert,
        Pressable,
        SafeAreaView,
        ScrollView,
        Text,
        View
    } from 'react-native'
import Moment from 'react-moment'
import 'moment-timezone'
import { app } from '../design/Style'

export function Alarms() {
    return (
        <SafeAreaView style={[app.window]} forceInset={{ 'top': 'never' }}>
            <View style={[app.headspace]}>
                <View style={[app.headspaceHeadline]}>
                    <Text style={[app.h1]}>Good {'\n'} Evening</Text>
                    <Text style={[app.h3]}>Next alarm tomorrow at 6:45 am.</Text>
                </View>

                <Pressable onPress={() => Alert.alert('Add Location pressed')} style={[app.headspaceButton]}>
                    <Text style={[app.headspaceButtonText]}>Add Alarm</Text>
                </Pressable>
            </View>

            <ScrollView style={[app.mainContent]}>
                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>Morning {'\n'}Meditation</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>6:45 am</Text>
                        <Text style={[app.spacetimeDate]}>Weekdays</Text>
                    </View>
                </View>

                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>Put clothes in the dryer</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>6:45 am</Text>
                        <Text style={[app.spacetimeDate]}>Weekdays</Text>
                    </View>
                </View>
                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>Check the mail</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>6:45 am</Text>
                        <Text style={[app.spacetimeDate]}>Thu., Fri.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}