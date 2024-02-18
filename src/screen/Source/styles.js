// Importing
import { StyleSheet } from 'react-native';
import {
    DOSIS_MEDIUM,
    DOSIS_REGULAR,
    FONT_SIZE_SM,
    FONT_SIZE_XS,
    SCREEN_WIDTH,
    STANDARD_BORDER_RADIUS,
    STANDARD_FLEX,
    STANDARD_SPACING,
    STANDARD_LETTER_SPACING,
    STANDARD_VECTOR_ICON_WRAPPER_SIZE
} from '../../config/Constants';
import Shadow from '../../config/Shadow';

// Exporting
export default StyleSheet.create({
    mainWrapper: {
        flex: STANDARD_FLEX,
        padding: STANDARD_SPACING * 3,
    },
    scrollViewContentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigationLinksWrapper: {
        width: SCREEN_WIDTH - 30,
        borderRadius: STANDARD_BORDER_RADIUS,
    },
    supportListItem: {
        padding: STANDARD_SPACING * 3,
        borderRadius: STANDARD_BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        ...Shadow(3, '#5881571A', 0, 6, 0.5),
    },
    supportIconWrapper: {
        width: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 1.25,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: STANDARD_BORDER_RADIUS,
        marginEnd: STANDARD_SPACING * 3,
    },
    supportTypeTitle: {
        fontFamily: DOSIS_MEDIUM,
        fontSize: FONT_SIZE_SM,
        letterSpacing: STANDARD_LETTER_SPACING,
    },
    supportTypeTitleInfo: {
        fontFamily: DOSIS_REGULAR,
        fontSize: FONT_SIZE_XS,
        letterSpacing: STANDARD_LETTER_SPACING,
    },
});
