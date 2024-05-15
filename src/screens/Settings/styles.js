import {StyleSheet} from 'react-native';
import {STANDARD_FLEX, STANDARD_SPACING} from '../../config/Constants';

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
});
