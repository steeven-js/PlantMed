import styles from './styles';
import {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import ListViewProductsData from '../../data/ListViewProductsData';
import ListViewProduct from '../../components/cards/ListViewProduct';

// Functional component
const ListViewProducts = ({navigation}) => {
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
          {ListViewProductsData.map((item, index) => (
            <View key={item.id}>
              {/* Wishlist card component */}
              <ListViewProduct
                productImage={item.productImage}
                productTitle={item.productTitle}
                productPrice={item.productPrice}
                rating={item.rating}
                isLastItem={
                  ListViewProductsData.length === index + 1 ? true : false
                }
                onPress={() => navigation.navigate('Product')}
              />
            </View>
          ))}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default ListViewProducts;
