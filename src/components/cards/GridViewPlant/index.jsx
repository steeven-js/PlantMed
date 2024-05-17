import styles from './styles';
import {memo, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const GridViewPlant = ({
  plantImage,
  plantTitle,
  onPress,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[styles.plantCard, {backgroundColor: theme.secondary}]}
      onPress={onPress}>
      {/* Rotated background */}
      <View
        style={[styles.rotatedBackground, {borderColor: theme.secondary}]}
      />
      {/* Product image */}
      <Image source={plantImage} style={styles.plantImage} />

      {/* Product title */}
      <Text
        style={[styles.plantTitle, {color: theme.textHighContrast}]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {plantTitle}
      </Text>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(GridViewPlant);
