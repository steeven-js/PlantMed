import styles from './styles';
import {Text} from 'react-native';
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const ScreenTitle = ({title}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <Text style={[styles.screenTitle, {color: theme.textHighContrast}]}>
      {title}
    </Text>
  );
};

// Exporting
export default memo(ScreenTitle);
