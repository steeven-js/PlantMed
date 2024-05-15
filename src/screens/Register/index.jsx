import styles from './styles';
import {useContext} from 'react';
import {View} from 'react-native';
import Link from '../../components/links/Link';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import TextInput from '../../components/inputs/TextInput';
import Question from '../../components/paragraphs/Question';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import ScreenTitle from '../../components/headings/ScreenTitle';
import {ThemeContext} from '../../theming/contexts/ThemeContext';

// Functional component
const Register = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.accent}]}>
      {/* Form wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.formWrapper, {backgroundColor: theme.primary}]}>
        {/* Screen title component */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <ScreenTitle title="Register" />
        </Animatable.View>

        {/* Screen info component */}
        <Animatable.View animation="fadeInUp" delay={500}>
          <ScreenInfo info="hey, enter your account details to create a new Plant mart customer account." />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput label="Name" placeholder="Enter your name" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <TextInput label="Email" placeholder="Enter your email address" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <TextInput
            label="Contact number"
            placeholder="Enter your contact number"
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <Button
            label="Register"
            // onPress={() => navigation.navigate('Email Verification')}
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Question & link component wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={1500}
          style={styles.questionAndLinkWrapper}>
          {/* Question component */}
          <Question question="Already have an account?" />

          {/* Login component */}
          <Link label="Login" onPress={() => navigation.goBack()} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Register;
