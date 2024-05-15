import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_LG,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_WALLET_BILL_AND_RECHARGE_ICON_SIZE,
  STANDARD_WALLET_CARD_HEIGHT,
  STANDARD_WALLET_TRANSACTION_DATE_SIZE,
} from '../../config/Constants';
import {scale} from 'react-native-size-matters';
import {IndependentColors} from '../../config/Colors';

// Creating & exporting stylesheet
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  scrollViewContentContainerStyle: {
    padding: STANDARD_SPACING * 3,
  },
  verticalSpacer: {
    marginVertical: STANDARD_SPACING * 1.5,
  },
  cardWrapper: {
    height: STANDARD_WALLET_CARD_HEIGHT,
    borderRadius: STANDARD_BORDER_RADIUS * 3,
    padding: STANDARD_SPACING * 3,
    position: 'relative',
    justifyContent: 'space-around',
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumber: {
    color: IndependentColors.white,
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    marginStart: STANDARD_SPACING * 3,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: scale(1), height: scale(1.5)},
    textShadowRadius: scale(1),
  },
  cardType: {
    color: IndependentColors.white,
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    marginStart: STANDARD_SPACING * 3,
  },
  cardBalance: {
    color: IndependentColors.white,
    fontFamily: POPPINS_SEMIBOLD,
    fontSize: FONT_SIZE_LG,
  },
  cardExpDate: {
    color: IndependentColors.white,
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XS,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: scale(1), height: scale(1.5)},
    textShadowRadius: scale(1),
  },
  cardHolderName: {
    color: IndependentColors.white,
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    position: 'absolute',
    right: STANDARD_SPACING * 3,
    bottom: STANDARD_SPACING * 3,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: scale(1), height: scale(1.5)},
    textShadowRadius: scale(1),
  },
  billsAndRechargesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  billsAndRechargesIconRotatedWrapper: {
    width: STANDARD_WALLET_BILL_AND_RECHARGE_ICON_SIZE,
    height: STANDARD_WALLET_BILL_AND_RECHARGE_ICON_SIZE,
    borderRadius: STANDARD_BORDER_RADIUS,
    transform: [
      {
        rotate: '45 deg',
      },
    ],
    marginHorizontal: STANDARD_SPACING * 3,
  },
  billsAndRechargesIconWrapper: {
    width: STANDARD_WALLET_BILL_AND_RECHARGE_ICON_SIZE,
    height: STANDARD_WALLET_BILL_AND_RECHARGE_ICON_SIZE,
    borderRadius: STANDARD_BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      {
        rotate: '-45 deg',
      },
    ],
  },
  billsAndRechargesIconImage: {
    width: STANDARD_WALLET_BILL_AND_RECHARGE_ICON_SIZE * 0.4,
    height: STANDARD_WALLET_BILL_AND_RECHARGE_ICON_SIZE * 0.4,
    tintColor: '#588157',
  },
  billsAndRechargesIconLabel: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_SIZE_XXS,
    marginTop: STANDARD_SPACING * 0.5,
  },
  sectionTitleAndLinkWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
