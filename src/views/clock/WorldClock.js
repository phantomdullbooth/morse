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
import { app } from '../../style'


import { Header } from '../../components/Header'

export function WorldClock() {
    return (
        <SafeAreaView forceInset={{ 'top': 'never' }}>
            <Header
                optionArgs={true}
                optionLabel="Add Location"
                title="World Clock"
                subtitle="No locations selected" />

            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    )
}