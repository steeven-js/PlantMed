import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_XS,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../../config/Constants';
import {scale} from 'react-native-size-matters';

// Creating & exporting stylesheet
export default StyleSheet.create({
  outletWrapper: {
    marginHorizontal: STANDARD_SPACING * 1.5,
    width: scale(250),
  },
  outletImageWrapper: {
    width: scale(250),
    height: scale(150),
    borderRadius: STANDARD_BORDER_RADIUS,
    overflow: 'hidden',
    position: 'relative',
  },
  outletImage: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'cover',
  },
  outletDetailsWrapper: {
    padding: STANDARD_SPACING * 1.5,
    borderBottomLeftRadius: STANDARD_BORDER_RADIUS,
    borderBottomRightRadius: STANDARD_BORDER_RADIUS,
  },
  outletName: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  outletRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outletRatingStarsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: STANDARD_SPACING,
  },
  outletRating: {
    fontFamily: POPPINS_SEMIBOLD,
  },
  outletPriceRangeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  outletPriceRangeLabel: {
    fontFamily: POPPINS_REGULAR,
  },
  outletPriceRange: {
    fontFamily: POPPINS_SEMIBOLD,
  },
});
