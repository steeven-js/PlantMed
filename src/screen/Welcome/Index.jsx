import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../../components/buttons/Button';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../config/Colors';
import styles from './styles';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';

const Welcome = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const navigation = useNavigation();

    const handlePageChange = (index) => {
        setCurrentPage(index);
    };

    const handleButtonPress = () => {
        navigation.navigate('Home');
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
                <WelcomePage1 />
                <WelcomePage2 />
                <WelcomePage3
                    isCheckboxChecked={isCheckboxChecked}
                    onCheckboxToggle={handleCheckboxToggle}
                    isButtonDisabled={isButtonDisabled}
                    onButtonPress={handleButtonPress}
                />
            </Swiper>
        </View>
    );
};

const WelcomePage1 = () => (
    <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]}>
        <Animatable.View
            animation="fadeInUp"
            delay={100}
            style={[styles.formWrapper, { backgroundColor: COLORS.primary }]}>
            <View style={[styles.logoWrapper, { backgroundColor: COLORS.primary }]}>
                <Image
                    source={require('../../assets/images/logos/logo_light.png')}
                    style={styles.logo}
                />
            </View>
            <ScreenInfo info="Bienvenue sur PlantMed !" />

            <View style={styles.verticalSpacer} />
            <View style={styles.verticalSpacer} />

            <ScreenInfo info="PlantMed est votre compagnon ultime pour explorer les vertus des plantes médicinales et découvrir leur utilisation dans divers remèdes naturels.
        Que vous soyez un passionné de phytothérapie ou simplement curieux des bienfaits de la nature, cette application est conçue pour vous fournir des informations précieuses et fiables sur une grande variété de plantes médicinales." />
        </Animatable.View>
    </View>
);

const WelcomePage2 = () => (
    <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]}>
        <Animatable.View
            animation="fadeInUp"
            delay={100}
            style={[styles.formWrapper, { backgroundColor: COLORS.primary }]}>
            <View style={[styles.logoWrapper, { backgroundColor: COLORS.primary }]}>
                <Image
                    source={require('../../assets/images/logos/logo_light.png')}
                    style={styles.logo}
                />
            </View>
            <ScreenInfo info="Informations importantes !" />

            <View style={styles.verticalSpacer} />
            <View style={styles.verticalSpacer} />

            <ScreenInfo info="Cette application est destinée à la découverte, à la recherche et à la documentation de plantes médicinales.
            Elle ne remplace en aucun cas les conseils médicaux professionnels." />
        </Animatable.View>
    </View>
);

const WelcomePage3 = ({ isCheckboxChecked, onCheckboxToggle, isButtonDisabled, onButtonPress }) => (
    <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]}>
        <Animatable.View
            animation="fadeInUp"
            delay={100}
            style={[styles.formWrapper, { backgroundColor: COLORS.primary }]}>
            <View style={[styles.logoWrapper, { backgroundColor: COLORS.primary }]}>
                <Image
                    source={require('../../assets/images/logos/logo_light.png')}
                    style={styles.logo}
                />
            </View>
            <ScreenInfo info="En cas de maladie ou de condition médicale, consultez immédiatement un médecin. !" />

            <View style={styles.verticalSpacer} />
            <View style={styles.verticalSpacer} />

            <ScreenInfo info="Nous déclinons toute responsabilité en cas de mauvaise utilisation des informations fournies dans cette application.
            Vous êtes responsable de votre propre santé et de vos décisions en matière de traitement." />

            <View style={styles.verticalSpacer} />
            <View style={styles.verticalSpacer} />

            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={onCheckboxToggle} style={[styles.checkbox, styles.flexRow]}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="red"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: 'red' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                        isChecked={isCheckboxChecked}
                        onPress={onCheckboxToggle}
                    />
                    <ScreenInfo info="J'ai compris les informations." />
                </TouchableOpacity>
            </View>

            <View style={styles.verticalSpacer} />
            <View style={styles.verticalSpacer} />

            {!isButtonDisabled && (
                <Button
                    label="Compris"
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
    onButtonPress: PropTypes.func.isRequired
};

export default Welcome;
