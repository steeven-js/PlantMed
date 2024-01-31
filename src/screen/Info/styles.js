import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/Colors';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    },
    container: {
        margin: 20,
    },
    verticalSpacer: {
        marginVertical: 10 * 1.5,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Dosis-Bold',
        textAlign: 'center',
        marginBottom: 10,
        color: COLORS.textHighContrast,
    },
    soustitre: {
        fontSize: 20,
        fontFamily: 'Dosis-Bold',
        textAlign: 'left',
        marginBottom: 10,
        color: COLORS.textHighContrast,
    },
    bold: {
        fontFamily: 'Dosis-Medium',
        color: COLORS.accent,
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Dosis-Medium',
        color: COLORS.textHighContrast,
        fontSize: 16,
    },
});

export default styles;