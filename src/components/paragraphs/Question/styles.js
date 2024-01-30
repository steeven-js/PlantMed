import { StyleSheet } from 'react-native';
import {
    FONT_SIZE_SM,
    DOSIS_REGULAR,
    STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    question: {
        fontFamily: DOSIS_REGULAR,
        fontSize: FONT_SIZE_SM,
        marginEnd: STANDARD_SPACING,
    },
});
