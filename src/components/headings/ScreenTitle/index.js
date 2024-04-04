import { memo, useContext } from 'react';
import { Text } from 'react-native';

import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const ScreenTitle = ({ title }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <Text style={[styles.screenTitle, { color: theme.textHighContrast }]}>
            {title}
        </Text>
    );
};

// Exporting
export default memo(ScreenTitle);
