import styles from './styles';
import {memo, useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const OnBoardingItem = ({image, title, info}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={[styles.title, {color: theme.textHighContrast}]}>
        {title}
      </Text>
      <Text style={[styles.info, {color: theme.accent}]}>{info}</Text>
    </View>
  );
};

// Exporting
export default memo(OnBoardingItem);
