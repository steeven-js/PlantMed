import styles from './styles';
import {useContext} from 'react';
import {ScrollView, View} from 'react-native';
import ContactsData from '../../data/ContactsData';
import * as Animatable from 'react-native-animatable';
import ContactCard from '../../components/cards/ContactCard';
import {STANDARD_BORDER_WIDTH} from '../../config/Constants';
import {ThemeContext} from '../../theming/contexts/ThemeContext';

// Functional component
const Contacts = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Getting theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Scrollview */}
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Animatable.View animation="fadeInUp" delay={100}>
          {/* Mapping contacts data */}
          {ContactsData.map((contact, index) => (
            <ContactCard
              key={index}
              avatar={contact.avatar}
              badgeBackgroundColor={contact.badgeColor}
              contactName={contact.name}
              contactNumber={contact.number}
              borderBottomWidth={
                index === ContactsData.length - 1 ? 0 : STANDARD_BORDER_WIDTH
              }
            />
          ))}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Contacts;
