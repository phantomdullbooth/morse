// /////////////////////// IMPORTS /////////////////////// //
// /////////////////////// IMPORTS /////////////////////// //

import React from 'react'
import { StyleSheet } from 'react-native'
import { Appearance } from 'react-native-appearance'

// /////////////////////// APPEARANCE GUIDELINES /////////////////////// //
// /////////////////////// APPEARANCE GUIDELINES /////////////////////// //

export const colors = {
    black: '#060606',
    blackOnDark: '#0a0a0a',
    red: '#ff0000',
    white: '#f2f2f7',
    whiteOnDark: '#cccccc',
    whiteOnLight: '#eaeaea',
}














// /////////////////////// APPEARANCE GUIDELINES /////////////////////// //
// /////////////////////// APPEARANCE GUIDELINES /////////////////////// //

const isDarkMode = Appearance.getColorScheme() === 'dark' ? true : false

const color = {
    black: '#060606',
    white: '#f4f4f4',
    whiteOnDark: '#cccccc',
    darkGrey: '#1C1C1E'
}

// /////////////////////// APP FUNDAMENTALS /////////////////////// //
// /////////////////////// APP FUNDAMENTALS /////////////////////// //

export const base = StyleSheet.create({
    entry: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingBottom: 25,
    },
    entryTime: {
        fontWeight: '600',
        textAlign: 'right',
        fontSize: 35,
        lineHeight: 0,
        marginTop: -5
    },
    entryTitle: {
        fontSize: 25,
        fontWeight: '800',
        lineHeight: 0,
        maxWidth: '55%'
    },
    entrySubtitle: {
        fontSize: 15,
        fontWeight: '600'
    },
    navBar: {
        flex: 0.1,
        flexDirection: 'row',
        height: 75,
        justifyContent: 'space-evenly',
        borderTopWidth: 1
    },
    navButton: {
        alignItems: 'center',
        borderRadius: 5,
        height: '80%',
        justifyContent: 'center',
        width: '45%',
    },
    navButtonLabel: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    navButtonTitle: {
        alignItems: 'center',
        fontWeight: '600',
        fontSize: 15
    },
    window: {
        flex: 1,
        alignItems: 'center'
    }
})





export const app = StyleSheet.create({
    header: {
        alignItems: 'center',
        display: 'flex',
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    // divider: {
    //     backgroundColor: '#e4e4e4',
    //     borderRadius: 50,
    //     width: '100%',
    //     height: 1,
    //     marginBottom: 20,
    // },
    mainContent: {
        flex: 1,
    },
    bullet: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingBottom: 25,
    },
    bulletOption: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingBottom: 25,
    },
    headspace: {
        // backgroundColor: '#0044ff',
        flex: 0.8,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    spacetime: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    spacetimeTime: {
        color: isDarkMode ? color.whiteOnDark : color.black,
        fontWeight: '600',
        textAlign: 'right',
        fontSize: 35,
        lineHeight: 0,
        marginTop: -5
    },
    headspaceButton: {
        alignItems: 'center',
        backgroundColor: color.black,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        width: 200,
    },
    headspaceButtonText: {
        color: color.white,
        fontFamily: 'Circular Std Medium',
        fontSize: 18,
        lineHeight: 50,
    },
    headspaceHeadline: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    headlineGroup: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    h1: {
        fontFamily: 'Circular Std Black',
        fontSize: 55,
        fontWeight: '800',
        letterSpacing: -2,
        lineHeight: 55,
        marginBottom: 15,
        paddingTop: 20,
        textAlign: 'center',
        width: '80%',
    },
    bulletName: {
        color: isDarkMode ? color.whiteOnDark : color.black,
        fontSize: 25,
        fontWeight: '800',
        lineHeight: 0,
        maxWidth: '55%'
    },
    window: {
        backgroundColor: color.white,
        flex: 1,
        alignItems: 'center',
    },
    // modalView: {
    //     margin: 20,
    //     backgroundColor: "white",
    //     borderRadius: 20,
    //     padding: 35,
    //     alignItems: "center",
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //     elevation: 5
    // },


    group: {
        flexDirection: 'column',
        marginBottom: 20
    },

    headspaceTitle: {
        maxWidth: '80%'
    },


    outlook: {
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 55,
        width: '90%'
    }
})

export const nav = StyleSheet.create({
    bar: {
        flex: 0.1,
        flexDirection: 'row',
        height: 75,
        justifyContent: 'space-evenly',
    },
    button: {
        alignItems: 'center',
        borderRadius: 5,
        height: '85%',
        justifyContent: 'center',
        width: '45%',
    },
    buttonTitle: {
        fontWeight: '600',
        fontSize: 15
    }
})

export const buttonType = StyleSheet.create({
    accept: {
        backgroundColor: '#234BB8'
    },
    lengthLong: {
        alignItems: 'center',
        backgroundColor: isDarkMode ? color.darkGrey : color.black,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        width: 200,
    },
    lengthShort: {
        alignItems: 'center',
        backgroundColor: color.black,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        width: 50,
    }
})


export const text = StyleSheet.create({
    buttonDark: {
        color: isDarkMode ? color.whiteOnDark : color.white,
        fontFamily: 'Circular Std Medium',
        fontSize: 18,
        lineHeight: 50,
    },
    h1: {
        color: isDarkMode ? color.whiteOnDark : color.black,
        fontFamily: 'Circular Std Black',
        fontSize: 55,
        fontWeight: '800',
        letterSpacing: -2,
        lineHeight: 55,
        marginBottom: 15,
        maxWidth: '80%',
        paddingTop: 20,
        textAlign: 'center',
    },
    h4: {
        color: '#0044ff',
        fontSize: 20,
        fontWeight: '600'
    },
    standby: {
        color: '#0044ff'
    }
})


export const shape = StyleSheet.create({
    long: {
        backgroundColor: color.black,
        borderRadius: 50,
        height: 5,
        width: 20,
    }
})