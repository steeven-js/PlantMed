import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/Colors';
import { FONT_SIZE_MD, FONT_SIZE_LG, FONT_SIZE_XL } from '../../config/Constants';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.accent,
        padding: 10,
    },
    textTopNavBar: {
        fontSize: FONT_SIZE_XL,
        color: COLORS.white,
        fontFamily: 'Dosis-Regular',
    },
    icon: {
        padding: 10,
        width: 30,
        height: 30,
    },
});