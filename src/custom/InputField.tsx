import React, {useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Platform} from 'react-native';

import {svg} from '../assets/svg';
import {theme} from '../constants';

type Props = {
  containerStyle?: object;
  onChangeText?: (text: string) => void;
  value?: string;
  check?: boolean;
  label?: string;
  loading?: boolean;
  setSecureTextEntry?: (value: boolean) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  blurOnSubmit?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
  eyeOffIcon?: boolean;
  checkIcon?: boolean | (() => void);
  icon?: JSX.Element;
  innerRef?: any;
  editable?: boolean;
  maxLength?: number;
  onBlur?: () => void;
};

const InputField: React.FC<Props> = ({
  placeholder,
  containerStyle,
  secureTextEntry,
  keyboardType,
  checkIcon,
  setSecureTextEntry,
  autoCapitalize = 'none',
  eyeOffIcon = false,
  onChangeText,
  blurOnSubmit,
  label,
  value,
  icon,
  editable = true,
  loading,
  onBlur,
  innerRef,
  maxLength,
}): JSX.Element | null => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<TextInput>({focus: () => {}} as TextInput);

  if (loading) {
    ref.current.blur();
  }

  return (
    <View
      style={{
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: editable ? theme.colors.white : '#FAFAFA',
        borderWidth: 1,
        borderColor: '#E7EBEB',
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          padding: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: Platform.OS === 'ios' ? 16 : 14,
          marginLeft: 20,
          marginRight: eyeOffIcon ? 0 : checkIcon ? 0 : 30,
          color: editable ? theme.colors.mainColor : '#A7AFB7',
          ...theme.fonts.DM_Sans_400Regular,
        }}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'#A7AFB7'}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        ref={innerRef}
        // innerRef={innerRef}
        blurOnSubmit={blurOnSubmit}
        onBlur={onBlur}
        maxLength={maxLength}
        editable={editable}
      />

      {checkIcon && (
        <View style={{paddingHorizontal: 20}}>
          <svg.InputCheckSvg />
        </View>
      )}
      {eyeOffIcon && (
        <TouchableOpacity
          style={{paddingHorizontal: 20}}
          onPress={() => {
            setSecureTextEntry && setSecureTextEntry(!secureTextEntry);
          }}
        >
          <svg.EyeOffSvg />
        </TouchableOpacity>
      )}
      {icon && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </TouchableOpacity>
      )}
      {label && (
        <View
          style={{
            position: 'absolute',
            top: -12,
            left: 10,
            paddingHorizontal: 10,
            backgroundColor: editable ? theme.colors.white : '#fff',
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              // ...theme.fonts.DMSans_500Medium,
              fontSize: Platform.OS === 'ios' ? 12 : 10,
              textTransform: 'uppercase',
              color: theme.colors.textColor,
              lineHeight: 12 * 1.7,
            }}
          >
            {label}
          </Text>
        </View>
      )}
    </View>
  );
};

export default InputField;
