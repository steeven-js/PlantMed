import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
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
  to: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  invoiceIssueDetailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoAndPayModeWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: scale(90),
    height: scale(110),
  },
  issuedAndDueOnLabel: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  issuedAndDueDate: {
    fontFamily: POPPINS_BOLD,
    fontSize: FONT_SIZE_XS,
  },
  payModeLabel: {
    fontFamily: POPPINS_BOLD,
    fontSize: FONT_SIZE_XS,
    marginVertical: STANDARD_SPACING,
  },
  payMode: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  dueOnWrapper: {
    alignItems: 'flex-end',
  },
  orderedProductWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderedProductImageAndDetailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: STANDARD_FLEX,
  },
  orderedProductDetailsWrapper: {
    flex: STANDARD_FLEX,
  },
  orderedProductImageWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    height: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    borderRadius: STANDARD_BORDER_RADIUS,
    marginEnd: STANDARD_SPACING * 3,
  },
  productImage: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
  orderedProductTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  orderedProductQty: {
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
});
