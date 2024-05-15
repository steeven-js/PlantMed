import {StyleSheet} from 'react-native';
import {IndependentColors} from '../../../config/Colors';
import {
  FONT_SIZE_XS,
  POPPINS_REGULAR,
  STANDARD_USER_AVATAR_WRAPPER_SIZE,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
  STANDARD_Z_INDEX,
  FONT_SIZE_XXS,
  POPPINS_SEMIBOLD,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  contactWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: STANDARD_SPACING * 3,
    paddingVertical: STANDARD_SPACING * 4,
  },
  leftContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarImageWrapper: {
    width: STANDARD_USER_AVATAR_WRAPPER_SIZE,
    aspectRatio: 1,
    borderRadius: STANDARD_USER_AVATAR_WRAPPER_SIZE * 0.5,
    overflow: 'hidden',
  },
  avatarImage: {
    flex: STANDARD_FLEX,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  avatarImageBadgeWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: STANDARD_USER_AVATAR_WRAPPER_SIZE * 0.5,
    aspectRatio: 1,
    borderRadius: STANDARD_USER_AVATAR_WRAPPER_SIZE * 0.5 * 0.5,
    right: -STANDARD_SPACING,
    top: -STANDARD_SPACING,
    zIndex: STANDARD_Z_INDEX,
    borderWidth: STANDARD_BORDER_WIDTH * 2,
  },
  avatarImageBadgeCharacter: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XXS,
    color: IndependentColors.white,
  },
  nameAndNumberWrapper: {
    paddingStart: STANDARD_SPACING * 3,
  },
  name: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  number: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
  actionIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    borderRadius: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
