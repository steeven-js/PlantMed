import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_LETTER_SPACING,
  STANDARD_NAVIGATION_LINK_LEFT_ICON_WRAPPER_SIZE,
  STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelWrapper: {
    flex: STANDARD_FLEX,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconWrapper: {
    width: STANDARD_NAVIGATION_LINK_LEFT_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    borderRadius: STANDARD_NAVIGATION_LINK_LEFT_ICON_WRAPPER_SIZE * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: STANDARD_SPACING * 3,
  },
  label: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    letterSpacing: STANDARD_LETTER_SPACING,
  },
  labelInfo: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
    letterSpacing: STANDARD_LETTER_SPACING,
  },
  switch: {
    transform: [{scaleX: scale(0.8)}, {scaleY: scale(0.8)}],
  },
});
