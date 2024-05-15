import styles from './styles';
import {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import OrdersData from '../../data/OrdersData';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import OrderedProduct from '../../components/cards/OrderedProduct';

// Functional component
const Orders = ({navigation}) => {
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
        {/* Vertical spacer */}
        <Animatable.View animation="fadeInUp" delay={100}>
          {OrdersData.map((order, index) => (
            <View key={order.id}>
              {/* Ordered product card component */}
              <OrderedProduct
                productImage={order.productImage}
                productTitle={order.productTitle}
                moreProductsCount={order.moreProductsCount}
                status={order.status}
                statusTextColor={order.statusTextColor}
                statusBgColor={order.statusBgColor}
                rating={order.rating}
                orderDate={order.orderDate}
                deliveryDate={order.deliveryDate}
                onPress={() => navigation.navigate('Order')}
              />
            </View>
          ))}
        </Animatable.View>

        {/* Button component */}
        <Animatable.View animation="fadeInUp" delay={300}>
          <Button label="Continue shopping" />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Orders;
