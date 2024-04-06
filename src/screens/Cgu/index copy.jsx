import { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SvgXml } from 'react-native-svg';

import ic_disc_dark_green from '../../assets/icons/svg/ic_disc_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Policy = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Getting theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <Animatable.View animation="fadeInUp" delay={100}>
                {/* Scroll view */}
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={
                        styles.scrollViewContentContainerStyle
                    }
                >
                    {/* Last updated date */}
                    <Text
                        style={[styles.lastUpdateDate, { color: theme.accent }]}
                    >
                        Last updated on March 20, 2024
                    </Text>

                    {/* Policy title */}
                    <View style={styles.policyTitleWrapper}>
                        <SvgXml
                            xml={ic_disc_dark_green}
                            width={STANDARD_VECTOR_ICON_SIZE}
                            height={STANDARD_VECTOR_ICON_SIZE}
                        />
                        <Text
                            style={[
                                styles.policyTitle,
                                { color: theme.textHighContrast },
                            ]}
                        >
                            Policy details
                        </Text>
                    </View>

                    {/* Policy details */}
                    <Text
                        style={[
                            styles.policyDetails,
                            { color: theme.textLowContrast },
                        ]}
                    >
                        We value the trust you place in us and recognize the
                        importance of secure transactions and information
                        privacy. This Privacy Policy describes how PlatMart
                        Internet Private Limited and its affiliates
                        (collectively FoodBazaar, we, our, us”) collect, use,
                        share or otherwise process your personal information
                        through Nunova Furniture website
                        <Text style={{ color: theme.accent }}>
                            {' '}
                            www.plantmart.com{' '}
                        </Text>
                        , its mobile application, and m-site (hereinafter
                        referred to as the “Platform”).{'\n'}
                        {'\n'}While you may be able to browse certain sections
                        of the Platform without registering with us, however,
                        please note we do not offer any product/service under
                        this Platform outside India. By visiting this Platform,
                        providing your information or availing out
                        product/service, you expressly agree to be bound by the
                        terms and conditions of this Privacy Policy, the Terms
                        of Use and the applicable service/product terms and
                        conditions, and agree to be governed by the laws of
                        India including but not limited to the laws applicable
                        to data protection and privacy. If you do not agree
                        please do not use or access our Platform.
                    </Text>

                    {/* Policy title */}
                    <View style={styles.policyTitleWrapper}>
                        <SvgXml
                            xml={ic_disc_dark_green}
                            width={STANDARD_VECTOR_ICON_SIZE}
                            height={STANDARD_VECTOR_ICON_SIZE}
                        />
                        <Text
                            style={[
                                styles.policyTitle,
                                { color: theme.textHighContrast },
                            ]}
                        >
                            Collection of Your Information
                        </Text>
                    </View>

                    {/* Policy details */}
                    <Text
                        style={[
                            styles.policyDetails,
                            { color: theme.textLowContrast },
                        ]}
                    >
                        When you use our Platform, we collect and store your
                        information which is provided by you from time to time.
                        In general, you can browse the Platform without telling
                        us who you are or revealing any personal information
                        about yourself. Once you give us your personal
                        information, you are not anonymous to us. Where
                        possible, we indicate which fields are required and
                        which fields are optional. You always have the option to
                        not provide information by choosing not to use a
                        particular service, product or feature on the Platform.
                        {'\n'}
                        {'\n'}
                        We may track your buying behaviour, preferences, and
                        other information that you choose to provide on our
                        Platform. We use this information to do internal
                        research on our users' demographics, interests, and
                        behaviour to better understand, protect and serve our
                        users. This information is compiled and analysed on an
                        aggregated basis. This information may include the URL
                        that you just came from (whether this URL is on our
                        Platform or not), which URL you next go to (whether this
                        URL is on our Platform or not), your computer browser
                        information, and your IP address.
                    </Text>

                    {/* Policy title */}
                    <View style={styles.policyTitleWrapper}>
                        <SvgXml
                            xml={ic_disc_dark_green}
                            width={STANDARD_VECTOR_ICON_SIZE}
                            height={STANDARD_VECTOR_ICON_SIZE}
                        />
                        <Text
                            style={[
                                styles.policyTitle,
                                { color: theme.textHighContrast },
                            ]}
                        >
                            Use of Demographic / Profile Data
                        </Text>
                    </View>

                    {/* Policy details */}
                    <Text
                        style={[
                            styles.policyDetails,
                            { color: theme.textLowContrast },
                        ]}
                    >
                        We use your personal information to provide the product
                        and services you request. To the extent we use your
                        personal information to market to you, we will provide
                        you the ability to opt-out of such uses. We use your
                        personal information to assist sellers and business
                        partners in handling and fulfilling orders; enhancing
                        customer experience; resolve disputes; troubleshoot
                        problems; help promote a safe service; collect money;
                        measure consumer interest in our products and services;
                        inform you about online and offline offers, products,
                        services, and updates; customize and enhance your
                        experience; detect and protect us against error, fraud
                        and other criminal activity; enforce our terms and
                        conditions; and as otherwise described to you at the
                        time of collection of information.
                        {'\n'}
                        {'\n'}
                        With your consent, we will have access to your SMS,
                        contacts in your directory, location and device
                        information. We may also request you to provide your
                        PAN, GST Number, Government issued ID cards/number and
                        Know-Your-Customer (KYC) details to: (i) check your
                        eligibility for certain products and services including
                        but not limited to credit and payment products; (ii)
                        issue GST invoice for the products and services
                        purchased for your business requirements; (iii) enhance
                        your experience on the Platform and provide you access
                        to the products and services being offered by us,
                        sellers, affiliates or lending partners. You understand
                        that your access to these products/services may be
                        affected in the event consent is not provided to us.
                    </Text>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

// Exporting
export default Policy;
