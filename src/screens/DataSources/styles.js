import { StyleSheet } from 'react-native';

import {
    FONT_SIZE_XS,
    FONT_SIZE_XXS,
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
        marginBottom: 20,
    },
    scrollViewContentContainerStyle: {
        padding: STANDARD_SPACING * 2,
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
    lastUpdateDate: {
        fontFamily: POPPINS_BOLD,
        fontSize: FONT_SIZE_XS,
        marginStart: STANDARD_SPACING * 2,
        marginVertical: STANDARD_SPACING * 2,
        textTransform: 'capitalize',
        letterSpacing: STANDARD_LETTER_SPACING,
    },
    sourcesTitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: POPPINS_BOLD,
        fontSize: FONT_SIZE_XS,
        marginStart: STANDARD_SPACING * 2,
        marginVertical: STANDARD_SPACING * 2,
        letterSpacing: STANDARD_LETTER_SPACING,
    },
    source: {
        fontFamily: POPPINS_REGULAR,
        fontSize: FONT_SIZE_XS,
        letterSpacing: STANDARD_LETTER_SPACING,
    },
    url: {
        fontFamily: POPPINS_REGULAR,
        fontSize: FONT_SIZE_XXS,
        letterSpacing: STANDARD_LETTER_SPACING,
        textDecorationLine: 'underline',
    },
});
