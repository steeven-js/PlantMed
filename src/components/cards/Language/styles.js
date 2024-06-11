import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_LANGUAGE_CARD_HEIGHT,
  STANDARD_LANGUAGE_FLAG_SIZE,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  languageCard: {
    height: STANDARD_LANGUAGE_CARD_HEIGHT,
    borderRadius: STANDARD_BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: STANDARD_BORDER_WIDTH,
  },
  flagImageAndLanguageTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImage: {
    width: STANDARD_LANGUAGE_FLAG_SIZE,
    height: STANDARD_LANGUAGE_FLAG_SIZE,
    marginHorizontal: STANDARD_SPACING * 3,
  },
  languageTitle: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  checkedIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.65,
    aspectRatio: 1,
    borderRadius: STANDARD_BORDER_RADIUS * 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: STANDARD_SPACING * 3,
    borderWidth: STANDARD_BORDER_WIDTH,
  },
});
