import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_XS,
  POPPINS_SEMIBOLD,
  STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  label: {
    alignSelf: 'flex-end',
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
});
