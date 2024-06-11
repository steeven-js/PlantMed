import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_SPACING,
  STANDARD_WALLET_TRANSACTION_DATE_SIZE,
} from '../../../config/Constants';
import {IndependentColors} from '../../../config/Colors';

// Creating & exporting stylesheet
export default StyleSheet.create({
  transactionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateTimeAndVendorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateWrapper: {
    width: STANDARD_WALLET_TRANSACTION_DATE_SIZE,
    height: STANDARD_WALLET_TRANSACTION_DATE_SIZE,
    borderRadius: STANDARD_SPACING,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: STANDARD_SPACING * 3,
  },
  date: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
    color: IndependentColors.white,
  },
  month: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XXS,
    color: IndependentColors.white,
  },
  vendor: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  time: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XXS,
  },
  transactionAmount: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
});
