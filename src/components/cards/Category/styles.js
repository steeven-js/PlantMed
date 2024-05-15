import {StyleSheet} from 'react-native';
import {IndependentColors} from '../../../config/Colors';
import {
  FONT_SIZE_XS,
  POPPINS_MEDIUM,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
  categoryImageWrapper: {
    height: SCREEN_WIDTH * 0.45,
    borderRadius: STANDARD_BORDER_RADIUS,
    overflow: 'hidden',
    marginBottom: STANDARD_SPACING * 3,
    marginHorizontal: STANDARD_SPACING * 3,
    position: 'relative',
  },
  categoryImage: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'cover',
  },
  categoryImageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  categoryNameWrapper: {
    backgroundColor: 'rgba(0,0,0,.15)',
    position: 'absolute',
    bottom: STANDARD_SPACING * 3,
    start: STANDARD_SPACING * 3,
    padding: STANDARD_SPACING * 2,
    borderRadius: STANDARD_BORDER_RADIUS,
  },
  categoryName: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    color: IndependentColors.white,
  },
});
