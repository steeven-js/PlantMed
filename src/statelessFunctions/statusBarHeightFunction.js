import {getStatusBarHeight} from 'react-native-status-bar-height';

// Define a mapping of iPhone models to status bar heights
const modelToStatusBarHeight = {
  'iPhone XS': 44,
  'iPhone XS Max': 44,
  'iPhone 11 Pro': 44,
  'iPhone 11 Pro Max': 44,
  'iPhone 11': 48,
  'iPhone XR': 48,
  'iPhone 12': 47,
  'iPhone 12 Pro': 47,
  'iPhone 12 Pro Max': 47,
  'iPhone 13': 47,
  'iPhone 13 Pro': 47,
  'iPhone 13 Pro Max': 47,
  'iPhone 14': 47,
  'iPhone 14 Plus': 47,
  'iPhone 12 mini': 50,
  'iPhone 13 mini': 50,
  'iPhone 14 Pro': 59,
  'iPhone 14 Pro Max': 59,
  'iPhone 15': 59,
  'iPhone 15 Plus': 59,
  'iPhone 15 Pro': 59,
  'iPhone 15 Pro Max': 59,
};

// Method to return status bar height
export const statusBarHeight = model => {
  // Check if the model is in the mapping, and if not, fall back to the default
  return modelToStatusBarHeight[model] || getStatusBarHeight();
};
