import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/Colors';
import {
    FONT_SIZE_MD,
    FONT_SIZE_LG,
    FONT_SIZE_XL,
    DOSIS_BOLD,
    DOSIS_MEDIUM
} from '../../config/Constants';

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
    title: {
        fontSize: FONT_SIZE_XL,
        fontFamily: 'Dosis-Bold',
        textAlign: 'left',
        color: COLORS.textHighContrast,
    },
    soustitre: {
        fontSize: FONT_SIZE_LG,
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
        fontSize: FONT_SIZE_MD,
    },
});

export default styles;