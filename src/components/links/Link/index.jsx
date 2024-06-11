import {memo, useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Link = ({label, onPress}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.label, {color: theme.accent}]}>{label}</Text>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Link);
