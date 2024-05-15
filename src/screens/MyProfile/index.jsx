import styles from './styles';
import {useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import {ScrollView, View} from 'react-native';
import MyProfileData from '../../data/MyProfileData';
import * as Animatable from 'react-native-animatable';
import av_man_2 from '../../assets/avatars/svg/av_man_2';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import NavigationLink from '../../components/links/NavigationLink';
import {STANDARD_USER_AVATAR_WRAPPER_SIZE} from '../../config/Constants';

// Functional component
const MyProfile = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.accent}]}>
      {/* Content wrapper */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.contentWrapper, {backgroundColor: theme.primary}]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          {/* Profile info wrapper */}
          <Animatable.View
            animation="fadeInUp"
            delay={300}
            style={styles.profileInfoWrapper}>
            {/* Avatar */}
            <SvgXml
              xml={av_man_2}
              width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 1.5}
              height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 1.5}
            />

            {/* Vertical spacer */}
            <View style={styles.verticalSpacer} />

            {/* Profile name */}
            <Animatable.Text
              animation="fadeInUp"
              delay={500}
              style={[styles.profileName, {color: theme.textHighContrast}]}>
              Jonathan Doe
            </Animatable.Text>

            {/* Profile email */}
            <Animatable.Text
              animation="fadeInUp"
              delay={700}
              style={[styles.profileEmail, {color: theme.accent}]}>
              jonathan@hotmail.com
            </Animatable.Text>
          </Animatable.View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          <Animatable.View animation="fadeInUp" delay={900}>
            {/* Mapping */}
            {MyProfileData.map((item, index) => (
              <View key={index}>
                <NavigationLink
                  leftIcon={item.leftIcon}
                  label={item.label}
                  onPress={() => navigation.navigate(item.label)}
                />
                {index !== MyProfileData.length - 1 && (
                  <View style={styles.verticalSpacer} />
                )}
              </View>
            ))}
          </Animatable.View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default MyProfile;
