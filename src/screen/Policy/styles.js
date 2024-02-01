// Importing
import { StyleSheet } from 'react-native';
import {
    FONT_SIZE_SM,
    FONT_SIZE_XS,
    DOSIS_BOLD,
    DOSIS_REGULAR,
    STANDARD_FLEX,
    STANDARD_LETTER_SPACING,
    STANDARD_SPACING,
} from '../../config/Constants';

// Creating & exporting styles
export default StyleSheet.create({
    mainWrapper: {
        flex: STANDARD_FLEX,
    },
    scrollViewContentContainerStyle: {
        padding: STANDARD_SPACING * 2,
    },
    lastUpdateDate: {
        fontFamily: DOSIS_BOLD,
        fontSize: FONT_SIZE_SM,
        letterSpacing: STANDARD_LETTER_SPACING,
    },
    policyTitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    policyTitle: {
        fontFamily: DOSIS_BOLD,
        fontSize: FONT_SIZE_XS,
        marginStart: STANDARD_SPACING * 2,
        marginVertical: STANDARD_SPACING * 2,
        textTransform: 'capitalize',
        letterSpacing: STANDARD_LETTER_SPACING,
    },
    policyDetails: {
        fontFamily: DOSIS_REGULAR,
        fontSize: FONT_SIZE_XS,
        letterSpacing: STANDARD_LETTER_SPACING,
    },
});
