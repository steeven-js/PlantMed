import { StyleSheet } from 'react-native';

import {
    FONT_SIZE_XS,
    POPPINS_SEMIBOLD,
    STANDARD_BORDER_RADIUS,
    STANDARD_BORDER_WIDTH,
    STANDARD_SPACING,
    STANDARD_TEXTAREA_HEIGHT,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    textareaLabel: {
        fontFamily: POPPINS_SEMIBOLD,
        fontSize: FONT_SIZE_XS,
        marginBottom: STANDARD_SPACING * 1.5,
    },
    textareaContainer: {
        height: STANDARD_TEXTAREA_HEIGHT,
        padding: STANDARD_SPACING * 3,
        borderWidth: STANDARD_BORDER_WIDTH,
        borderRadius: STANDARD_BORDER_RADIUS,
        textAlignVertical: 'top',
    },
});
