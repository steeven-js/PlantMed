import { StyleSheet } from 'react-native';
import {
    FONT_SIZE_MD,
    STANDARD_SPACING,
    DOSIS_BOLD,
} from '../../config/Constants';

// Exporting style
export default StyleSheet.create({
    leftArrowIcon: {
        marginLeft: STANDARD_SPACING * 3,
    },
    headerTitle: {
        fontFamily: DOSIS_BOLD,
        fontSize: FONT_SIZE_MD,
    },
});
