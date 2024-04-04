import React from 'react';
import { TouchableOpacity } from 'react-native';

import SymptomGridView from '../SymptomGridView';

const SymptomsListItem = ({ item, navigation }) => {
    const imageURL = item.media.length > 0 ? item.media[0].original_url : null;

    const symtomNavigate = () => {
        navigation.navigate('SymptomView', {
            symptomId: item.id,
            symptomName: item.name,
        });
    };

    return (
        <TouchableOpacity onPress={symtomNavigate}>
            <SymptomGridView
                symptomImage={
                    imageURL
                        ? { uri: imageURL }
                        : require('../../../assets/images/noImage/no-image.png')
                }
                symptomTitle={item.name}
                onPress={symtomNavigate}
            />
        </TouchableOpacity>
    );
};

export default SymptomsListItem;
