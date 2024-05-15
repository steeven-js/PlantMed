import styles from './styles';
import {useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import {STANDARD_VECTOR_ICON_SIZE} from '../../config/Constants';
import SectionTitle from '../../components/headings/SectionTitle';
import HorizontalDivider from '../../components/dividers/HorizontalDivider';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import ic_arrow_right_dark_green from '../../assets/icons/svg/ic_arrow_right_dark_green';

// Functional component
const Invoice = ({navigation}) => {
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
        {/* To */}
        <Animatable.Text
          animation="fadeInUp"
          delay={100}
          style={[styles.to, {color: theme.accent}]}>
          To, Jonathan Doe {'\n'}7th floor, Shivam Complex, Delhi
        </Animatable.Text>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Invoice issue details */}
        <View style={[styles.invoiceIssueDetailsWrapper]}>
          {/* Issued on */}
          <Animatable.View animation="fadeInUp" delay={300}>
            <Text
              style={[
                styles.issuedAndDueOnLabel,
                {color: theme.textLowContrast},
              ]}>
              Issued on
            </Text>
            <Text style={[styles.issuedAndDueDate, {color: theme.accent}]}>
              Mar 10, 2024
            </Text>
          </Animatable.View>

          {/* Logo & pay mode wrapper */}
          <Animatable.View
            animation="bounceIn"
            delay={500}
            style={[styles.logoAndPayModeWrapper]}>
            <Image
              source={
                isLightTheme
                  ? require('../../assets/images/logos/logo_light.png')
                  : require('../../assets/images/logos/logo_dark.png')
              }
              style={styles.logo}
            />
            <Text
              style={[styles.payModeLabel, {color: theme.textHighContrast}]}>
              Pay Mode
            </Text>
            <Text style={[styles.payMode, {color: theme.textLowContrast}]}>
              Cash on delivery
            </Text>
          </Animatable.View>

          {/* Due on */}
          <Animatable.View
            animation="fadeInUp"
            delay={700}
            style={[styles.dueOnWrapper]}>
            <Text
              style={[
                styles.issuedAndDueOnLabel,
                {color: theme.textLowContrast},
              ]}>
              Due on
            </Text>
            <Text style={[styles.issuedAndDueDate, {color: theme.accent}]}>
              Apr 17, 2024
            </Text>
          </Animatable.View>
        </View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />
        {/* Section title component */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <SectionTitle title="Ordered items" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Ordered product link */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <TouchableOpacity style={styles.orderedProductWrapper}>
            <View style={styles.orderedProductImageAndDetailsWrapper}>
              {/* Product image wrapper */}
              <View
                style={[
                  styles.orderedProductImageWrapper,
                  {backgroundColor: theme.secondary},
                ]}>
                <Image
                  style={styles.productImage}
                  source={require('../../assets/images/products/300_x_400.png')}
                />
              </View>

              {/* Product details */}
              <View style={styles.orderedProductDetailsWrapper}>
                <Text
                  style={[
                    styles.orderedProductTitle,
                    {color: theme.textHighContrast},
                  ]}
                  numberOfLines={1}>
                  Strelitza Nicolai
                </Text>
                <Text
                  style={[
                    styles.orderedProductQty,
                    {color: theme.textLowContrast},
                  ]}>
                  1 x $35.00
                </Text>
              </View>
            </View>

            {/* Arrow icon */}
            <SvgXml
              xml={ic_arrow_right_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </TouchableOpacity>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Ordered product link */}
        <Animatable.View animation="fadeInUp" delay={1500}>
          <TouchableOpacity style={styles.orderedProductWrapper}>
            <View style={styles.orderedProductImageAndDetailsWrapper}>
              {/* Product image wrapper */}
              <View
                style={[
                  styles.orderedProductImageWrapper,
                  {backgroundColor: theme.secondary},
                ]}>
                <Image
                  style={styles.productImage}
                  source={require('../../assets/images/products/300_x_400.png')}
                />
              </View>

              {/* Product details */}
              <View style={styles.orderedProductDetailsWrapper}>
                <Text
                  style={[
                    styles.orderedProductTitle,
                    {color: theme.textHighContrast},
                  ]}
                  numberOfLines={1}>
                  Alocasia Odora
                </Text>
                <Text
                  style={[
                    styles.orderedProductQty,
                    {color: theme.textLowContrast},
                  ]}>
                  1 x $25.57
                </Text>
              </View>
            </View>

            {/* Arrow icon */}
            <SvgXml
              xml={ic_arrow_right_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </TouchableOpacity>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <Animatable.View animation="fadeInUp" delay={1700}>
          <SectionTitle title="Invoice total" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={1900}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Subtotal wrapper */}
        <Animatable.View animation="fadeInUp" delay={2100} style={styles.row}>
          <Text style={[styles.rowLabel, {color: theme.textLowContrast}]}>
            Subtotal
          </Text>
          <Text style={[styles.rowAmount, {color: theme.textHighContrast}]}>
            $60.57
          </Text>
        </Animatable.View>

        {/* Spacer */}
        <View style={styles.verticalSpacer} />

        {/* Shipping cost wrapper */}
        <Animatable.View animation="fadeInUp" delay={2300} style={styles.row}>
          <Text
            style={[
              styles.rowLabel,
              {
                color: theme.textLowContrast,
              },
            ]}>
            Shipping cost
          </Text>
          <Text style={[styles.rowAmount, {color: theme.textHighContrast}]}>
            $10.07
          </Text>
        </Animatable.View>

        {/* Spacer */}
        <View style={styles.verticalSpacer} />

        {/* Total payable wrapper */}
        <Animatable.View animation="fadeInUp" delay={2500} style={styles.row}>
          <Text style={[styles.rowLabel, {color: theme.textLowContrast}]}>
            Total payable
          </Text>
          <Text style={[styles.rowAmount, {color: theme.textHighContrast}]}>
            $70.64
          </Text>
        </Animatable.View>

        {/* Spacer */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={2700}>
          <Button label="Download" />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Invoice;
