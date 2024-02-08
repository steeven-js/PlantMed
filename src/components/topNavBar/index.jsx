import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../constants';
import styles from './styles';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';

const TopNavBar = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.Touch} >
                <MenuIcon name="menu" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" onPress={() => navigation.openDrawer()} />
            </TouchableOpacity>
            <Text style={styles.textTopNavBar}>{title}</Text>
            <TouchableOpacity style={styles.Touch} onPress={() => navigation.navigate('Plantes')}>
                <Image source={icons.plante} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

export default TopNavBar;
