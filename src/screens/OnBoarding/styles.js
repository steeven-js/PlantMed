import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_XS,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_ON_BOARDING_PAGINATION_DOT_HEIGHT,
  STANDARD_SPACING,
} from '../../config/Constants';

// Creating & exporting stylesheets
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
    position: 'relative',
  },
  flatlist: {
    flex: STANDARD_FLEX,
  },
  skipButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: STANDARD_SPACING * 3,
    right: STANDARD_SPACING * 3,
    borderWidth: STANDARD_BORDER_WIDTH,
    paddingVertical: STANDARD_SPACING,
    paddingHorizontal: STANDARD_SPACING * 2,
    borderRadius: STANDARD_BORDER_RADIUS,
  },
  skipLabel: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
  paginationIndicatorsWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: STANDARD_SPACING * 3,
    alignSelf: 'center',
  },
  paginationIndicator: {
    width: STANDARD_ON_BOARDING_PAGINATION_DOT_HEIGHT,
    height: STANDARD_ON_BOARDING_PAGINATION_DOT_HEIGHT,
    marginHorizontal: STANDARD_SPACING,
    borderRadius: STANDARD_BORDER_RADIUS,
  },
});
