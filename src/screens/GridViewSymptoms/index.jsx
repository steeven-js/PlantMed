import styles from './styles';
import { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import * as Animatable from 'react-native-animatable';
import { STANDARD_SPACING } from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import GridViewSymptom from '../../components/cards/GridViewSymptom';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Functional component
const GridViewSymptoms = ({ route }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const symptomsData = useSelector((state) => state.symptoms.symptomsData);

  // Récupérer la navigation
  const navigation = useNavigation();

  useEffect(() => {
  }, [symptomsData]);

  // Returning
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
            <GridViewSymptom
              symptomImage={
                item.media && item.media.length > 0
                  ? { uri: item.media[0].original_url }
                  : null
              }
              symptomTitle={item.name}
              onPress={() => navigation.navigate('SymptomView', { symptomId: item.id })}
            />
          )}
        />
      </Animatable.View>
    </View>
  );
};

// Exporting
export default GridViewSymptoms;
