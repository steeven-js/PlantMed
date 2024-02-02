import styles from './styles';
import {memo} from 'react';
import {View, Text, Switch} from 'react-native';
import { COLORS } from '../../../config/Colors';

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

  // Returning
  return (
    <View style={[styles.list, {borderBottomColor: COLORS.secondary}]}>
      {/* Label wrapper */}
      <View style={styles.labelWrapper}>
        <View>
          <Text style={[styles.label, {color: COLORS.textHighContrast}]}>
            {label}
          </Text>
          <Text style={[styles.labelInfo, {color: COLORS.textLowContrast}]}>
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
          ios_backgroundColor={COLORS.secondary}
          style={styles.switch}
        />
      </View>
    </View>
  );
};

// Exporting
export default memo(SwitchList);
