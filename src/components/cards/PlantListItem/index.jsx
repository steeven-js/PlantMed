import React from 'react';
import { TouchableOpacity } from 'react-native';

import PlantGridView from '../PlantGridView';

const PlantListItem = ({ item, navigation }) => {
    const imageURL = item.media.length > 0 ? item.media[0].original_url : null;

    // const plantNavigate = () => { navigation.navigate('Product', { plantId: item.id }) };
    const plantNavigate = () => {
        navigation.navigate('PlantView', {
            plantId: item.id,
            plantName: item.name,
        });
    };
    // const plantNavigate = () => { console.log(item.id) };

    return (
        <TouchableOpacity onPress={plantNavigate}>
            <PlantGridView
                plantImage={
                    imageURL
                        ? { uri: imageURL }
                        : require('../../../assets/images/noImage/no-image.png')
                }
                plantTitle={item.name}
                // onPress={() => navigation.navigate('Product')}
                onPress={plantNavigate}
            />
        </TouchableOpacity>
    );
};

export default PlantListItem;
