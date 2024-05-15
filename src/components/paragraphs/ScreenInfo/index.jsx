import styles from './styles';
import {Text} from 'react-native';
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const ScreenInfo = ({info}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <Text style={[styles.info, {color: theme.textLowContrast}]}>{info}</Text>
  );
};

// Exporting
export default memo(ScreenInfo);
