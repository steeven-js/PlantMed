import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  POPPINS_MEDIUM,
  POPPINS_SEMIBOLD,
  STANDARD_BRAND_LOGO_WRAPPER_SIZE,
  STANDARD_COUPON_HEIGHT,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & storing stylesheet
export default StyleSheet.create({
  couponImageBackground: {
    justifyContent: 'flex-end',
    padding: STANDARD_SPACING * 3,
    height: STANDARD_COUPON_HEIGHT,
    position: 'relative',
  },
  offer: {
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_MEDIUM,
  },
  brand: {
    fontSize: FONT_SIZE_XS,
    fontFamily: POPPINS_SEMIBOLD,
    marginBottom: STANDARD_SPACING * 3,
    textTransform: 'uppercase',
  },
  brandLogoWrapper: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    width: STANDARD_BRAND_LOGO_WRAPPER_SIZE,
    aspectRatio: 1,
    marginTop: STANDARD_SPACING * 3,
  },
  brandLogo: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
});
