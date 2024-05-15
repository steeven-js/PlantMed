import styles from './styles';
import {View, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {IndependentColors} from '../../config/Colors';
import {useState, useCallback, useContext} from 'react';
import SwitchList from '../../components/switches/SwitchList';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import HorizontalDivider from '../../components/dividers/HorizontalDivider';

// Functional component
const NotificationSettings = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Getting theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [isEnabledOne, setIsEnabledOne] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(true);
  const [isEnabledThree, setIsEnabledThree] = useState(true);
  const [isEnabledFour, setIsEnabledFour] = useState(false);
  const [isEnabledFive, setIsEnabledFive] = useState(false);

  // Toggling switches
  const _toggleSwitchOne = useCallback(() => {
    setIsEnabledOne(previousState => !previousState);
  }, [isEnabledOne]);

  const _toggleSwitchTwo = useCallback(() => {
    setIsEnabledTwo(previousState => !previousState);
  }, [isEnabledTwo]);

  const _toggleSwitchThree = useCallback(() => {
    setIsEnabledThree(previousState => !previousState);
  }, [isEnabledThree]);

  const _toggleSwitchFour = useCallback(() => {
    setIsEnabledFour(previousState => !previousState);
  }, [isEnabledFour]);

  const _toggleSwitchFive = useCallback(() => {
    setIsEnabledFive(previousState => !previousState);
  }, [isEnabledFive]);

  // Constants
  const Track_Active_Color = theme.accent;
  const Track_Inactive_Color = theme.accentLightest;
  const Thumb_Active_Color = IndependentColors.white;
  const Thumb_Inactive_Color = theme.secondary;

  // Returning
  return (
    <Animatable.View
      delay={100}
      animation="fadeInDown"
      style={[styles.mainWrapper, {backgroundColor: theme.accent}]}>
      {/* Header */}
      <View style={[styles.header, {backgroundColor: theme.accent}]}>
        {/* Page title */}
        <Animatable.Text
          delay={300}
          animation="fadeInUp"
          style={styles.pageTitle}>
          Custom Preferences
        </Animatable.Text>

        {/* Page title info */}
        <Animatable.Text
          delay={500}
          animation="fadeInUp"
          style={styles.pageTitleInfo}>
          Manage Preferences As Per Your Own Choice
        </Animatable.Text>
      </View>

      {/* Menu items wrapper */}
      <Animatable.View
        delay={700}
        animation="fadeInUp"
        style={[styles.menuItemsWrapper, {backgroundColor: theme.primary}]}>
        {/* Scrollview */}
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          {/* Switch list components */}
          <Animatable.View delay={900} animation="fadeInUp">
            <SwitchList
              label="Orders"
              labelInfo="Get alerts when orders comes in."
              trackActiveColor={Track_Active_Color}
              trackInactiveColor={Track_Inactive_Color}
              thumbActiveColor={Thumb_Active_Color}
              thumbInactiveColor={Thumb_Inactive_Color}
              onValueChange={_toggleSwitchOne}
              value={isEnabledOne}
            />
          </Animatable.View>

          {/* Horizontal divider */}
          <Animatable.View delay={1100} animation="fadeInUp">
            <HorizontalDivider />
          </Animatable.View>

          <Animatable.View delay={1300} animation="fadeInUp">
            <SwitchList
              label="New Products"
              labelInfo="Get alerts when new products comes in."
              trackActiveColor={Track_Active_Color}
              trackInactiveColor={Track_Inactive_Color}
              thumbActiveColor={Thumb_Active_Color}
              thumbInactiveColor={Thumb_Inactive_Color}
              onValueChange={_toggleSwitchTwo}
              value={isEnabledTwo}
            />
          </Animatable.View>

          {/* Horizontal divider */}
          <Animatable.View delay={1500} animation="fadeInUp">
            <HorizontalDivider />
          </Animatable.View>

          <Animatable.View delay={1700} animation="fadeInUp">
            <SwitchList
              label="Offers"
              labelInfo="Get alerts when offers comes in."
              trackActiveColor={Track_Active_Color}
              trackInactiveColor={Track_Inactive_Color}
              thumbActiveColor={Thumb_Active_Color}
              thumbInactiveColor={Thumb_Inactive_Color}
              onValueChange={_toggleSwitchThree}
              value={isEnabledThree}
            />
          </Animatable.View>

          {/* Horizontal divider */}
          <Animatable.View delay={1900} animation="fadeInUp">
            <HorizontalDivider />
          </Animatable.View>

          <Animatable.View delay={2100} animation="fadeInUp">
            <SwitchList
              label="Discounts"
              labelInfo="Get alerts when discounts comes in."
              trackActiveColor={Track_Active_Color}
              trackInactiveColor={Track_Inactive_Color}
              thumbActiveColor={Thumb_Active_Color}
              thumbInactiveColor={Thumb_Inactive_Color}
              onValueChange={_toggleSwitchFour}
              value={isEnabledFour}
            />
          </Animatable.View>

          {/* Horizontal divider */}
          <Animatable.View delay={2300} animation="fadeInUp">
            <HorizontalDivider />
          </Animatable.View>

          <Animatable.View delay={2500} animation="fadeInUp">
            <SwitchList
              label="Email Notifications"
              labelInfo="Get weekly email notifications."
              trackActiveColor={Track_Active_Color}
              trackInactiveColor={Track_Inactive_Color}
              thumbActiveColor={Thumb_Active_Color}
              thumbInactiveColor={Thumb_Inactive_Color}
              onValueChange={_toggleSwitchFive}
              value={isEnabledFive}
            />
          </Animatable.View>
        </ScrollView>
      </Animatable.View>
    </Animatable.View>
  );
};

// Exporting
export default NotificationSettings;
