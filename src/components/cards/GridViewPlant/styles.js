import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  FONT_SIZE_SM,
  POPPINS_MEDIUM,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../../config/Constants';

// Creating & stylesheet
export default StyleSheet.create({
  plantCard: {
    borderRadius: STANDARD_BORDER_RADIUS,
    minHeight: scale(195),
    justifyContent: 'flex-end',
    marginTop: scale(50),
    position: 'relative',
  },
  rotatedBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    minHeight: scale(195),
    borderWidth: STANDARD_BORDER_WIDTH,
    borderRadius: STANDARD_BORDER_RADIUS,
    transform: [
      {
        rotate: '7.5deg',
      },
    ],
  },
  plantImage: {
    width: scale(150),
    height: scale(150),
    resizeMode: 'cover',
    alignSelf: 'center',
    position: 'absolute',
    top: -scale(55),
  },
  plantTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    bottom: STANDARD_SPACING * 9,
    marginHorizontal: STANDARD_SPACING * 3,
  },
  plantPriceAndRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: STANDARD_SPACING * 9,
    marginHorizontal: STANDARD_SPACING * 3,
  },
  plantPrice: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    marginEnd: STANDARD_SPACING,
  },
  starAndRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bagIconWrapper: {
    width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    right: 0,
    bottom: 0,
    position: 'absolute',
    borderTopLeftRadius: STANDARD_VECTOR_ICON_WRAPPER_SIZE / 2,
    borderBottomRightRadius: STANDARD_BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
