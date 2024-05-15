import styles from './styles';
import {memo, useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import {View, Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import ic_arrow_right_dark_green from '../../../assets/icons/svg/ic_arrow_right_dark_green';

// Functional component
const NavigationLink = ({leftIcon, label, onPress}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity style={styles.link} onPress={onPress}>
      <View style={styles.linkIconAndLabelWrapper}>
        <View
          style={[styles.linkIconWrapper, {backgroundColor: theme.secondary}]}>
          {leftIcon}
        </View>
        <Text style={[styles.linkLabel, {color: theme.textLowContrast}]}>
          {label}
        </Text>
      </View>

      {/* Arrow icon */}
      <SvgXml
        xml={ic_arrow_right_dark_green}
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    </TouchableOpacity>
  );
};

// Exporting
export default memo(NavigationLink);
