import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const deviceWidth = responsiveWidth(100);
const deviceHeight = responsiveHeight(100);

export {deviceWidth, deviceHeight};

export const sizes = {
  deviceWidth,
  deviceHeight,
};
