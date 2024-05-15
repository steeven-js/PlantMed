import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_MD,
  FONT_SIZE_XS,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  contentWrapper: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.75,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: STANDARD_SPACING * 6,
    borderTopRightRadius: STANDARD_SPACING * 6,
    justifyContent: 'center',
  },
  scrollViewContentContainerStyle: {
    padding: STANDARD_SPACING * 3,
    flexGrow: 1,
    justifyContent: 'center',
  },
  profileInfoWrapper: {
    alignItems: 'center',
  },
  profileName: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
  },
  profileEmail: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 2,
  },
});
