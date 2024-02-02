import styles from './styles';
import {View} from 'react-native';
import Link from '../../components/links/Link';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import ScreenTitle from '../../components/headings/ScreenTitle';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import { COLORS } from '../../config/Colors';

// Functional component
const ResetPassword = () => {

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: COLORS.accent}]}>
      {/* Form wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.formWrapper, {backgroundColor: COLORS.primary}]}>
        {/* Screen title */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <ScreenTitle title="Reset Password" />
        </Animatable.View>

        {/* Screen info component */}
        <Animatable.View animation="fadeInUp" delay={500}>
          <ScreenInfo info="Here, you can reset your password time-to-time to prevent unwanted login." />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Password text input component */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <PasswordTextInput
            label="Current password"
            placeholder="Enter your current password"
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Password text input component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <PasswordTextInput
            label="New password"
            placeholder="Enter your new password"
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Password text input component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <PasswordTextInput
            label="Re-enter new password"
            placeholder="Re-enter your new password"
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Link component */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <Link label="Forgot current password?" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1500}>
          <Button label="Reset Password" />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default ResetPassword;
