import styles from './styles';
import {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import TextInput from '../../components/inputs/TextInput';
import PaymentMethodsData from '../../data/PaymentMethodsData';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import PaymentMethod from '../../components/cards/PaymentMethod';
import SectionTitle from '../../components/headings/SectionTitle';

// Functional component
const PaymentMethods = ({navigation}) => {
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
          {PaymentMethodsData.map((paymentMethod, index) => (
            <View key={paymentMethod.id}>
              {/* Section title */}
              <SectionTitle title={paymentMethod.sectionTitle} />

              {/* Vertical spacer component */}
              <View style={styles.verticalSpacer} />

              {/* Payment method items */}
              {paymentMethod.methods.map((item, index) => (
                <View key={item.id}>
                  {/* Payment method card component */}
                  <PaymentMethod
                    iconSvg={item.iconSvg}
                    label={item.label}
                    isChecked={item.isChecked}
                  />
                </View>
              ))}
            </View>
          ))}
        </Animatable.View>

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <TextInput label="Card number" placeholder="1234-9302-0000-0000" />
        </Animatable.View>

        {/* Vertical spacer component */}
        <View style={styles.verticalSpacer} />

        {/* CVV number & expiry date wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={500}
          style={styles.cvvNumberAndExpiryDateWrapper}>
          <View style={styles.cvvNumberWrapper}>
            {/* Text input component */}
            <TextInput label="CVV" placeholder="123" />
          </View>
          <View style={styles.expiryDateWrapper}>
            {/* Text input component */}
            <TextInput label="Expiry date" placeholder="November 18, 2025" />
          </View>
        </Animatable.View>

        {/* Vertical spacer component */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput label="Name on card" placeholder="Jonathan Doe" />
        </Animatable.View>

        {/* Vertical spacer component */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <Button
            label="Pay now"
            onPress={() => navigation.navigate('Payment Status')}
          />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default PaymentMethods;
