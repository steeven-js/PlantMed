import styles from './styles';
import {useContext} from 'react';
import Link from '../../components/links/Link';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import TextArea from '../../components/inputs/TextArea';
import TextInput from '../../components/inputs/TextInput';
import OrDivider from '../../components/dividers/OrDivider';
import ScreenTitle from '../../components/headings/ScreenTitle';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';

// Functional component
const ContactUs = () => {
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
        {/* Scrollview */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          {/* Screen title */}
          <Animatable.View animation="fadeInUp" delay={300}>
            <ScreenTitle title="Contact Us" />
          </Animatable.View>

          {/* Screen info component */}
          <Animatable.View animation="fadeInUp" delay={500}>
            <ScreenInfo info="If you need to contact us for any reason, don't hesitate to reach out." />
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

          {/* Textarea component */}
          <Animatable.View animation="fadeInUp" delay={900}>
            <TextArea
              label="Message"
              placeholder="Enter your message here..."
            />
          </Animatable.View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Link component */}
          <Animatable.View animation="fadeInUp" delay={1100}>
            <Link label="Want to upload a file?" />
          </Animatable.View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Button component */}
          <Animatable.View animation="fadeInUp" delay={1300}>
            <Button label="Send Us" />
          </Animatable.View>

          {/* Or divider component */}
          <Animatable.View animation="fadeInUp" delay={1500}>
            <OrDivider label="Or get help via" />
          </Animatable.View>

          {/* Help icons wrapper */}
          <View style={styles.helpIconsWrapper}>
            <Animatable.View animation="bounceIn" delay={1700}>
              <TouchableOpacity
                style={[
                  styles.helpIconWrapper,
                  {backgroundColor: theme.secondary},
                ]}>
                <Image
                  source={require('../../assets/icons/png/contact-us/headphone.png')}
                  style={styles.helpIconImage}
                />
              </TouchableOpacity>
            </Animatable.View>

            <Animatable.View animation="bounceIn" delay={1900}>
              <TouchableOpacity
                style={[
                  styles.helpIconWrapper,
                  {backgroundColor: theme.secondary},
                ]}>
                <Image
                  source={require('../../assets/icons/png/contact-us/faqs.png')}
                  style={styles.helpIconImage}
                />
              </TouchableOpacity>
            </Animatable.View>

            <Animatable.View animation="bounceIn" delay={2100}>
              <TouchableOpacity
                style={[
                  styles.helpIconWrapper,
                  {backgroundColor: theme.secondary},
                ]}>
                <Image
                  source={require('../../assets/icons/png/contact-us/location_pin.png')}
                  style={styles.helpIconImage}
                />
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default ContactUs;
