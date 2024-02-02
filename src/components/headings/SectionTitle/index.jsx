import styles from './styles';
import {Text} from 'react-native';
import {memo} from 'react';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import { COLORS } from '../../../config/Colors';

// Functional component
const SectionTitle = ({title}) => {

  // Returning
  return (
    <Text style={[styles.sectionTitle, {color: COLORS.accent}]}>{title}</Text>
  );
};

// Exporting
export default memo(SectionTitle);
