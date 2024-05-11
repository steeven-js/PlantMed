import { StyleSheet } from 'react-native';

import {
    FONT_SIZE_SM,
    POPPINS_BOLD,
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
    lastUpdateDate: {
        fontFamily: POPPINS_BOLD,
        fontSize: FONT_SIZE_SM,
        letterSpacing: STANDARD_LETTER_SPACING,
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
});
