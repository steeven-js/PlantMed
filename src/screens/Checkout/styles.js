import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_BUTTON_HEIGHT,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_TEXT_INPUT_HEIGHT,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  scrollViewContentContainerStyle: {
    padding: STANDARD_SPACING * 3,
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
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  textInputWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT,
    paddingHorizontal: STANDARD_SPACING * 3,
    borderWidth: STANDARD_BORDER_WIDTH,
    borderRadius: STANDARD_BORDER_RADIUS,
    position: 'relative',
  },
  textInput: {
    flex: STANDARD_FLEX,
  },
  applyCouponButton: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: STANDARD_SPACING * 3,
    height: STANDARD_BUTTON_HEIGHT - 2,
    borderRadius: STANDARD_BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyCouponButtonLabel: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
});
