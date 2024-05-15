import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../config/Constants';

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
  cvvNumberAndExpiryDateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cvvNumberWrapper: {
    width: SCREEN_WIDTH * 0.3,
  },
  expiryDateWrapper: {
    width: SCREEN_WIDTH * 0.5,
  },
});
