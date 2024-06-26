import {Platform} from 'react-native';

const subscriptionSkus = Platform.select({
  ios: ['com.plantmed.botanica', 'com.cooni.sub5000'],

  default: [],
}) as string[];
export const constants = {
  subscriptionSkus,
};
