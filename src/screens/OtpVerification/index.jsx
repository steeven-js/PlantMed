import styles from './styles';
import {View} from 'react-native';
import {useContext, useState} from 'react';
import Link from '../../components/links/Link';
import OTPTextView from 'react-native-otp-textinput';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import Question from '../../components/paragraphs/Question';
import ScreenTitle from '../../components/headings/ScreenTitle';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import {ThemeContext} from '../../theming/contexts/ThemeContext';

// Functional component
const OtpVerification = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [otpText, setOtpText] = useState('');

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.accent}]}>
      {/* Form wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.formWrapper, {backgroundColor: theme.primary}]}>
        {/* Screen title */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <ScreenTitle title="OTP Verification" />
        </Animatable.View>

        {/* Screen info component */}
        <Animatable.View animation="fadeInUp" delay={500}>
          <ScreenInfo info="Hey, enter your OTP sent to your mobile number +91 0000000000." />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* OTP TextView */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <OTPTextView
            textInputStyle={styles.otpTextView}
            tintColor={theme.accent}
            inputCount={4}
            handleTextChange={text => setOtpText(text)}
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Question & link component wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={900}
          style={styles.questionAndLinkWrapper}>
          {/* Question component */}
          <Question question="Didn't get OTP?" />

          {/* Link component */}
          <Link label="Resend" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <Button label="Verify & Continue" />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default OtpVerification;
