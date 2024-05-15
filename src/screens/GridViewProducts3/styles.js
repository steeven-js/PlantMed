import {StyleSheet} from 'react-native';
import {STANDARD_FLEX, STANDARD_SPACING} from '../../config/Constants';

// Creating & stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  screenHeaderAndTitleComponentWrapper: {
    marginHorizontal: STANDARD_SPACING * 3,
    marginBottom: STANDARD_SPACING * 3,
  },
  spacerVertical: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  flatGridWrapper: {
    flex: STANDARD_FLEX,
  },
  flatGrid: {
    flex: STANDARD_FLEX,
  },
});
