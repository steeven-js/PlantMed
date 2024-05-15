import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_PAYMENT_METHOD_CARD_HEIGHT,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  paymentMethodCard: {
    height: STANDARD_PAYMENT_METHOD_CARD_HEIGHT,
    borderRadius: STANDARD_BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: STANDARD_BORDER_WIDTH,
    marginBottom: STANDARD_SPACING * 3,
  },
  iconSvgAndLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSvgWrapper: {
    marginHorizontal: STANDARD_SPACING * 3,
  },
  label: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  checkedIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.65,
    aspectRatio: 1,
    borderRadius: STANDARD_BORDER_RADIUS * 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: STANDARD_SPACING * 3,
    borderWidth: STANDARD_BORDER_WIDTH,
  },
});
