import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/Colors';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    },
    container: {
        borderRadius: 10,
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
        color: COLORS.textHighContrast,
    },
    soustitre: {
        fontSize: 20,
        fontFamily: 'Dosis-Bold',
        textAlign: 'left',
        marginBottom: 10,
        color: COLORS.textHighContrast,
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
        marginBottom: 10,
    },
});

export default styles;