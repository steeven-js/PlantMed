import styles from './styles';
import {View} from 'react-native';
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const HorizontalDivider = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.dividerLine, {backgroundColor: theme.secondary}]} />
  );
};

// Exporting
export default memo(HorizontalDivider);
