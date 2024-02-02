import styles from './styles';
import {SvgXml} from 'react-native-svg';
import {ScrollView, View} from 'react-native';
import {COLORS} from '../../config/Colors';
import {useState} from 'react';
import {STANDARD_VECTOR_ICON_SIZE} from '../../config/Constants';
import SectionTitle from '../../components/headings/SectionTitle';
import NavigationLink from '../../components/links/NavigationLink';
import ic_edit_dark_green from '../../assets/icons/svg/ic_edit_dark_green';
import ic_lock_dark_green from '../../assets/icons/svg/ic_lock_dark_green';
import ic_bell_dark_green from '../../assets/icons/svg/ic_bell_dark_green';

// Functional component
const Settings = ({navigation}) => {

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: COLORS.primary}]}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        {/* Section title component */}
        <SectionTitle title="Compte" />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <SvgXml
              xml={ic_edit_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Modifier mon profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <SvgXml
              xml={ic_lock_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Changer de mot de passe"
          onPress={() => navigation.navigate('Reset Password')}
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <SectionTitle title="Messagerie" />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Navigation link component */}
        <NavigationLink
          leftIcon={
            <SvgXml
              xml={ic_bell_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          }
          label="Notifications"
          onPress={() => navigation.navigate('Notification Settings')}
        />

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

      </ScrollView>
    </View>
  );
};

// Exporting
export default Settings;
