import { useContext } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { scale } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';

import GridViewProduct from '../../components/cards/GridViewProduct';
import { STANDARD_SPACING } from '../../config/Constants';
import GridViewProductsData from '../../data/GridViewProductsData';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const GridViewProducts = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Flatgrid wrapper */}
            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={styles.flatGridWrapper}
            >
                {/* Flatgrid */}
                <FlatGrid
                    itemDimension={scale(130)}
                    data={GridViewProductsData}
                    style={styles.flatGrid}
                    spacing={STANDARD_SPACING * 3}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <GridViewProduct
                            productImage={item.productImage}
                            productTitle={item.productTitle}
                            productPrice={item.productPrice}
                            rating={item.rating}
                            onPress={() => navigation.navigate('Product')}
                        />
                    )}
                />
            </Animatable.View>
        </View>
    );
};

// Exporting
export default GridViewProducts;
