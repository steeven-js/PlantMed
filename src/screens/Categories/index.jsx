import { useContext } from 'react';
import { FlatList, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Category from '../../components/cards/Category';
import CategoriesData from '../../data/CategoriesData';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Categories = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Flatlist */}
            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={styles.flatListWrapper}
            >
                <FlatList
                    data={CategoriesData}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContentContainerStyle}
                    renderItem={({ item }) => (
                        <Category
                            id={item.id}
                            categoryImage={item.categoryImage}
                            categoryName={item.categoryName}
                            onPress={() =>
                                navigation.navigate('List View Products')
                            }
                        />
                    )}
                />
            </Animatable.View>
        </View>
    );
};

// Exporting
export default Categories;
