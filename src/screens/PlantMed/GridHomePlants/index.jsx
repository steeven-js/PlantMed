import styles from './styles';
import { useContext } from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import * as Animatable from 'react-native-animatable';
import { STANDARD_SPACING } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import { useSelector } from 'react-redux';
import GridViewPlant from '../../../components/cards/GridViewPlant';

const GridHomePlants = ({ navigation, route }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const plantData = useSelector(state => state.plants.plantsData);

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
            <GridViewPlant
              plantImage={
                item.media && item.media.length > 0
                  ? { uri: item.media[0].original_url }
                  : null
              }
              plantTitle={item.name}
              onPress={() => navigation.navigate('PlantView', { plantId: item.id })}
            />
          )}
        />
      </Animatable.View>
    </View>
  );
};

export default GridHomePlants;
