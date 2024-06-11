import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_USER_AVATAR_WRAPPER_SIZE,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  notificationCard: {
    flexDirection: 'row',
  },
  avatarImageWrapper: {
    width: STANDARD_USER_AVATAR_WRAPPER_SIZE,
    height: STANDARD_USER_AVATAR_WRAPPER_SIZE,
    borderRadius: STANDARD_BORDER_RADIUS,
    marginEnd: STANDARD_SPACING * 3,
    padding: STANDARD_SPACING * 1.5,
  },
  avatarImage: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
  notificationMessageWrapper: {
    flex: STANDARD_FLEX,
  },
  notificationTitleAndAgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: STANDARD_SPACING,
  },
  notificationTitle: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  notificationAge: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XXS,
  },
  notificationMessage: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
});
