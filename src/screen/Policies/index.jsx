import { View, ScrollView, Text } from 'react-native';
import { useCallback } from 'react';
import * as Animatable from 'react-native-animatable';
import styles from './styles'
import { COLORS } from '../../config/Colors';
import PoliciesData from '../../data/PoliciesData';
import PolicyNavigationLink from '../../components/links/PolicyNavigationLink';

// Functional component
const Policies = ({ navigation }) => {

    // Navigating to the specified screen
    const _navigateToScreen = useCallback(
        screen => navigation.navigate(screen),
        [],
    );

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.primary }]}>
            {/* Scrollview */}
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContentContainer}>
                {/* Links container */}
                <Animatable.View
                    delay={100}
                    animation="fadeInUp"
                    useNativeDriver={true}
                    style={[
                        styles.navigationLinksWrapper,
                        { backgroundColor: COLORS.secondary },
                    ]}>
                    {/* Mapping data */}
                    {PoliciesData.map((policy, index) => {
                        // Border bottom color
                        borderBottomColor =
                            index === PoliciesData.length - 1 ? 'transparent' : COLORS.primary;

                        // Returning
                        return (
                            <PolicyNavigationLink
                                key={index}
                                label={policy.title}
                                borderBottomColor={borderBottomColor}
                                onPress={() => _navigateToScreen('Policy')}
                            />
                        );
                    })}
                </Animatable.View>
            </ScrollView>
        </View>
    );
}

export default Policies