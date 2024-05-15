import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  FONT_SIZE_XS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../config/Constants';
import {scale} from 'react-native-size-matters';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  flatListsWrapper: {
    flex: STANDARD_FLEX,
    flexDirection: 'row',
  },
  verticalFlatListWrapper: {
    width: SCREEN_WIDTH * 0.5,
    height: '100%',
    alignItems: 'center',
  },
  verticalFlatList: {
    width: '100%',
  },
  verticalFlatListContentContainerStyle: {
    alignItems: 'center',
    paddingVertical: STANDARD_SPACING * 1.5,
  },
  horizontalFlatListWrapper: {
    width: SCREEN_WIDTH * 0.5,
    height: '100%',
  },
  largeImageWrapper: {
    width: SCREEN_WIDTH * 0.5,
    height: '100%',
    padding: STANDARD_SPACING * 3,
  },
  largeImage: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
  thumbnailImageWrapper: {
    width: STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE,
    height: STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE,
    borderWidth: STANDARD_BORDER_WIDTH,
    borderRadius: STANDARD_BORDER_RADIUS * 3,
    padding: STANDARD_SPACING,
    marginVertical: STANDARD_SPACING * 1.5,
  },
  thumbnailImage: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
  productDetailsOuterWrapper: {
    flex: STANDARD_FLEX,
  },
  productDetailsScrollView: {
    marginTop: STANDARD_SPACING * 3,
    marginHorizontal: STANDARD_SPACING * 3,
  },
  productTitleAndHeartIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productTitleWrapper: {
    flex: STANDARD_FLEX,
    paddingEnd: STANDARD_SPACING * 3,
  },
  productTitle: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
  },
  heartIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.5,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_SM,
    marginHorizontal: STANDARD_SPACING,
  },
  outOf: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  ratingThreshold: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_SM,
    marginStart: STANDARD_SPACING,
  },
  totalRating: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  productPriceAndQuantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    marginVertical: STANDARD_SPACING * 3,
  },
  productPrice: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XL,
  },
  productQuantityWrapper: {
    borderWidth: STANDARD_BORDER_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: STANDARD_SPACING,
    borderRadius: STANDARD_BORDER_RADIUS * 10,
    width: scale(100),
  },
  plusIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.75,
    aspectRatio: 1,
    borderRadius: STANDARD_BORDER_RADIUS * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productQuantity: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  minusIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.75,
    aspectRatio: 1,
    borderRadius: STANDARD_BORDER_RADIUS * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantCareWrapper: {
    marginEnd: STANDARD_SPACING * 3,
  },
  plantCareTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    marginBottom: STANDARD_SPACING,
  },
  plantCareAmount: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
  description: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
});
