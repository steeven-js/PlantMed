import styles from './styles';
import { useContext } from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import * as Animatable from 'react-native-animatable';
import { STANDARD_SPACING } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import { useSelector } from 'react-redux';
import GridViewSymptom from '../../../components/cards/GridViewSymptom';

const GridHomeSymptoms = ({ navigation, route }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const { symptomId } = route.params;
  const symptomData = useSelector((state) => state.symptoms.symptomsData.find(symptom => symptom.id === symptomId));

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
          data={symptomData}
          style={styles.flatGrid}
          spacing={STANDARD_SPACING * 3}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GridViewSymptom
              symptomImage={item.productImage}
              symptomTitle={item.productTitle}
              onPress={() => navigation.navigate('Product')}
            />
          )}
        />
      </Animatable.View>
    </View>
  );
};

export default GridHomeSymptoms;
