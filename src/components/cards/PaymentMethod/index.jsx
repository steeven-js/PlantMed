import styles from './styles';
import {memo, useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import {View, Text, TouchableOpacity} from 'react-native';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import ic_checkmark_white from '../../../assets/icons/svg/ic_checkmark_white';
import ic_checkmark_black from '../../../assets/icons/svg/ic_checkmark_black';

// Functional component
const PaymentMethod = ({iconSvg, label, isChecked}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[
        styles.paymentMethodCard,
        {
          backgroundColor: isChecked ? theme.accentLightest : theme.secondary,
          borderColor: isChecked ? theme.accent : theme.secondaryDark,
        },
      ]}>
      {/* Icon & label wrapper */}
      <View style={styles.iconSvgAndLabelWrapper}>
        <View style={styles.iconSvgWrapper}>{iconSvg}</View>
        <Text
          style={[
            styles.label,
            {color: isChecked ? theme.textHighContrast : theme.textLowContrast},
          ]}>
          {label}
        </Text>
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
export default memo(PaymentMethod);
