import {StyleSheet} from 'react-native';
import {
  STANDARD_BORDER_WIDTH,
  STANDARD_LETTER_SPACING,
  STANDARD_SPACING,
  STANDARD_NAVIGATION_LINK_LEFT_ICON_WRAPPER_SIZE,
  POPPINS_MEDIUM,
  FONT_SIZE_XS,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: STANDARD_SPACING * 2,
    borderBottomWidth: STANDARD_BORDER_WIDTH,
  },
  leftIconAndLinkLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconWrapper: {
    width: STANDARD_NAVIGATION_LINK_LEFT_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    borderRadius: STANDARD_NAVIGATION_LINK_LEFT_ICON_WRAPPER_SIZE * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkLabel: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    letterSpacing: STANDARD_LETTER_SPACING,
    marginStart: STANDARD_SPACING * 3,
  },
});
