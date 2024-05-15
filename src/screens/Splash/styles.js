import {StyleSheet} from 'react-native';
import {
  STANDARD_FLEX,
  STANDARD_LOGO_HEIGHT,
  STANDARD_LOGO_WIDTH,
} from '../../config/Constants';

// Creating & storing stylesheet
export default StyleSheet.create({
  imageBackground: {
    flex: STANDARD_FLEX,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: STANDARD_LOGO_WIDTH,
    height: STANDARD_LOGO_HEIGHT,
  },
});
