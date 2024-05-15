import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  POPPINS_MEDIUM,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
    padding: STANDARD_SPACING * 3,
  },
  cartTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartTotalLabel: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
  },
  cartTotal: {
    fontSize: FONT_SIZE_XL,
    fontFamily: POPPINS_MEDIUM,
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
});
