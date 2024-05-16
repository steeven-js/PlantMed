import { StyleSheet } from 'react-native';

import {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    STANDARD_FLEX,
    STANDARD_SPACING,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    mainWrapper: {
        flex: STANDARD_FLEX,
    },
    formWrapper: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        padding: STANDARD_SPACING * 6,
        borderTopLeftRadius: STANDARD_SPACING * 6,
        borderTopRightRadius: STANDARD_SPACING * 6,
        justifyContent: 'center',
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
    questionAndLinkWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
    },
    infoMessage: {
        fontSize: 12,
    },
});
