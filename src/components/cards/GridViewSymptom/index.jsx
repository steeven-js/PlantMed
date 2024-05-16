import styles from './styles';
import {memo, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const GridViewSymptom = ({
  symptomImage,
  symptomTitle,
  onPress,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[styles.symptomCard, {backgroundColor: theme.secondary}]}
      onPress={onPress}>
      {/* Rotated background */}
      <View
        style={[styles.rotatedBackground, {borderColor: theme.secondary}]}
      />
      {/* Product image */}
      <Image source={symptomImage} style={styles.symptomImage} />

      {/* Product title */}
      <Text
        style={[styles.symptomTitle, {color: theme.textHighContrast}]}
        numberOfLines={3}
        ellipsizeMode="tail">
        {symptomTitle}
      </Text>

    </TouchableOpacity>
  );
};

// Exporting
export default memo(GridViewSymptom);
