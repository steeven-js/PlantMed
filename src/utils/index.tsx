import {Alert, Platform} from 'react-native';
import {handleTextChange} from '../utils/handleTextChange';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {responsiveWidth as rw} from 'react-native-responsive-dimensions';
import {responsiveHeight as rh} from 'react-native-responsive-dimensions';

import {deviceWidth, deviceHeight} from '../constants/sizes';

const responsiveWidth = (number: number, full = false) => {
  // IF FULL IS TRUE THEN USE RESPONSIVE WIDTH //
  if (full) {
    return rw((number / 375) * 100);
  }

  // IF DEVICE WIDTH IS LESS THAN 375 THEN USE RESPONSIVE WIDTH //
  return deviceWidth < 375 ? rw((number / 375) * 100) : number;
};

const responsiveHeight = (number: number, full = false) => {
  // IF FULL IS TRUE THEN USE RESPONSIVE HEIGHT //
  if (full) {
    return rh((number / 812) * 100);
  }

  // IF DEVICE HEIGHT IS LESS THAN 812 THEN USE RESPONSIVE HEIGHT //
  return deviceHeight < 812 ? rh((number / 812) * 100) : number;
};

const rsHeight = (number: number, full = false) => {
  // IF FULL IS TRUE THEN USE RESPONSIVE HEIGHT //
  if (full) {
    return rh((number / 812) * 100);
  }

  // IF DEVICE HEIGHT IS LESS THAN 812 THEN USE RESPONSIVE HEIGHT //
  return deviceHeight < 812 ? rh((number / 812) * 100) : number;
};
const homeIndicatorHeight = () => {
  const insets = useSafeAreaInsets();
  const {bottom} = insets;
  return bottom;
};

const statusBarHeight = () => {
  const insets = useSafeAreaInsets();
  const {top} = insets;
  return top;
};

const homeIndicatorSettings = () => {
  if (homeIndicatorHeight() !== 0) {
    return Platform.OS === 'android'
      ? 10 + homeIndicatorHeight()
      : 5 + homeIndicatorHeight() / 2;
  }
  if (homeIndicatorHeight() === 0) {
    return 20 + homeIndicatorHeight();
  }
};

export const utils = {
  rsHeight,
  responsiveWidth,
  statusBarHeight,
  handleTextChange,
  responsiveHeight,
  homeIndicatorHeight,
  homeIndicatorSettings,
};
