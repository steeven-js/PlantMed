import styles from './styles';
import {useContext, useCallback} from 'react';
import {View, ScrollView} from 'react-native';
import PoliciesData from '../../data/PoliciesData';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import PolicyNavigationLink from '../../components/links/PolicyNavigationLink';

// Functional component
const Policies = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Getting theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Navigating to the specified screen
  const _navigateToScreen = useCallback(
    screen => navigation.navigate(screen),
    [],
  );

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
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
            {backgroundColor: theme.secondary},
          ]}>
          {/* Mapping data */}
          {PoliciesData.map((policy, index) => {
            // Border bottom color
            borderBottomColor =
              index === PoliciesData.length - 1 ? 'transparent' : theme.primary;

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
};

// Exporting
export default Policies;
