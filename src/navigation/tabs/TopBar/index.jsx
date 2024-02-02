import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import StarIcon from 'react-native-vector-icons/AntDesign';
import PlantIcon from 'react-native-vector-icons/FontAwesome6';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';

import styles from './styles';

const TopBar = ({ navigation, route, title }) => {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    if (route && route.name === 'Symptomes') {
        title = 'Usages thérapeutiques';
    } else if (route && route.name === 'Plantes') {
        title = 'Plantes médicinales';
    } else if (route && route.name === 'Favoris') {
        title = 'Favoris';
    }

    return (
        <View style={styles.topNav}
        >
            {/* Div au-dessus des onglets */}
            <View style={styles.TopNavBar}>
                <MenuIcon name="menu" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" onPress={() => navigation.openDrawer()} />
                <Text style={styles.textTopNavBar}> {title} </Text>
                <SearchIcon name="search" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" />
            </View>

            {/* Onglets */}
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigateToScreen('Symptomes')} style={[styles.tab, route && route.name === 'Symptomes' && styles.activeTab1]}>
                    <HeartIcon name="heart" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Plantes')} style={[styles.tab, route && route.name === 'Plantes' && styles.activeTab2]}>
                    <PlantIcon name="plant-wilt" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Favoris')} style={[styles.tab, route && route.name === 'Favoris' && styles.activeTab3]}>
                    <StarIcon name="star" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TopBar;
