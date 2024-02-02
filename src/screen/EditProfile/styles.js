import {StyleSheet} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  avatarWrapper: {
    position: 'relative',
    alignSelf: 'center',
  },
  cameraIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    position: 'absolute',
    top: -STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.5,
    right: -STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.5,
    borderRadius: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
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
});
