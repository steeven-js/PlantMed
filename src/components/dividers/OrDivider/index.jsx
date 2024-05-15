import styles from './styles';
import {Text} from 'react-native';
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const OrDivider = ({label}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <Text style={[styles.divider, {color: theme.textLowContrast}]}>
      {label}
    </Text>
  );
};

// Exporting
export default memo(OrDivider);
