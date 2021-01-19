// /////////////////////// IMPORTS /////////////////////// //
// /////////////////////// IMPORTS /////////////////////// //

import { Appearance, StyleSheet } from 'react-native'


// /////////////////////// APPEARANCE GUIDELINES /////////////////////// //
// /////////////////////// APPEARANCE GUIDELINES /////////////////////// //

const isDarkMode = Appearance.getColorScheme() === 'dark' ? true : false

const color = {
    black: '#060606',
    white: '#f4f4f4'
}

// /////////////////////// APP FUNDAMENTALS /////////////////////// //
// /////////////////////// APP FUNDAMENTALS /////////////////////// //

export const base = StyleSheet.create({
    window: {
        flex: 1,
        backgroundColor: isDarkMode ? color.black : color.white,
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
        width: '90%'
    },
    bullet: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingTop: 25,
        paddingBottom: 25,
        borderColor: '#e4e4e4'
    },
    bulletOption: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingTop: 25,
        paddingBottom: 25,
        borderColor: '#e4e4e4'
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
        fontWeight: '600',
        textAlign: 'right',
        fontSize: 35,
        lineHeight: 0,
        marginTop: -5
    },
    spacetimeDate: {
        fontSize: 15,
        fontWeight: '600',
        color: '#898989'
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
        backgroundColor: color.black,
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
        color: color.white,
        fontFamily: 'Circular Std Medium',
        fontSize: 18,
        lineHeight: 50,
    },
    h1: {
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