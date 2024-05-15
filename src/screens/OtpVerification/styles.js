import {StyleSheet} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_OTP_TEXT_VIEW_BORDER_SIZE,
  STANDARD_OTP_TEXT_VIEW_SIZE,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  formWrapper: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.75,
    position: 'absolute',
    bottom: 0,
    padding: STANDARD_SPACING * 6,
    borderTopLeftRadius: STANDARD_SPACING * 6,
    borderTopRightRadius: STANDARD_SPACING * 6,
    justifyContent: 'center',
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  otpTextView: {
    borderRadius: STANDARD_BORDER_RADIUS * 2,
    borderBottomWidth: STANDARD_OTP_TEXT_VIEW_BORDER_SIZE,
    borderWidth: STANDARD_OTP_TEXT_VIEW_BORDER_SIZE,
    width: STANDARD_OTP_TEXT_VIEW_SIZE,
    aspectRatio: 1,
  },
  questionAndLinkWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});
