import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_PRODUCT_CARD_SIZE,
  STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE,
  STANDARD_SPACING,
} from '../../../config/Constants';
import {scale} from 'react-native-size-matters';

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
  moreProductsCountWrapper: {
    width: scale(25),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: STANDARD_SPACING,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  moreProductsCount: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  orderDetailsWrapper: {
    margin: STANDARD_SPACING * 3,
    flex: STANDARD_FLEX,
    justifyContent: 'space-between',
  },
  productTitleStatusRatingAndDatesWrapper: {
    justifyContent: 'space-between',
  },
  productTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    marginBottom: STANDARD_SPACING,
  },
  productStatusAndRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusWrapper: {
    paddingHorizontal: STANDARD_SPACING * 2,
    paddingVertical: STANDARD_SPACING * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: STANDARD_SPACING,
    borderRadius: STANDARD_BORDER_RADIUS * 10,
  },
  status: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XXS,
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
  datesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateDivider: {
    marginHorizontal: STANDARD_SPACING,
  },
  date: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XXS,
  },
});
