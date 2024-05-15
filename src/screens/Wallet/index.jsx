import styles from './styles';
import {useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import Link from '../../components/links/Link';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import SectionTitle from '../../components/headings/SectionTitle';
import WalletTransactionsData from '../../data/WalletTransactionsData';
import {STANDARD_VECTOR_ICON_WRAPPER_SIZE} from '../../config/Constants';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import WalletTransactionCard from '../../components/cards/WalletTransationCard';
import ic_pay_method_master_card from '../../assets/icons/svg/ic_pay_method_master_card';

// Functional component
const Wallet = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Scroll view */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        {/* Card wrapper */}
        <Animatable.View
          animation="zoomInUp"
          delay={100}
          style={[styles.cardWrapper, {backgroundColor: theme.accent}]}>
          {/* Card details */}
          <View style={styles.cardDetails}>
            <SvgXml
              xml={ic_pay_method_master_card}
              width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
              height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
            />
            <View>
              <Text style={styles.cardNumber}>XXXX 0019 8939</Text>
              <Text style={styles.cardType}>Master Card</Text>
            </View>
          </View>

          {/* Balance & expiry date */}
          <View>
            <Text style={styles.cardBalance}>$1099.00</Text>
            <Text style={styles.cardExpDate}>Expiry - December, 2025</Text>
          </View>

          {/* Card holder name */}
          <Text style={styles.cardHolderName}>Jonathan Doe</Text>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Bills & recharges wrapper */}
        <View style={styles.billsAndRechargesWrapper}>
          <Animatable.View animation="bounceIn" delay={300}>
            <TouchableOpacity
              style={[
                styles.billsAndRechargesIconRotatedWrapper,
                {backgroundColor: theme.accentLightest},
              ]}>
              <View style={styles.billsAndRechargesIconWrapper}>
                <Image
                  style={styles.billsAndRechargesIconImage}
                  source={require('../../assets/icons/png/wallet/bill.png')}
                />
                <Text
                  style={[
                    styles.billsAndRechargesIconLabel,
                    {color: theme.textHighContrast},
                  ]}
                  numberOfLines={1}>
                  Bills
                </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View animation="bounceIn" delay={500}>
            <TouchableOpacity
              style={[
                styles.billsAndRechargesIconRotatedWrapper,
                {backgroundColor: theme.accentLightest},
              ]}>
              <View style={styles.billsAndRechargesIconWrapper}>
                <Image
                  style={styles.billsAndRechargesIconImage}
                  source={require('../../assets/icons/png/wallet/send-money.png')}
                />
                <Text
                  style={[
                    styles.billsAndRechargesIconLabel,
                    {color: theme.textHighContrast},
                  ]}
                  numberOfLines={1}>
                  Send
                </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View animation="bounceIn" delay={700}>
            <TouchableOpacity
              style={[
                styles.billsAndRechargesIconRotatedWrapper,
                {backgroundColor: theme.accentLightest},
              ]}>
              <View style={styles.billsAndRechargesIconWrapper}>
                <Image
                  style={styles.billsAndRechargesIconImage}
                  source={require('../../assets/icons/png/wallet/shopping-cart.png')}
                />
                <Text
                  style={[
                    styles.billsAndRechargesIconLabel,
                    {color: theme.textHighContrast},
                  ]}
                  numberOfLines={1}>
                  Shop
                </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View animation="bounceIn" delay={900}>
            <TouchableOpacity
              style={[
                styles.billsAndRechargesIconRotatedWrapper,
                {backgroundColor: theme.accentLightest},
              ]}>
              <View style={styles.billsAndRechargesIconWrapper}>
                <Image
                  style={styles.billsAndRechargesIconImage}
                  source={require('../../assets/icons/png/wallet/mobile.png')}
                />
                <Text
                  style={[
                    styles.billsAndRechargesIconLabel,
                    {color: theme.textHighContrast},
                  ]}
                  numberOfLines={1}>
                  Mobile
                </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View animation="bounceIn" delay={1100}>
            <TouchableOpacity
              style={[
                styles.billsAndRechargesIconRotatedWrapper,
                {backgroundColor: theme.accentLightest},
              ]}>
              <View style={styles.billsAndRechargesIconWrapper}>
                <Image
                  style={styles.billsAndRechargesIconImage}
                  source={require('../../assets/icons/png/wallet/more.png')}
                />
                <Text
                  style={[
                    styles.billsAndRechargesIconLabel,
                    {color: theme.textHighContrast},
                  ]}
                  numberOfLines={1}>
                  More
                </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
        </View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Section title & link wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={1300}
          style={styles.sectionTitleAndLinkWrapper}>
          {/* Section title component */}
          <SectionTitle title="Transactions" />

          {/* Link component */}
          <Link label="See all" />
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1500}>
          {WalletTransactionsData.map((transaction, index) => (
            <WalletTransactionCard
              key={index}
              date={transaction.date}
              month={transaction.month}
              vendor={transaction.vendor}
              time={transaction.time}
              amount={transaction.amount}
              isLastItem={
                WalletTransactionsData.length === index + 1 ? true : false
              }
            />
          ))}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Wallet;
