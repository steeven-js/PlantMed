import { memo, useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';
import ic_trash_white from '../../../assets/icons/svg/ic_trash_white';

// Functional component
const GridViewPlant = ({
  plantImage = null,
  plantTitle = '',
  touchOptions = false,
  onPressOption = () => { },
  onPress = () => { },
}) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[styles.plantCard, { backgroundColor: theme.secondary }]}
      onPress={onPress}>
      {/* Rotated background */}
      <View
        style={[styles.rotatedBackground, { borderColor: theme.secondary }]}
      />
      {/* Product image */}
      <Image source={plantImage} style={styles.plantImage} />

      {/* Product title */}
      <Text
        style={[styles.plantTitle, { color: theme.textHighContrast }]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {plantTitle}
      </Text>

      {/* Bag icon wrapper */}
      {touchOptions && (
        <TouchableOpacity
          style={[
            styles.bagIconWrapper,
            { backgroundColor: theme.accent },
          ]}
          onPress={onPressOption} // Corrected onPressOption to onPress
        >
          <SvgXml
            xml={ic_trash_white}
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

// Exporting
export default memo(GridViewPlant);
