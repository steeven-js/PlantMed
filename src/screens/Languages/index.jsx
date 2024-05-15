import {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Language from '../../components/cards/Language';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import LanguagesData from '../../data/LanguagesData';
import styles from './styles';

// Functional component
const Languages = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Scroll View */}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        <Animatable.View animation="fadeInUp" delay={100}>
          {LanguagesData.map((language, index) => (
            <Language
              key={language.id}
              flagImage={language.flagImage}
              languageTitle={language.languageTitle}
              isChecked={language.isChecked}
              isLastItem={LanguagesData.length === index + 1 ? true : false}
            />
          ))}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Languages;
