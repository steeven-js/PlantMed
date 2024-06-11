import styles from './styles';
import {memo, useContext} from 'react';
import {View, Text, Switch} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const SwitchList = ({
  label,
  labelInfo,
  trackActiveColor,
  trackInactiveColor,
  thumbActiveColor,
  thumbInactiveColor,
  onValueChange,
  value,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.list, {borderBottomColor: theme.secondary}]}>
      {/* Label wrapper */}
      <View style={styles.labelWrapper}>
        <View>
          <Text style={[styles.label, {color: theme.textHighContrast}]}>
            {label}
          </Text>
          <Text style={[styles.labelInfo, {color: theme.textLowContrast}]}>
            {labelInfo}
          </Text>
        </View>
      </View>
      {/* Toggle switch */}
      <View>
        <Switch
          trackColor={{
            false: trackInactiveColor,
            true: trackActiveColor,
          }}
          thumbColor={value ? thumbActiveColor : thumbInactiveColor}
          onValueChange={onValueChange}
          value={value}
          ios_backgroundColor={theme.secondary}
          style={styles.switch}
        />
      </View>
    </View>
  );
};

// Exporting
export default memo(SwitchList);
