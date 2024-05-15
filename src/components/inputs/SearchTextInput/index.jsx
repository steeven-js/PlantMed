import styles from './styles';
import {memo, useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import ic_search_dark_green from '../../../assets/icons/svg/ic_search_dark_green';

// Functional component
const SearchTextInput = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View
      style={[
        styles.textInputWrapper,
        {
          borderColor: theme.secondaryDark,
          backgroundColor: theme.secondary,
          color: theme.textHighContrast,
        },
      ]}>
      {/* Text input */}
      <TextInput
        placeholder="Search here..."
        placeholderTextColor={theme.textLowContrast}
        style={[styles.textInput, {color: theme.textHighContrast}]}
      />

      {/* Search icon */}
      <TouchableOpacity style={styles.searchIconWrapper}>
        <SvgXml
          xml={ic_search_dark_green}
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      </TouchableOpacity>
    </View>
  );
};

// Exporting
export default memo(SearchTextInput);
