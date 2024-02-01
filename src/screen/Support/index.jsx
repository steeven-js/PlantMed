import styles from './styles';
import {SvgXml} from 'react-native-svg';
import { useCallback} from 'react';
import * as Animatable from 'react-native-animatable';
import {STANDARD_VECTOR_ICON_SIZE} from '../../config/Constants';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import ic_mail_dark_green from '../../assets/icons/svg/ic_mail_dark_green';
import ic_info_dark_green from '../../assets/icons/svg/ic_info_dark_green';
import ic_smile_dark_green from '../../assets/icons/svg/ic_smile_dark_green';
import { COLORS } from '../../config/Colors';

// Functional component
const Support = ({navigation}) => {

  // Navigate to the contact screen
  const _navigateToContactScreen = useCallback(
    () => navigation.navigate('ContactUs'),
    [],
  );

  // Navigate to the Faqs screen
  const _navigateToFaqsScreen = useCallback(
    () => navigation.navigate('Faqs'),
    [],
  );

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: COLORS.primary}]}>
      {/* Header */}
      <Animatable.View
        delay={100}
        animation="fadeInDown"
        style={[styles.header, {backgroundColor: COLORS.accent}]}>
        {/* Title */}
        <Animatable.Text
          delay={300}
          animation="fadeInUp"
          style={styles.needHelpLabel}>
          Need Help?
        </Animatable.Text>

        {/* Title */}
        <Animatable.Text
          delay={500}
          animation="fadeInUp"
          style={styles.twentyFourSevenLabel}>
          24 X 7
        </Animatable.Text>

        {/* Title */}
        <Animatable.Text
          delay={700}
          animation="fadeInUp"
          style={styles.screenHeadingTitle}>
          Support
        </Animatable.Text>
      </Animatable.View>

      {/* Support content wrapper */}
      <Animatable.View
        delay={900}
        animation="fadeInUp"
        style={styles.supportContentWrapper}>
        {/* Support content header */}
        <Animatable.View
          delay={1100}
          animation="fadeInUp"
          style={styles.supportContentWrapperHeader}>
          <Animatable.View
            delay={1300}
            animation="fadeInUp"
            style={[
              styles.questionAndIconWrapper,
              {
                backgroundColor: COLORS.accentLightest,
              },
            ]}>
            <Animatable.Text
              delay={1500}
              animation="fadeInUp"
              style={[styles.question, {color: COLORS.accent}]}>
              Tell us how may we help you?
            </Animatable.Text>

            <Animatable.View delay={1700} animation="fadeInUp">
              <SvgXml
                xml={ic_smile_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            </Animatable.View>
          </Animatable.View>

          <Animatable.Text
            delay={1900}
            animation="fadeInUp"
            style={[styles.info, {color: COLORS.textLowContrast}]}>
            Our crew of superheroes are standing by {'\n'}for service & support!
          </Animatable.Text>
        </Animatable.View>

        {/* Scroll view wrapper */}
        <Animatable.View
          delay={2100}
          animation="fadeInUp"
          style={[
            styles.scrollViewWrapper,
            {backgroundColor: COLORS.secondary},
          ]}>
          {/* Support list items scroll view */}
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContentContainer}>

            {/* Support list item */}
            <Animatable.View delay={2500} animation="fadeInUp">
              <TouchableOpacity
                activeOpacity={1}
                style={[
                  styles.supportListItem,
                  {backgroundColor: COLORS.primary},
                ]}
                onPress={_navigateToContactScreen}>
                {/* Support icon wrapper */}
                <View
                  style={[
                    styles.supportIconWrapper,
                    {backgroundColor: COLORS.accentLightest},
                  ]}>
                  <SvgXml
                    xml={ic_mail_dark_green}
                    width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                    height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                  />
                </View>
                {/* Support title & subtitle wrapper */}
                <View>
                  {/* Title */}
                  <Text
                    style={[
                      styles.supportTypeTitle,
                      {color: COLORS.textHighContrast},
                    ]}>
                    Mail Us
                  </Text>
                  {/* Subtitle */}
                  <Text
                    style={[
                      styles.supportTypeTitleInfo,
                      {color: COLORS.textLowContrast},
                    ]}>
                    Mail us at{' '}
                    <Text style={[styles.mailId, {color: COLORS.accent}]}>
                      suuport@foodbazaar.com
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </Animatable.View>

            {/* Support list item */}
            <Animatable.View delay={2700} animation="fadeInUp">
              <TouchableOpacity
                activeOpacity={1}
                style={[
                  styles.supportListItem,
                  {backgroundColor: COLORS.primary},
                ]}
                onPress={_navigateToFaqsScreen}>
                {/* Support icon wrapper */}
                <View
                  style={[
                    styles.supportIconWrapper,
                    {backgroundColor: COLORS.accentLightest},
                  ]}>
                  <SvgXml
                    xml={ic_info_dark_green}
                    width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                    height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                  />
                </View>
                {/* Support title & subtitle wrapper */}
                <View>
                  {/* Title */}
                  <Text
                    style={[
                      styles.supportTypeTitle,
                      {color: COLORS.textHighContrast},
                    ]}>
                    FAQs
                  </Text>
                  {/* Subtitle */}
                  <Text
                    style={[
                      styles.supportTypeTitleInfo,
                      {color: COLORS.textLowContrast},
                    ]}>
                    Find intelligent answers instantly!
                  </Text>
                </View>
              </TouchableOpacity>
            </Animatable.View>
          </ScrollView>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Support;
