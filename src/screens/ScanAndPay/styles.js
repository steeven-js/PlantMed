import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_XS,
  POPPINS_REGULAR,
  STANDARD_FLEX,
  STANDARD_LOTTIE_FILE_SIZE,
  STANDARD_SPACING,
} from '../../config/Constants';

// Creating & exporting stylesheets
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
    padding: STANDARD_SPACING * 3,
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  scannerWrapper: {
    flex: STANDARD_FLEX,
    justifyContent: 'center',
  },
  lottieFile: {
    width: STANDARD_LOTTIE_FILE_SIZE * 1.5,
    height: STANDARD_LOTTIE_FILE_SIZE * 1.5,
    alignSelf: 'center',
  },
  scanInfo: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
    textAlign: 'center',
  },
});
