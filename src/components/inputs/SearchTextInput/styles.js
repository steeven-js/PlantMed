import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_XS,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_TEXT_INPUT_HEIGHT,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  textInputWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT,
    paddingHorizontal: STANDARD_SPACING * 3,
    borderWidth: STANDARD_BORDER_WIDTH,
    borderRadius: STANDARD_BORDER_RADIUS,
    position: 'relative',
    marginHorizontal: STANDARD_SPACING * 3,
  },
  textInput: {
    flex: STANDARD_FLEX,
    fontSize: FONT_SIZE_XS,
    fontFamily: POPPINS_REGULAR,
  },
  searchIconWrapper: {
    position: 'absolute',
    right: STANDARD_SPACING * 3,
    top: STANDARD_SPACING * 2.5,
  },
});
