import { useNavigation } from '@react-navigation/native';
import { useCallback, useContext } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SvgXml } from 'react-native-svg';

import ic_info_dark_green from '../../assets/icons/svg/ic_info_dark_green';
import ic_mail_dark_green from '../../assets/icons/svg/ic_mail_dark_green';
import ic_smile_dark_green from '../../assets/icons/svg/ic_smile_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import { SupportData } from '../../data/AppData';
import ic_chat_dark_green from '../../assets/icons/svg/ic_chat_dark_green';

// Functional component
const Support = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Getting theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Data
    const { hedaer, subHeader, item } = SupportData;

    // Navigate to the chats screen
    const _navigateToChatsScreen = useCallback(
        () => navigation.navigate('Chats'),
        [navigation],
    );

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Header */}
            <Animatable.View
                delay={100}
                animation="fadeInDown"
                style={[styles.header, { backgroundColor: theme.accent }]}
            >
                {/* Title */}
                <Animatable.Text
                    delay={300}
                    animation="fadeInUp"
                    style={styles.needHelpLabel}
                >
                    {hedaer[0].label1}
                </Animatable.Text>

            </Animatable.View>

            {/* Support content wrapper */}
            <Animatable.View
                delay={500}
                animation="fadeInUp"
                style={styles.supportContentWrapper}
            >
                {/* Support list item */}
                <Animatable.View delay={2300} animation="fadeInUp">
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[
                            styles.supportListItem,
                            { backgroundColor: theme.primary },
                        ]}
                        onPress={_navigateToChatsScreen}>
                        {/* Support icon wrapper */}
                        <View
                            style={[
                                styles.supportIconWrapper,
                                { backgroundColor: theme.accentLightest },
                            ]}>
                            <SvgXml
                                xml={ic_chat_dark_green}
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
                                    { color: theme.textHighContrast },
                                ]}>
                                Live Chat
                            </Text>

                            {/* Subtitle */}
                            <Text
                                style={[
                                    styles.supportTypeTitleInfo,
                                    { color: theme.textLowContrast },
                                ]}>
                                Start a Conversation right now!
                            </Text>
                        </View>
                    </TouchableOpacity>
                </Animatable.View>

                {/* Support content header */}
                <Animatable.View
                    delay={700}
                    animation="fadeInUp"
                    style={styles.supportContentWrapperHeader}
                >
                    <Animatable.View
                        delay={900}
                        animation="fadeInUp"
                        style={[
                            styles.questionAndIconWrapper,
                            {
                                backgroundColor: theme.accentLightest,
                            },
                        ]}
                    >
                        <Animatable.Text
                            delay={1100}
                            animation="fadeInUp"
                            style={[styles.question, { color: theme.accent }]}
                        >
                            {subHeader[0].label}
                        </Animatable.Text>

                        <Animatable.View delay={1300} animation="fadeInUp">
                            <SvgXml
                                xml={ic_smile_dark_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        </Animatable.View>
                    </Animatable.View>

                    <Animatable.Text
                        delay={1500}
                        animation="fadeInUp"
                        style={[styles.info, { color: theme.textLowContrast, marginTop: 10 }]}
                    >
                        {subHeader[1].label}
                    </Animatable.Text>
                </Animatable.View>

                {/* Scroll view wrapper */}
                <Animatable.View
                    delay={1700}
                    animation="fadeInUp"
                    style={[
                        styles.scrollViewWrapper,
                        { backgroundColor: theme.secondary },
                    ]}
                >
                    {/* Support list items scroll view */}
                    <ScrollView
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={
                            styles.scrollViewContentContainer
                        }
                    >
                        {/* Support list item */}

                        {/* Support list item */}
                        <Animatable.View delay={1900} animation="fadeInUp">
                            <TouchableOpacity
                                activeOpacity={1}
                                style={[
                                    styles.supportListItem,
                                    { backgroundColor: theme.primary },
                                ]}
                                onPress={() => {
                                    navigation.navigate('ContactUs', {
                                        screenTitle: 'Nous contacter',
                                    });
                                }}
                            >
                                {/* Support icon wrapper */}
                                <View
                                    style={[
                                        styles.supportIconWrapper,
                                        {
                                            backgroundColor:
                                                theme.accentLightest,
                                        },
                                    ]}
                                >
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
                                            { color: theme.textHighContrast },
                                        ]}
                                    >
                                        {item[0].label}
                                    </Text>
                                    {/* Subtitle */}
                                    <Text
                                        style={[
                                            styles.supportTypeTitleInfo,
                                            { color: theme.textLowContrast },
                                        ]}
                                    >
                                        A{' '}
                                        <Text
                                            style={[
                                                styles.mailId,
                                                { color: theme.accent },
                                            ]}
                                        >
                                            {item[0].email}
                                        </Text>
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </Animatable.View>

                        {/* Support list item */}
                        <Animatable.View delay={2100} animation="fadeInUp">
                            <TouchableOpacity
                                activeOpacity={1}
                                style={[
                                    styles.supportListItem,
                                    { backgroundColor: theme.primary },
                                ]}
                                onPress={() => {
                                    navigation.navigate('Faqs', {
                                        screenTitle: 'FAQs',
                                    });
                                }}
                            >
                                {/* Support icon wrapper */}
                                <View
                                    style={[
                                        styles.supportIconWrapper,
                                        {
                                            backgroundColor:
                                                theme.accentLightest,
                                        },
                                    ]}
                                >
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
                                            { color: theme.textHighContrast },
                                        ]}
                                    >
                                        {item[1].label}
                                    </Text>
                                    {/* Subtitle */}
                                    <Text
                                        style={[
                                            styles.supportTypeTitleInfo,
                                            { color: theme.textLowContrast },
                                        ]}
                                    >
                                        {item[1].info}
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
