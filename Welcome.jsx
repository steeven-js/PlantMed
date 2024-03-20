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
            <Text>Ceci est la deuxième page d'information.</Text>
        </View>,
        <View style={styles.pageContent} key={3}>
            <Text style={styles.title}>Prêt à commencer ?</Text>
            <Text>Ceci est la dernière page d'information.</Text>
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
