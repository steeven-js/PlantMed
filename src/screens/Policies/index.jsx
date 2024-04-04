import { useNavigation } from '@react-navigation/native';
import { useCallback, useContext } from 'react';
import { ScrollView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import PolicyNavigationLink from '../../components/links/PolicyNavigationLink';
import PoliciesData from '../../data/PoliciesData';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Policies = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Getting theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Navigating to the specified screen
    const _navigateToScreen = useCallback(
        (screen) => navigation.navigate(screen),
        [navigation],
    );

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Scrollview */}
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContentContainer}
            >
                {/* Links container */}
                <Animatable.View
                    delay={100}
                    animation="fadeInUp"
                    useNativeDriver={true}
                    style={[
                        styles.navigationLinksWrapper,
                        { backgroundColor: theme.secondary },
                    ]}
                >
                    {/* Mapping data */}
                    {PoliciesData.map((policy, index) => {
                        // Border bottom color
                        // eslint-disable-next-line no-undef
                        borderBottomColor =
                            index === PoliciesData.length - 1
                                ? 'transparent'
                                : theme.primary;

                        // Returning
                        return (
                            <PolicyNavigationLink
                                key={index}
                                label={policy.title}
                                // eslint-disable-next-line no-undef
                                borderBottomColor={borderBottomColor}
                                onPress={() => _navigateToScreen('Policy')}
                            />
                        );
                    })}
                </Animatable.View>
            </ScrollView>
        </View>
    );
};

// Exporting
export default Policies;
