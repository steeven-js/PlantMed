import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
  STANDARD_Z_INDEX,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  scrollViewContentContainerStyle: {
    padding: STANDARD_SPACING * 3,
  },
  productDetailsWrapper: {
    alignItems: 'center',
  },
  productImageWrapper: {
    width: STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE * 2,
    aspectRatio: 1,
    position: 'relative',
    marginBottom: STANDARD_SPACING * 6,
  },
  productImageCircledBackground: {
    position: 'absolute',
    width: STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE * 1.75,
    left: STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE * 0.125,
    top: STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE * 0.4,
    aspectRatio: 1,
    borderRadius: (STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE * 1.75) / 2,
    zIndex: -STANDARD_Z_INDEX,
    borderWidth: STANDARD_BORDER_WIDTH,
  },
  productImage: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
  productTitle: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_SM,
  },
  productSubTitle: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
  ratingCountWrapper: {
    paddingHorizontal: STANDARD_SPACING * 2,
    paddingVertical: STANDARD_SPACING * 2,
    borderWidth: STANDARD_BORDER_WIDTH,
    borderRadius: STANDARD_BORDER_RADIUS,
    marginVertical: STANDARD_SPACING * 3,
  },
  ratingCount: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_MD,
    marginEnd: STANDARD_SPACING,
  },
  ratingStarsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  giveRatingAndReviewLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: STANDARD_SPACING * 5,
    paddingVertical: STANDARD_SPACING * 3,
    borderTopWidth: STANDARD_BORDER_WIDTH,
    borderBottomWidth: STANDARD_BORDER_WIDTH,
  },
  giveRatingAndReviewLinkTitle: {
    marginLeft: STANDARD_SPACING * 1.5,
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  buyersReviewsTitle: {
    marginBottom: STANDARD_SPACING * 5,
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_SM,
  },
  scrollViewWrapper: {
    flex: STANDARD_FLEX,
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  modal: {
    margin: STANDARD_SPACING * 3,
  },
  modalBody: {
    position: 'relative',
    borderRadius: STANDARD_BORDER_RADIUS * 3,
    padding: STANDARD_SPACING * 3,
    paddingVertical: STANDARD_SPACING * 9,
  },
  modalSubmitButtonWrapper: {
    marginTop: STANDARD_SPACING * 3,
  },
  modalCloseIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    right: STANDARD_SPACING * 2,
    top: STANDARD_SPACING * 2,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.5,
  },
  textAreaComponentWrapper: {
    marginBottom: STANDARD_SPACING * 3,
  },
});
