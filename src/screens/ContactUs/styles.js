import {StyleSheet} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_FLEX,
  STANDARD_SOCIAL_ICON_SIZE,
  STANDARD_SPACING,
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
    borderTopLeftRadius: STANDARD_SPACING * 6,
    borderTopRightRadius: STANDARD_SPACING * 6,
  },
  scrollViewContentContainerStyle: {
    padding: STANDARD_SPACING * 6,
    flexGrow: 1,
    justifyContent: 'center',
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  helpIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  helpIconWrapper: {
    width: STANDARD_SOCIAL_ICON_SIZE,
    aspectRatio: 1,
    padding: STANDARD_SPACING * 2,
    borderRadius: STANDARD_SOCIAL_ICON_SIZE * 0.5,
  },
  helpIconImage: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
});
