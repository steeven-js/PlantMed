import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        // backgroundColor: '#f1e3c6',
        borderRadius: 10,
        // borderColor: 'lightblue',
        // borderWidth: 3,
        margin: 20,
    },
    verticalSpacer: {
        marginVertical: 10 * 1.5,
    },
    content: {
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Dosis-Bold',
        textAlign: 'left',
        color: '#283828',
    },
    soustitre: {
        fontSize: 20,
        fontFamily: 'Dosis-Bold',
        textAlign: 'left',
        marginBottom: 10,
        color: '#283828',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Dosis-Medium',
        color: '#283828',
        fontSize: 16,
        marginBottom: 10,
    },
});

export default styles;