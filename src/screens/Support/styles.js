// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {IndependentColors} from '../../config/Colors';
import {
  FONT_SIZE_LG,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_LETTER_SPACING,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../config/Constants';
import Shadow from '../../config/Shadow';

// Creating & exporting styles
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  header: {
    paddingHorizontal: STANDARD_SPACING * 3,
    paddingVertical: STANDARD_SPACING * 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  needHelpLabel: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_MD,
    marginBottom: STANDARD_SPACING * 2,
    letterSpacing: STANDARD_LETTER_SPACING,
    color: IndependentColors.white,
  },
  twentyFourSevenLabel: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_MD,
    color: IndependentColors.white,
  },
  screenHeadingTitle: {
    fontFamily: POPPINS_BOLD,
    fontSize: FONT_SIZE_LG,
    letterSpacing: STANDARD_LETTER_SPACING,
    color: IndependentColors.white,
  },
  supportContentWrapper: {
    flex: STANDARD_FLEX,
    overflow: 'hidden',
  },
  supportContentWrapperHeader: {
    alignItems: 'center',
    paddingVertical: STANDARD_SPACING * 5,
  },
  questionAndIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: STANDARD_SPACING,
    paddingHorizontal: STANDARD_SPACING * 4,
    paddingVertical: STANDARD_SPACING * 2,
    borderRadius: STANDARD_BORDER_RADIUS * 5,
  },
  question: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    marginEnd: STANDARD_SPACING,
    letterSpacing: STANDARD_LETTER_SPACING,
  },
  info: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
    letterSpacing: STANDARD_LETTER_SPACING,
    textAlign: 'center',
  },
  scrollViewWrapper: {
    flex: STANDARD_FLEX,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: STANDARD_SPACING * 3,
  },
  supportListItem: {
    padding: STANDARD_SPACING * 3,
    borderRadius: STANDARD_BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: STANDARD_SPACING * 3,
    ...Shadow(scale(3), '#5881571A', 0, scale(6), scale(0.5)),
  },
  supportIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 1.25,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: STANDARD_BORDER_RADIUS,
    marginEnd: STANDARD_SPACING * 3,
  },
  supportTypeTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    letterSpacing: STANDARD_LETTER_SPACING,
  },
  supportTypeTitleInfo: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
    letterSpacing: STANDARD_LETTER_SPACING,
  },
  mailId: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    letterSpacing: STANDARD_LETTER_SPACING,
  },
});
