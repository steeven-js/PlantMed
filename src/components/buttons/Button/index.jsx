import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS, IndependentColors } from '../../../config/Colors';

import styles from './styles';

const Button = ({ label, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.accent }]}
            onPress={onPress}
            disabled={disabled}>
            <Text style={[styles.buttonLabel, { color: IndependentColors.white }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};


Button.propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default Button;
