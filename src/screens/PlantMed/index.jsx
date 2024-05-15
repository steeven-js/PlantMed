import styles from './styles';
import { useContext, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import * as Animatable from 'react-native-animatable';
import { STANDARD_SPACING } from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import { useSelector } from 'react-redux';

const PlantMed = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    const symptomsData = useSelector((state) => state.symptoms.symptomsData);

    const plantsData = useSelector((state) => state.plants.plantsData);

    useEffect(() => {
    }, [symptomsData, plantsData]);

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Flatgrid wrapper */}
            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={styles.flatGridWrapper}>
                {/* Flatgrid */}
                <FlatGrid
                    itemDimension={scale(130)}
                    data={symptomsData}
                    style={styles.flatGrid}
                    spacing={STANDARD_SPACING * 3}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Symptom', { symptomId: item.id })}
                        >
                            <Text>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                {/* Flatgrid */}
                <FlatGrid
                    itemDimension={scale(130)}
                    data={plantsData}
                    style={styles.flatGrid}
                    spacing={STANDARD_SPACING * 3}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Plant', { plantId: item.id })}
                        >
                            <Text>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </Animatable.View>
        </View>
    );
};

export default PlantMed;
