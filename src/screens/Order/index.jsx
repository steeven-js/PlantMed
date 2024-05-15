import styles from './styles';
import {
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import {SvgXml} from 'react-native-svg';
import {useContext, useState} from 'react';
import ic_star from '../../assets/icons/svg/ic_star';
import Button from '../../components/buttons/Button';
import {IndependentColors} from '../../config/Colors';
import * as Animatable from 'react-native-animatable';
import ic_mastercard from '../../assets/icons/svg/ic_mastercard';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import SectionTitle from '../../components/headings/SectionTitle';
import ic_checkmark_white from '../../assets/icons/svg/ic_checkmark_white';
import HorizontalDivider from '../../components/dividers/HorizontalDivider';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ic_paper_dark_green from '../../assets/icons/svg/ic_paper_dark_green';
import ic_location_dark_green from '../../assets/icons/svg/ic_location_dark_green';
import ic_arrow_right_dark_green from '../../assets/icons/svg/ic_arrow_right_dark_green';

// Functional component
const Order = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [statusStepsProgressPercentage, setStatusStepsProgressPercentage] =
    useState('55%');
  const [statusSteps, setStatusSteps] = useState([
    {
      stepNumber: 1,
      stepLabel: 'Order placed',
      date: 'Feb 24 2024',
      time: '10:40 am',
      isDone: true,
    },
    {
      stepNumber: 2,
      stepLabel: 'Item(s) packed',
      date: 'Feb 24 2024',
      time: '12:15 pm',
      isDone: true,
    },
    {
      stepNumber: 3,
      stepLabel: 'Shipped',
      date: 'Feb 24 2024',
      time: '06:29 pm',
      isDone: true,
    },
    {
      stepNumber: 4,
      stepLabel: 'Out for delivery',
      date: null,
      time: null,
      isDone: false,
    },
    {
      stepNumber: 5,
      stepLabel: 'Delivered',
      date: null,
      time: null,
      isDone: false,
    },
  ]);

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Scroll View */}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        <Animatable.View
          animation="fadeInUp"
          delay={100}
          style={styles.productCard}>
          {/* Product image wrapper */}
          <View
            style={[
              styles.productImageWrapper,
              {backgroundColor: theme.secondary},
            ]}>
            {/* Product image */}
            <Image
              source={require('../../assets/images/products/300_x_400.png')}
              style={styles.productImage}
            />

            {/* More items count */}
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.moreProductsCountWrapper,
                {backgroundColor: theme.primary},
              ]}>
              <Text
                style={[
                  styles.moreProductsCount,
                  {color: theme.textHighContrast},
                ]}>
                +3
              </Text>
            </TouchableOpacity>
          </View>

          {/* Order details wrapper */}
          <View style={styles.orderDetailsWrapper}>
            <View>
              <Text
                numberOfLines={1}
                style={[styles.productTitle, {color: theme.textHighContrast}]}>
                Strelitza Nicolai
              </Text>
              <View style={styles.productStatusAndRatingWrapper}>
                <View
                  style={[
                    styles.statusWrapper,
                    {backgroundColor: '#00a89610'},
                  ]}>
                  <Text style={[styles.status, {color: '#00a896'}]}>
                    On the way
                  </Text>
                </View>

                <View style={styles.starAndRatingWrapper}>
                  <SvgXml
                    xml={ic_star}
                    width={STANDARD_VECTOR_ICON_SIZE * 0.75}
                    height={STANDARD_VECTOR_ICON_SIZE * 0.75}
                  />
                  <Text style={[styles.rating, {color: theme.accent}]}>
                    5.0
                  </Text>
                </View>
              </View>
            </View>

            {/* Date */}
            <View style={styles.datesWrapper}>
              <Text style={[styles.date, {color: theme.textLowContrast}]}>
                25 March, 2024
              </Text>
              <Text
                style={[styles.dateDivider, {color: theme.textLowContrast}]}>
                |
              </Text>
              <Text style={[styles.date, {color: theme.textLowContrast}]}>
                29 March, 2024
              </Text>
            </View>
          </View>
        </Animatable.View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <SectionTitle title="Track your order" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={500}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Order tracking link */}
        <Animatable.View animation="fadeInUp" delay={700}>
          <TouchableOpacity style={styles.linkWrapper}>
            <View style={styles.linkIconAndLabelsWrapper}>
              {/* Link icon wrapper */}
              <View
                style={[
                  styles.linkIconWrapper,
                  {backgroundColor: theme.secondary},
                ]}>
                <SvgXml
                  xml={ic_location_dark_green}
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              </View>

              {/* Link labels */}
              <View style={styles.linkLabelsWrapper}>
                <Text
                  style={[styles.linkLabel, {color: theme.textHighContrast}]}
                  numberOfLines={1}>
                  Your order is out for delivery
                </Text>
                <Text
                  style={[styles.linkSubLabel, {color: theme.textLowContrast}]}
                  numberOfLines={1}>
                  Current location: 3A street, Rama complex
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
        <Animatable.View animation="fadeInUp" delay={900}>
          <SectionTitle title="Payment method" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={1100}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Payment method link */}
        <Animatable.View animation="fadeInUp" delay={1300}>
          <TouchableOpacity style={styles.linkWrapper}>
            <View style={styles.linkIconAndLabelsWrapper}>
              {/* Link icon wrapper */}
              <View
                style={[
                  styles.linkIconWrapper,
                  {backgroundColor: theme.secondary},
                ]}>
                <SvgXml
                  xml={ic_mastercard}
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              </View>

              {/* Link labels */}
              <View style={styles.linkLabelsWrapper}>
                <Text
                  style={[styles.linkLabel, {color: theme.textHighContrast}]}
                  numberOfLines={1}>
                  Master card
                </Text>
                <Text
                  style={[styles.linkSubLabel, {color: theme.textLowContrast}]}>
                  ********8926
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
        <Animatable.View animation="fadeInUp" delay={1500}>
          <SectionTitle title="Invoice" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={1700}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Payment method link */}
        <Animatable.View animation="fadeInUp" delay={1900}>
          <TouchableOpacity
            style={styles.linkWrapper}
            onPress={() => navigation.navigate('Invoice')}>
            <View style={styles.linkIconAndLabelsWrapper}>
              {/* Link icon wrapper */}
              <View
                style={[
                  styles.linkIconWrapper,
                  {backgroundColor: theme.secondary},
                ]}>
                <SvgXml
                  xml={ic_paper_dark_green}
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              </View>

              {/* Link labels */}
              <View style={styles.linkLabelsWrapper}>
                <Text
                  style={[styles.linkLabel, {color: theme.textHighContrast}]}
                  numberOfLines={1}>
                  Invoice No.
                </Text>
                <Text
                  style={[styles.linkSubLabel, {color: theme.textLowContrast}]}>
                  INV#61727478
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
        <Animatable.View animation="fadeInUp" delay={2100}>
          <SectionTitle title="Order total" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={2300}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Subtotal wrapper */}
        <Animatable.View animation="fadeInUp" delay={2500} style={styles.row}>
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
        <Animatable.View animation="fadeInUp" delay={2700} style={styles.row}>
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
        <Animatable.View animation="fadeInUp" delay={2900} style={styles.row}>
          <Text style={[styles.rowLabel, {color: theme.textLowContrast}]}>
            Total payable
          </Text>
          <Text style={[styles.rowAmount, {color: theme.textHighContrast}]}>
            $70.64
          </Text>
        </Animatable.View>

        {/* Spacer */}
        <View style={styles.verticalSpacer} />

        {/* Section title component */}
        <Animatable.View animation="fadeInUp" delay={3100}>
          <SectionTitle title="Order status" />
        </Animatable.View>

        {/* Horizontal divider component */}
        <Animatable.View animation="fadeInUp" delay={3300}>
          <HorizontalDivider />
        </Animatable.View>

        {/* Order status wrapper */}
        <Animatable.View
          animation="fadeInUp"
          delay={3500}
          style={styles.orderStatusWrapper}>
          <View style={styles.orderStatusStepsWrapper}>
            <View
              style={[
                styles.orderStatusStepsVerticalLine,
                {backgroundColor: theme.secondary},
              ]}>
              <View
                style={[
                  styles.orderStatusStepsVerticalLineProgressBar,
                  {
                    height: statusStepsProgressPercentage,
                    backgroundColor: theme.accent,
                  },
                ]}
              />
            </View>
            <View style={styles.orderStatusStepsVerticalWrapper}>
              {statusSteps.map((item, index) => (
                <View style={styles.orderStatusStepWrapper} key={index}>
                  <View
                    style={[
                      styles.orderStatusStepNumberWrapper,
                      {
                        backgroundColor: item.isDone
                          ? theme.accent
                          : theme.secondary,
                      },
                    ]}>
                    {!item.isDone ? (
                      <Text
                        style={[
                          styles.orderStatusStepNumber,
                          {
                            color: item.isDone
                              ? IndependentColors.white
                              : theme.textLowContrast,
                          },
                        ]}>
                        {item.stepNumber}
                      </Text>
                    ) : (
                      <SvgXml
                        xml={ic_checkmark_white}
                        width={STANDARD_VECTOR_ICON_SIZE * 0.65}
                        height={STANDARD_VECTOR_ICON_SIZE * 0.65}
                      />
                    )}
                  </View>
                  <View style={styles.orderStatusStepLabelWrapper}>
                    <Text
                      style={[
                        styles.orderStatusStepLabel,
                        {
                          color: item.isDone
                            ? theme.textHighContrast
                            : theme.textLowContrast,
                          fontFamily: item.isDone
                            ? POPPINS_SEMIBOLD
                            : POPPINS_REGULAR,
                        },
                      ]}>
                      {item.stepLabel}
                    </Text>
                    {item.date && item.time !== null ? (
                      <Text style={[styles.dateTime, {color: theme.accent}]}>
                        {item.date}, {item.time}
                      </Text>
                    ) : null}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </Animatable.View>

        {/* Spacer */}
        <View style={styles.verticalSpacer} />

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={3700}>
          <Button label="Cancel order" />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Order;
