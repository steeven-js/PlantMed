import styles from './styles';
import {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import Address from '../../components/cards/Address';
import AddressesData from '../../data/AddressesData';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';

// Functional component
const Addresses = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Scroll View */}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        <Animatable.View animation="fadeInUp" delay={100}>
          {AddressesData.map((address, index) => (
            <Address
              key={address.id}
              avatarImage={address.avatarImage}
              addressTitle={address.addressTitle}
              address={address.address}
              isChecked={address.isChecked}
              isLastItem={AddressesData.length === index + 1 ? true : false}
            />
          ))}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Addresses;
