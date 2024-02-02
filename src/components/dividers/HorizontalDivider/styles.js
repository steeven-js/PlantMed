import {StyleSheet} from 'react-native';
import {
  STANDARD_DIVIDER_LINE_HEIGHT,
  STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  dividerLine: {
    height: STANDARD_DIVIDER_LINE_HEIGHT,
    marginTop: STANDARD_SPACING * 1.5,
    marginBottom: STANDARD_SPACING * 3,
  },
});
