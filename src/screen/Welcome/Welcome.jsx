// Welcome.js
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Image } from 'react-native';
import Button from '../../components/buttons/Button';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../config/Colors';
import styles from './styles';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';

const Welcome = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('Home');
    };

    // Contenu de chaque page
    const pagesContent = [
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]} key={1}>

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

        </View>,
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]} key={2}>

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

        </View>,
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]} key={3}>

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

                <Button
                    label="Compris"
                    onPress={handleButtonPress}
                />
            </Animatable.View>

        </View>,
    ];

    return (
        <View style={styles.container}>
            <Swiper
                loop={false}
                index={currentPage}
                showsPagination
                paginationStyle={styles.pagination}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
            >
                {pagesContent}
            </Swiper>
        </View>
    );
};

export default Welcome;
