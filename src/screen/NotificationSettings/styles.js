import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_MD,
  FONT_SIZE_XS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_LETTER_SPACING,
  STANDARD_SPACING,
} from '../../config/Constants';
import {IndependentColors} from '../../config/Colors';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  header: {
    paddingVertical: STANDARD_SPACING * 6,
    paddingHorizontal: STANDARD_SPACING * 3,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  pageTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    letterSpacing: STANDARD_LETTER_SPACING,
    color: IndependentColors.white,
  },
  pageTitleInfo: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
    letterSpacing: STANDARD_LETTER_SPACING,
    marginVertical: STANDARD_SPACING,
    color: IndependentColors.white,
  },
  menuItemsWrapper: {
    flex: STANDARD_FLEX,
    borderTopLeftRadius: STANDARD_BORDER_RADIUS * 6,
    borderTopRightRadius: STANDARD_BORDER_RADIUS * 6,
    padding: STANDARD_SPACING * 3,
  },
});
