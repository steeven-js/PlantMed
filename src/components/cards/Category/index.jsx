import styles from './styles';
import {memo, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const Category = ({id, categoryImage, categoryName, onPress}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity style={styles.categoryImageWrapper} onPress={onPress}>
      {/* Category image */}
      <Image source={categoryImage} style={styles.categoryImage} />
      {/* Overlay */}
      <View style={styles.categoryImageOverlay}>
        <View style={styles.categoryNameWrapper}>
          <Text style={styles.categoryName}>{categoryName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Category);
