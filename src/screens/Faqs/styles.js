import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_XS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
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
  scrollView: {
    flex: STANDARD_FLEX,
  },
  accordionWrapper: {
    paddingBottom: STANDARD_SPACING * 2,
  },
  accordionHeader: {
    padding: STANDARD_SPACING * 2,
    flex: STANDARD_FLEX,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: STANDARD_BORDER_RADIUS,
  },
  question: {
    fontSize: FONT_SIZE_XS,
    fontFamily: POPPINS_MEDIUM,
  },
  accordionBody: {
    padding: STANDARD_SPACING * 2,
  },
  answer: {
    fontSize: FONT_SIZE_XS,
    fontFamily: POPPINS_REGULAR,
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
});
