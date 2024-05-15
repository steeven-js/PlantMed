import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
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
  scrollViewContentContainerStyle: {
    padding: STANDARD_SPACING * 3,
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  productCard: {
    flexDirection: 'row',
  },
  productImageWrapper: {
    width: STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE * 1.5,
    aspectRatio: 1,
    borderRadius: STANDARD_BORDER_RADIUS,
    marginEnd: STANDARD_SPACING * 3,
    padding: STANDARD_SPACING * 2,
    position: 'relative',
  },
  productImage: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain',
  },
  moreProductsCountWrapper: {
    width: scale(35),
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
    fontSize: FONT_SIZE_SM,
  },
  orderDetailsWrapper: {
    flex: STANDARD_FLEX,
    justifyContent: 'space-evenly',
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
  linkWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkIconAndLabelsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: STANDARD_FLEX,
  },
  linkLabelsWrapper: {
    flex: STANDARD_FLEX,
  },
  linkIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: STANDARD_BORDER_RADIUS,
    marginEnd: STANDARD_SPACING * 3,
  },
  linkLabel: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  linkSubLabel: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XXS,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowLabel: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  rowAmount: {
    fontFamily: POPPINS_BOLD,
    fontSize: FONT_SIZE_SM,
  },
  orderStatusWrapper: {
    minHeight: scale(350),
  },
  orderStatusStepsWrapper: {
    flex: STANDARD_FLEX,
  },
  orderStatusStepsVerticalLine: {
    width: scale(2),
    height: '100%',
    position: 'absolute',
    marginLeft: scale(16.5),
  },
  orderStatusStepsVerticalLineProgressBar: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
  },
  orderStatusStepsVerticalWrapper: {
    justifyContent: 'space-between',
    height: '100%',
  },
  orderStatusStepWrapper: {
    width: scale(200),
    height: scale(35),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  orderStatusStepNumberWrapper: {
    height: scale(35),
    width: scale(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: STANDARD_BORDER_RADIUS * 4,
  },
  orderStatusStepNumber: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
  orderStatusStepLabelWrapper: {
    flex: STANDARD_FLEX,
    marginStart: STANDARD_SPACING * 1.5,
  },
  orderStatusStepLabel: {
    fontSize: FONT_SIZE_XS,
  },
  dateTime: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
});
