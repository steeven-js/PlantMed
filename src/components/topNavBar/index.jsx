import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../constants';
import styles from './styles';

const TopNavBar = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <MenuIcon name="menu" size={30} color="#fff" onPress={() => navigation.openDrawer()} />
            <Text style={styles.textTopNavBar}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Plantes médicinales')}>
                <Image source={icons.plante} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

export default TopNavBar;
