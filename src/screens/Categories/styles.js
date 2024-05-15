import {StyleSheet} from 'react-native';
import {STANDARD_FLEX, STANDARD_SPACING} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  flatListWrapper: {
    flex: STANDARD_FLEX,
  },
  flatListContentContainerStyle: {
    paddingTop: STANDARD_SPACING * 3,
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  screenHeaderWrapper: {
    paddingTop: STANDARD_SPACING * 3,
    paddingHorizontal: STANDARD_SPACING * 3,
  },
  screenTitleWrapper: {
    paddingHorizontal: STANDARD_SPACING * 3,
    paddingBottom: STANDARD_SPACING * 3,
  },
});
