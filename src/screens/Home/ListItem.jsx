import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useSearchState } from '../../hooks';
import styles from './styles';

const ListItem = ({ item, title, theme }) => {
    const navigation = useNavigation();
    const { setSearch } = useSearchState();

    const handlePress = () => {
        // Réinitialiser la valeur de l'input de recherche à une chaîne vide
        setSearch('');

        if (item && item.name) {
            if (title === 'Plantes') {
                navigation.navigate('PlantMed Stack', {
                    screen: 'PlantView',
                    params: { plantId: item.id, plantName: item.name },
                });
            } else if (title === 'Symptômes') {
                navigation.navigate('PlantMed Stack', {
                    screen: 'SymptomView',
                    params: { symptomId: item.id, symptomName: item.name },
                });
            } else {
                console.log('Unknown title');
            }
        } else {
            console.log('No item name');
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.categoryLabelWrapper,
                { backgroundColor: theme.secondary, marginVertical: 5 },
            ]}
            onPress={handlePress}
        >
            {item && item.name && (
                <Text
                    style={[
                        styles.categoryLabel,
                        {
                            color: theme.textLowContrast,
                        },
                    ]}
                >
                    {item.name}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default ListItem;
