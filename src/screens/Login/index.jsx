import styles from './styles';
import {
  STANDARD_SOCIAL_ICON_SIZE,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import Modal from 'react-native-modal';
import {SvgXml} from 'react-native-svg';
import {useContext, useState} from 'react';
import Link from '../../components/links/Link';
import {View, TouchableOpacity} from 'react-native';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import ic_google from '../../assets/icons/svg/ic_google';
import TextInput from '../../components/inputs/TextInput';
import ic_twitter from '../../assets/icons/svg/ic_twitter';
import OrDivider from '../../components/dividers/OrDivider';
import Question from '../../components/paragraphs/Question';
import ic_facebook from '../../assets/icons/svg/ic_facebook';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import ScreenTitle from '../../components/headings/ScreenTitle';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import ic_close_dark_green from '../../assets/icons/svg/ic_close_dark_green';

// Functional component
const Login = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Toggling call request modal
  const toggleModal = () => {
    // Updating states
    setIsModalVisible(prevState => !prevState);
  };

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
          <ScreenTitle title="Login" />
        </Animatable.View>

        {/* Screen info component */}
        <Animatable.View animation="fadeInUp" delay={500}>
          <ScreenInfo info="hey, enter your account details to get log in to your account." />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput label="Email" placeholder="Enter your email" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Password text input component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <PasswordTextInput
            label="Password"
            placeholder="Enter your password"
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Link component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <Link label="Forgot password?" onPress={toggleModal} />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <Button
            label="Login"
            // onPress={() => navigation.navigate('OTP Verification')}
          />
        </Animatable.View>

        {/* Or divider component */}
        <Animatable.View animation="fadeInUp" delay={1500}>
          <OrDivider label="or login with" />
        </Animatable.View>

        {/* Social media icons wrapper */}
        <View style={styles.socialMediaIconsWrapper}>
          <Animatable.View animation="bounceIn" delay={1700}>
            <TouchableOpacity>
              <SvgXml
                xml={ic_facebook}
                width={STANDARD_SOCIAL_ICON_SIZE}
                height={STANDARD_SOCIAL_ICON_SIZE}
              />
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="bounceIn" delay={1900}>
            <TouchableOpacity>
              <SvgXml
                xml={ic_twitter}
                width={STANDARD_SOCIAL_ICON_SIZE}
                height={STANDARD_SOCIAL_ICON_SIZE}
              />
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="bounceIn" delay={2100}>
            <TouchableOpacity>
              <SvgXml
                xml={ic_google}
                width={STANDARD_SOCIAL_ICON_SIZE}
                height={STANDARD_SOCIAL_ICON_SIZE}
              />
            </TouchableOpacity>
          </Animatable.View>
        </View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Question & link component wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={2300}
          style={styles.questionAndLinkWrapper}>
          {/* Question component */}
          <Question question="Don't have an account?" />

          {/* Link component */}
          <Link
            label="Register"
            onPress={() => navigation.navigate('Register')}
          />
        </Animatable.View>
      </Animatable.View>

      {/* Forgot password modal */}
      {isModalVisible ? (
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInDown"
          animationOut="slideOutDown"
          backdropColor={theme.accent}
          backdropOpacity={0.9}
          style={styles.modal}>
          <View style={[styles.modalBody, {backgroundColor: theme.primary}]}>
            {/* Text input */}
            <TextInput label="Email" placeholder="Enter your email" />

            {/* Button */}
            <View style={styles.modalSubmitButtonWrapper}>
              <Button label="Recover Password" />
            </View>
            {/* Modal close icon */}
            <View
              style={[
                styles.modalCloseIconWrapper,
                {backgroundColor: theme.secondary},
              ]}>
              <TouchableOpacity activeOpacity={1} onPress={toggleModal}>
                <SvgXml
                  xml={ic_close_dark_green}
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

// Exporting
export default Login;
