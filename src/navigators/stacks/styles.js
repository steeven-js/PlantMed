import { StyleSheet } from 'react-native';

import {
    FONT_SIZE_MD,
    POPPINS_SEMIBOLD,
    STANDARD_SPACING,
} from '../../config/Constants';

// Exporting style
export default StyleSheet.create({
    leftArrowIcon: {
        marginLeft: STANDARD_SPACING * 3,
    },
    rightIcon: {
        marginRight: STANDARD_SPACING * 3,
    },
    headerTitle: {
        fontFamily: POPPINS_SEMIBOLD,
        fontSize: FONT_SIZE_MD,
    },
});
