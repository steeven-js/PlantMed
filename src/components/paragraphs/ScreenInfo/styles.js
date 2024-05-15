import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_XS,
  POPPINS_REGULAR,
  STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  info: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
    textTransform: 'capitalize',
  },
});
