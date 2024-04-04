import { memo, useContext } from 'react';
import { Text } from 'react-native';

import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const ScreenInfo = ({ info }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <Text style={[styles.info, { color: theme.textLowContrast }]}>
            {info}
        </Text>
    );
};

// Exporting
export default memo(ScreenInfo);
