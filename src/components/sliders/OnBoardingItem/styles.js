import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_FLEX,
  STANDARD_ON_BOARDING_IMAGE_SIZE,
  STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheets
export default StyleSheet.create({
  mainWrapper: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: STANDARD_ON_BOARDING_IMAGE_SIZE,
    aspectRatio: 1,
    marginBottom: STANDARD_SPACING * 3,
  },
  image: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
  title: {
    alignSelf: 'flex-start',
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XL,
    marginHorizontal: STANDARD_SPACING * 3,
  },
  info: {
    alignSelf: 'flex-start',
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_SM,
    marginHorizontal: STANDARD_SPACING * 3,
  },
});
