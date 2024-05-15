import styles from './styles';
import {
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../../config/Constants';
import {memo, useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import ic_checkmark_white from '../../../assets/icons/svg/ic_checkmark_white';
import ic_checkmark_black from '../../../assets/icons/svg/ic_checkmark_black';

// Functional component
const Address = ({
  avatarImage,
  addressTitle,
  address,
  isChecked,
  isLastItem,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[
        styles.addressCard,
        {
          backgroundColor: isChecked ? theme.accentLightest : theme.secondary,
          borderColor: isChecked ? theme.accent : theme.secondaryDark,
          marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3,
        },
      ]}>
      {/* Avatar image, title & address wrapper */}
      <View style={styles.avatarImageAndAddressWrapper}>
        <Image style={styles.avatarImage} source={avatarImage} />
        <View style={styles.titleAndAddressWrapper}>
          <Text
            style={[
              styles.addressTitle,
              {
                color: isChecked
                  ? theme.textHighContrast
                  : theme.textLowContrast,
              },
            ]}>
            {addressTitle}
          </Text>
          <Text
            style={[
              styles.address,
              {
                color: isChecked
                  ? theme.textHighContrast
                  : theme.textLowContrast,
              },
            ]}>
            {address}
          </Text>
        </View>
      </View>

      {/* Checkbox */}
      <View
        style={[
          styles.checkedIconWrapper,
          {backgroundColor: isChecked ? theme.accent : theme.primary},
          {borderColor: isChecked ? theme.accent : theme.secondaryDark},
        ]}>
        {isLightTheme ? (
          <SvgXml
            xml={ic_checkmark_white}
            width={STANDARD_VECTOR_ICON_SIZE * 0.5}
            height={STANDARD_VECTOR_ICON_SIZE * 0.5}
          />
        ) : (
          <SvgXml
            xml={ic_checkmark_black}
            width={STANDARD_VECTOR_ICON_SIZE * 0.5}
            height={STANDARD_VECTOR_ICON_SIZE * 0.5}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Address);
