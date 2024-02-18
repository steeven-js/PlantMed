import { View, ScrollView, Text, Linking, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useCallback } from 'react';
import * as Animatable from 'react-native-animatable';
import { COLORS } from '../../config/Colors';
import { useNavigation } from '@react-navigation/native';
import { sourceUrl } from '../../data/Url';
import ic_info_dark_green from '../../assets/icons/svg/ic_info_dark_green';
import styles from './styles';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';

const Source = () => {
    const navigation = useNavigation();
    const url = sourceUrl;

    const _openURL = useCallback(() => {
        Linking.openURL(url);
        // Redirection vers HomeStack Home après l'ouverture du lien (ajoutez cela si nécessaire)
        navigation.navigate('HomeStack', { screen: 'Home' });
    }, [url, navigation]);

    return (
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.primary }]}>
            {/* Scrollview */}
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContentContainer}>
                {/* Links container */}
                <Animatable.View
                    delay={100}
                    animation="fadeInUp"
                    useNativeDriver={true}
                    style={[
                        styles.navigationLinksWrapper,
                        { backgroundColor: COLORS.secondary },
                    ]}>

                    <TouchableOpacity
                        activeOpacity={1}
                        style={[
                            styles.supportListItem,
                            { backgroundColor: COLORS.primary },
                        ]}
                        onPress={_openURL}>
                        {/* Support icon wrapper */}
                        <View
                            style={[
                                styles.supportIconWrapper,
                                { backgroundColor: COLORS.accentLightest },
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
                                    { color: COLORS.textHighContrast },
                                ]}>
                                Source
                            </Text>
                            {/* Subtitle */}
                            <Text
                                style={[
                                    styles.supportTypeTitleInfo,
                                    { color: COLORS.textLowContrast },
                                ]}>
                                <Text style={[styles.mailId, { color: COLORS.accent }]}>
                                    {url}
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    
                </Animatable.View>
            </ScrollView>
        </View>
    );
};

export default Source;
