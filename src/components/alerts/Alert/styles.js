import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_FLEX,
  STANDARD_LOTTIE_FILE_SIZE,
  STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
    alignItems: 'center',
    justifyContent: 'center',
    padding: STANDARD_SPACING * 3,
  },
  lottieFile: {
    width: STANDARD_LOTTIE_FILE_SIZE,
    height: STANDARD_LOTTIE_FILE_SIZE,
    marginBottom: STANDARD_SPACING * 3,
  },
  problemTitle: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_SM,
    marginBottom: STANDARD_SPACING,
  },
  problemInfo: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
    textAlign: 'center',
  },
});
