import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Swiper from 'react-native-swiper';

import { ThemeContext } from '../../theming/contexts/ThemeContext';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import WelcomeData from '../../data/Welcome';
import Button from '../../components/buttons/Button';
import styles from './styles';


const Welcome = () => {
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;

    const [currentPage, setCurrentPage] = useState(0);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const navigation = useNavigation();

    const handlePageChange = (index) => {
        setCurrentPage(index);
    };

    const handleButtonPress = () => {
        // Réinitialiser l'historique des routes et naviguer vers l'écran d'accueil
        navigation.reset({
            index: 0,
            routes: [{ name: 'LaunchApp' }],
        });
    };

    const handleCheckboxToggle = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };

    const isButtonDisabled = !isCheckboxChecked;

    return (
        <View style={styles.container}>
            <Swiper
                loop={false}
                index={currentPage}
                onIndexChanged={handlePageChange}
                showsPagination
                paginationStyle={styles.pagination}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
            >
                <WelcomePage1 theme={theme} />
                <WelcomePage2 theme={theme} />
                <WelcomePage3
                    theme={theme}
                    isCheckboxChecked={isCheckboxChecked}
                    onCheckboxToggle={handleCheckboxToggle}
                    isButtonDisabled={isButtonDisabled}
                    onButtonPress={handleButtonPress}
                />
            </Swiper>
        </View>
    );
};

const WelcomePage1 = ({ theme }) => (
    <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
        <Animatable.View
            animation="fadeInUp"
            delay={100}
            style={[styles.formWrapper, { backgroundColor: theme.primary }]}
        >
            <View
                style={[styles.logoWrapper, { backgroundColor: theme.primary }]}
            >
                <Image
                    source={require('../../assets/images/logos/logo_light.png')}
                    style={styles.logo}
                />
            </View>
            <ScreenInfo info={WelcomeData[0].info} />

            <View style={styles.verticalSpacer} />

            <ScreenInfo info={WelcomeData[1].info} />
        </Animatable.View>
    </View>
);

const WelcomePage2 = ({ theme }) => (
    <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
        <Animatable.View
            animation="fadeInUp"
            delay={100}
            style={[styles.formWrapper, { backgroundColor: theme.primary }]}
        >
            <View
                style={[styles.logoWrapper, { backgroundColor: theme.primary }]}
            >
                <Image
                    source={require('../../assets/images/logos/logo_light.png')}
                    style={styles.logo}
                />
            </View>
            <ScreenInfo info={WelcomeData[2].info} />

            <View style={styles.verticalSpacer} />

            <ScreenInfo info={WelcomeData[3].info} />
        </Animatable.View>
    </View>
);

const WelcomePage3 = ({
    theme,
    isCheckboxChecked,
    onCheckboxToggle,
    isButtonDisabled,
    onButtonPress,
}) => (
    <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
        <Animatable.View
            animation="fadeInUp"
            delay={100}
            style={[styles.formWrapper, { backgroundColor: theme.primary }]}
        >
            <View
                style={[styles.logoWrapper, { backgroundColor: theme.primary }]}
            >
                <Image
                    source={require('../../assets/images/logos/logo_light.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.verticalSpacer} />

            <ScreenInfo info={WelcomeData[4].info} />

            <View style={styles.verticalSpacer} />

            <ScreenInfo info={WelcomeData[5].info} />

            <View style={styles.verticalSpacer} />

            <View style={styles.checkboxContainer}>
                <TouchableOpacity
                    onPress={onCheckboxToggle}
                    style={[styles.checkbox, styles.flexRow]}
                >
                    <BouncyCheckbox
                        size={25}
                        fillColor="red"
                        text={WelcomeData[6].checkbox}
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: 'red' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                        isChecked={isCheckboxChecked}
                        onPress={onCheckboxToggle}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.verticalSpacer} />

            {!isButtonDisabled && (
                <Button
                    label={WelcomeData[7].button}
                    onPress={onButtonPress}
                    disabled={isButtonDisabled}
                />
            )}
        </Animatable.View>
    </View>
);

WelcomePage3.propTypes = {
    isCheckboxChecked: PropTypes.bool.isRequired,
    onCheckboxToggle: PropTypes.func.isRequired,
    isButtonDisabled: PropTypes.bool.isRequired,
    onButtonPress: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
};

export default Welcome;
