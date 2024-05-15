import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_PRODUCT_CARD_SIZE,
  STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  productCard: {
    height: STANDARD_PRODUCT_CARD_SIZE,
    borderRadius: STANDARD_BORDER_RADIUS,
    flexDirection: 'row',
    marginBottom: STANDARD_SPACING * 3,
  },
  productImageWrapper: {
    width: STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE,
    aspectRatio: 1,
    borderRadius: STANDARD_BORDER_RADIUS,
    marginStart: STANDARD_SPACING * 3,
    marginTop: STANDARD_SPACING * 3,
    padding: STANDARD_SPACING,
    position: 'relative',
  },
  productImage: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain',
  },
  productDetailsWrapper: {
    margin: STANDARD_SPACING * 3,
    flex: STANDARD_FLEX,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    marginBottom: STANDARD_SPACING,
  },
  productPriceAndRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    marginEnd: STANDARD_SPACING,
  },
  starAndRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_MEDIUM,
    marginStart: STANDARD_SPACING,
  },
  trashIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    right: 0,
    bottom: 0,
    position: 'absolute',
    borderTopLeftRadius: STANDARD_VECTOR_ICON_WRAPPER_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
