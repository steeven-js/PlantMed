// Importing
import { StyleSheet } from 'react-native';
import {
    SCREEN_WIDTH,
    STANDARD_BORDER_RADIUS,
    STANDARD_FLEX,
    STANDARD_SPACING,
} from '../../config/Constants';

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
});
