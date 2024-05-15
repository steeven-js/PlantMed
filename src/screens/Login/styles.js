import {StyleSheet} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
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
  socialMediaIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  questionAndLinkWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
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
});
