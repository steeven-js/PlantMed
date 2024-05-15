import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_BORDER_RADIUS,
  STANDARD_DRAWER_WIDTH,
  STANDARD_DRAWER_HEADER_HEIGHT,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_SEMIBOLD,
  FONT_SIZE_MD,
} from '../../../config/Constants';
import {IndependentColors} from '../../../config/Colors';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  drawer: {
    width: STANDARD_DRAWER_WIDTH,
  },
  drawerHeaderImageBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    height: STANDARD_DRAWER_HEADER_HEIGHT,
  },
  logoWrapper: {
    marginHorizontal: STANDARD_SPACING * 2,
    padding: STANDARD_SPACING,
    borderRadius: STANDARD_BORDER_RADIUS * 5,
    width: scale(70),
    aspectRatio: 1,
  },
  logo: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
  brandName: {
    fontFamily: POPPINS_BOLD,
    fontSize: FONT_SIZE_SM,
    color: IndependentColors.white,
  },
  brandSlogan: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    color: IndependentColors.white,
  },
  drawerItem: {
    height: scale(45),
    justifyContent: 'center',
    borderRadius: scale(10),
  },
  drawerItemLabel: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  leftArrowIcon: {
    marginLeft: STANDARD_SPACING * 3,
  },
  headerTitle: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
  },
});
