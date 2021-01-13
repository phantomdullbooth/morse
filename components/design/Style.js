import { StyleSheet } from 'react-native'

const colors = {
    'black': '#000000',
    'grey': '#999999',
    'white': '#f4f4f4'
}

export const app = StyleSheet.create({
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
        backgroundColor: colors.black,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        width: 200,
    },
    headspaceButtonText: {
        color: colors.white,
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
    h3: {
        color: colors.grey,
        fontSize: 20,
        fontWeight: '600'
    },
    bulletName: {
        fontSize: 25,
        fontWeight: '800',
        lineHeight: 0,
        maxWidth: '55%'
    },
    window: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
    },
    navigationBar: {
        flex: 0.1,
        backgroundColor: colors.white,
        flexDirection: 'row',
        height: 75,
        zIndex: 10
    }
})