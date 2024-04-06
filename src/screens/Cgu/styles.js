import { StyleSheet } from 'react-native';

import {
    FONT_SIZE_SM,
    FONT_SIZE_XS,
    POPPINS_BOLD,
    POPPINS_REGULAR,
    STANDARD_FLEX,
    STANDARD_LETTER_SPACING,
    STANDARD_SPACING,
} from '../../config/Constants';

// Créez et exportez les styles
export default StyleSheet.create({
    mainWrapper: {
        flex: STANDARD_FLEX,
    },
    scrollViewContentContainerStyle: {
        padding: STANDARD_SPACING * 2,
    },
    lastUpdateDate: {
        fontFamily: POPPINS_BOLD,
        fontSize: FONT_SIZE_SM,
        letterSpacing: STANDARD_LETTER_SPACING,
    },
    policyTitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    policyTitle: {
        fontFamily: POPPINS_BOLD,
        fontSize: FONT_SIZE_XS,
        marginStart: STANDARD_SPACING * 2,
        marginVertical: STANDARD_SPACING * 2,
        textTransform: 'capitalize',
        letterSpacing: STANDARD_LETTER_SPACING,
    },
    policyDetails: {
        fontFamily: POPPINS_REGULAR,
        fontSize: FONT_SIZE_XS,
        letterSpacing: STANDARD_LETTER_SPACING,
        textAlign: 'justify',
    },
    // Text Output
    text: {},
    textgroup: {},
    paragraph: {
        marginTop: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: 'red',
        textAlign: 'justify',
    },
    hardbreak: {
        width: '100%',
        height: 1,
    },
    softbreak: {},

    // Believe these are never used but retained for completeness
    pre: {},
    inline: {},
    span: {},
});
