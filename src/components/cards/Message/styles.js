import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  messageCard: {
    flexDirection: 'row',
  },
  avatarSvgWrapper: {
    marginEnd: STANDARD_SPACING * 3,
  },
  messageWrapper: {
    flex: STANDARD_FLEX,
  },
  senderNameAndAgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: STANDARD_SPACING,
  },
  senderName: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_SM,
  },
  messageAge: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XXS,
  },
  message: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
});
