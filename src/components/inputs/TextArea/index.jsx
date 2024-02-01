import styles from './styles';
import {memo} from 'react';
import {Text, TextInput as RNTextInput} from 'react-native';
import { COLORS } from '../../../config/Colors';

// Functional component
const TextArea = ({label, placeholder}) => {

  // Returning
  return (
    <>
      {/* Text input label */}
      <Text style={[styles.textareaLabel, {color: COLORS.textHighContrast}]}>
        {label}
      </Text>
      {/* Text input */}
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.textLowContrast}
        numberOfLines={10}
        multiline={true}
        style={[
          styles.textareaContainer,
          {
            borderColor: COLORS.secondaryDark,
            backgroundColor: COLORS.secondary,
            color: COLORS.textHighContrast,
          },
        ]}
      />
    </>
  );
};

// Exporting
export default memo(TextArea);
