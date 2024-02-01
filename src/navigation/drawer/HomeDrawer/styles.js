import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_BORDER_RADIUS,
  STANDARD_DRAWER_WIDTH,
  STANDARD_DRAWER_HEADER_HEIGHT,
  DOSIS_BOLD,
  DOSIS_MEDIUM,
  DOSIS_SEMIBOLD,
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
    borderRadius: STANDARD_BORDER_RADIUS * 20,
    width: 70,
    aspectRatio: 1,
    backgroundColor: IndependentColors.white,
    padding: STANDARD_SPACING * 2,
  },
  logo: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
  brandName: {
    fontFamily: DOSIS_BOLD,
    fontSize: FONT_SIZE_SM,
    color: IndependentColors.white,
  },
  brandSlogan: {
    fontFamily: DOSIS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    color: IndependentColors.white,
  },
  drawerItem: {
    height: 45,
    justifyContent: 'center',
    borderRadius: 10,
  },
  drawerItemLabel: {
    fontFamily: DOSIS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  leftArrowIcon: {
    marginLeft: STANDARD_SPACING * 3,
  },
  headerTitle: {
    fontFamily: DOSIS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
  },
});
