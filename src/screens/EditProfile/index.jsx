import styles from './styles';
import {
  STANDARD_USER_AVATAR_WRAPPER_SIZE,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import {useContext} from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Link from '../../components/links/Link';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import TextInput from '../../components/inputs/TextInput';
import av_woman_4 from '../../assets/avatars/svg/av_woman_4';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import ic_edit_dark_green from '../../assets/icons/svg/ic_edit_dark_green';

// Functional component
const EditProfile = ({navigation}) => {
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
        {/* Avatar wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={300}
          style={styles.avatarWrapper}>
          {/* Avatar */}
          <SvgXml
            xml={av_woman_4}
            width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
            height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
          />

          {/* Camera icon wrapper */}
          <Animatable.View
            animation="bounceIn"
            delay={1700}
            style={[
              styles.cameraIconWrapper,
              {backgroundColor: theme.accentLightest},
            ]}>
            <SvgXml
              xml={ic_edit_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </Animatable.View>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput label="Name" placeholder="Enter your name" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <TextInput label="Email" placeholder="Enter your email" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <TextInput
            label="Phone number"
            placeholder="Enter your phone number"
          />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Link component */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <Link label="Want to change password?" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={1500}>
          <Button label="Submit & Save" />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default EditProfile;
