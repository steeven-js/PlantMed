import {StyleSheet} from 'react-native';
import {IndependentColors} from '../../../config/Colors';
import {FONT_SIZE_XXS, POPPINS_SEMIBOLD} from '../../../config/Constants';

// Exporting style
export default StyleSheet.create({
  tabBarBadgeStyle: {
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_XXS,
    color: IndependentColors.white,
  },
});
