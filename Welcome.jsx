// Welcome.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('Home');
    };

    // Contenu de chaque page
    const pagesContent = [
        <View style={styles.pageContent} key={1}>
            <Text style={styles.title}>Bienvenue sur notre application !</Text>
            <Text>Ceci est la première page d'information.</Text>
        </View>,
        <View style={styles.pageContent} key={2}>
            <Text style={styles.title}>Informations importantes</Text>
            <Text>
                Cette application est destinée à la découverte, à la recherche et à la documentation de plantes médicinales.
                Elle ne remplace en aucun cas les conseils médicaux professionnels.
            </Text>
        </View>,
        <View style={styles.pageContent} key={3}>
            <Text>
                En cas de maladie ou de condition médicale, consultez immédiatement un médecin.
            </Text>
            <Text>
                Nous déclinons toute responsabilité en cas de mauvaise utilisation des informations fournies dans cette application.
                Vous êtes responsable de votre propre santé et de vos décisions en matière de traitement.
            </Text>
            <Text style={styles.readyText}>Prêt à commencer ?</Text>
            <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                <Text style={styles.buttonText}>Commencer</Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    readyText: {
        fontSize: 16,
        marginTop: 20,
    },
    pagination: {
        bottom: 10,
    },
    dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: '#007aff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#007aff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Welcome;
