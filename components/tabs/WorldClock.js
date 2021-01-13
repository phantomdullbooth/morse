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

export function WorldClock() {
    return (
        <SafeAreaView style={[app.window]} forceInset={{ 'top': 'never' }}>
            <View style={[app.headspace]}>
                <View style={[app.headspaceHeadline]}>
                    <Text style={[app.h1]}>World {"\n"}Clock</Text>
                    <Text style={[app.h3]}><Moment element={Text} interval={1000} format="dddd, MMMM DD, YYYY"></Moment></Text>
                </View>

                <Pressable onPress={() => Alert.alert('Add Location pressed')} style={[app.headspaceButton]}>
                    <Text style={[app.headspaceButtonText]}>Add Location</Text>
                </Pressable>
            </View>

            <ScrollView style={[app.mainContent]}>
                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>Russian Mission, {"\n"}Alaska</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>12:41 am</Text>
                        <Text style={[app.spacetimeDate]}>Today</Text>
                    </View>
                </View>

                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>San Francisco, {"\n"}California</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>1:41 am</Text>
                        <Text style={[app.spacetimeDate]}>Today</Text>
                    </View>
                </View>
                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>London, {"\n"}United Kingdom</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>10:41 am</Text>
                        <Text style={[app.spacetimeDate]}>Today</Text>
                    </View>
                </View>
                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>Russian Mission, {"\n"}Alaska</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>12:41 am</Text>
                        <Text style={[app.spacetimeDate]}>Today</Text>
                    </View>
                </View>
                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>Russian Mission, {"\n"}Alaska</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>12:41 am</Text>
                        <Text style={[app.spacetimeDate]}>Today</Text>
                    </View>
                </View>
                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>Russian Mission, {"\n"}Alaska</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>12:41 am</Text>
                        <Text style={[app.spacetimeDate]}>Today</Text>
                    </View>
                </View>
                <View style={[app.bullet]}>
                    <Text style={[app.bulletName]}>Russian Mission, {"\n"}Alaska</Text>

                    <View style={[app.spacetime]}>
                        <Text style={[app.spacetimeTime]}>12:41 am</Text>
                        <Text style={[app.spacetimeDate]}>Today</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}