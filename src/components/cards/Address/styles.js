import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XXS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_LANGUAGE_FLAG_SIZE,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  addressCard: {
    borderRadius: STANDARD_BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: STANDARD_BORDER_WIDTH,
    paddingVertical: STANDARD_SPACING * 3,
  },
  avatarImageAndAddressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: STANDARD_FLEX,
  },
  avatarImage: {
    width: STANDARD_LANGUAGE_FLAG_SIZE,
    height: STANDARD_LANGUAGE_FLAG_SIZE,
    marginHorizontal: STANDARD_SPACING * 3,
  },
  titleAndAddressWrapper: {
    flex: STANDARD_FLEX,
    marginEnd: STANDARD_SPACING * 3,
  },
  addressTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
  },
  address: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XXS,
    marginTop: STANDARD_SPACING,
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
