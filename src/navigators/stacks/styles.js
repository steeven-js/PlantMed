import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_MD,
  STANDARD_SPACING,
  POPPINS_SEMIBOLD,
} from '../../config/Constants';

// Exporting style
export default StyleSheet.create({
  leftArrowIcon: {
    marginLeft: STANDARD_SPACING * 3,
  },
  headerTitle: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
  },
});
