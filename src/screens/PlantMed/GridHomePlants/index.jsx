import styles from './styles';
import { useContext } from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import * as Animatable from 'react-native-animatable';
import { STANDARD_SPACING } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import GridViewProduct from '../../../components/cards/GridViewProduct';
import { useSelector } from 'react-redux';

const GridHomePlants = ({ navigation, route }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const { plantId } = route.params;
  const plantData = useSelector(state => state.plants.plantsData.find(plant => plant.id === plantId));

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
          data={plantData}
          style={styles.flatGrid}
          spacing={STANDARD_SPACING * 3}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
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

export default GridHomePlants;
