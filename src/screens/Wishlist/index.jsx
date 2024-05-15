import {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import WishlistData from '../../data/WishlistData';
import WishlistProduct from '../../components/cards/WishlistProduct';
import Button from '../../components/buttons/Button';
import styles from './styles';

// Functional component
const Wishlist = ({navigation}) => {
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
          {WishlistData.map((item, index) => (
            <WishlistProduct
              key={item.id}
              productImage={item.productImage}
              productTitle={item.productTitle}
              productPrice={item.productPrice}
            />
          ))}
        </Animatable.View>

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <Button label="Add all to cart" />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Wishlist;
