import styles from './styles';
import {View} from 'react-native';
import {memo} from 'react';
import { COLORS } from '../../../config/Colors';
// Functional component
const HorizontalDivider = () => {

  // Returning
  return (
    <View style={[styles.dividerLine, {backgroundColor: COLORS.secondary}]} />
  );
};

// Exporting
export default memo(HorizontalDivider);
