import { useContext } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Button from '../../components/buttons/Button';
import CartProduct from '../../components/cards/CartProduct';
import HorizontalDivider from '../../components/dividers/HorizontalDivider';
import SectionTitle from '../../components/headings/SectionTitle';
import { IndependentColors } from '../../config/Colors';
import CartData from '../../data/CartData';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Checkout = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Scrollview */}
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
                {/* Section title component */}
                <Animatable.View animation="fadeInUp" delay={100}>
                    <SectionTitle title="Order summary" />
                </Animatable.View>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                <Animatable.View animation="fadeInUp" delay={300}>
                    {/* Cart data mapping */}
                    {CartData.map((item, index) => (
                        <View key={item.id}>
                            {/* Cart product component */}
                            <CartProduct
                                productImage={item.productImage}
                                productTitle={item.productTitle}
                                productPrice={item.productPrice}
                                productQuantity={item.productQuantity}
                            />
                        </View>
                    ))}
                </Animatable.View>

                {/* Section title component */}
                <Animatable.View animation="fadeInUp" delay={500}>
                    <SectionTitle title="Coupon code" />
                </Animatable.View>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Text input wrapper */}
                <Animatable.View
                    animation="fadeInUp"
                    delay={700}
                    style={[
                        styles.textInputWrapper,
                        {
                            borderColor: theme.secondaryDark,
                            backgroundColor: theme.secondary,
                        },
                    ]}
                >
                    {/* Text input */}
                    <TextInput
                        placeholder="Enter coupon code"
                        placeholderTextColor={theme.textLowContrast}
                        style={[
                            styles.textInput,
                            { color: theme.textHighContrast },
                        ]}
                    />

                    {/* Button */}
                    <TouchableOpacity
                        style={[
                            styles.applyCouponButton,
                            { backgroundColor: theme.accent },
                        ]}
                    >
                        <Text
                            style={[
                                styles.applyCouponButtonLabel,
                                { color: IndependentColors.white },
                            ]}
                        >
                            Apply coupon
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>

                {/* Spacer */}
                <View style={styles.verticalSpacer} />

                {/* Section title component */}
                <Animatable.View animation="fadeInUp" delay={900}>
                    <SectionTitle title="Checkout total" />
                </Animatable.View>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Subtotal wrapper */}
                <Animatable.View
                    animation="fadeInUp"
                    delay={1100}
                    style={styles.row}
                >
                    <Text
                        style={[
                            styles.rowLabel,
                            { color: theme.textLowContrast },
                        ]}
                    >
                        Subtotal
                    </Text>
                    <Text
                        style={[
                            styles.rowAmount,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        $60.57
                    </Text>
                </Animatable.View>

                {/* Spacer */}
                <View style={styles.verticalSpacer} />

                {/* Shipping cost wrapper */}
                <Animatable.View
                    animation="fadeInUp"
                    delay={1300}
                    style={styles.row}
                >
                    <Text
                        style={[
                            styles.rowLabel,
                            {
                                color: theme.textLowContrast,
                            },
                        ]}
                    >
                        Shipping cost
                    </Text>
                    <Text
                        style={[
                            styles.rowAmount,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        $10.07
                    </Text>
                </Animatable.View>

                {/* Spacer */}
                <View style={styles.verticalSpacer} />

                {/* Total payable wrapper */}
                <Animatable.View
                    animation="fadeInUp"
                    delay={1500}
                    style={styles.row}
                >
                    <Text
                        style={[
                            styles.rowLabel,
                            { color: theme.textLowContrast },
                        ]}
                    >
                        Total payable
                    </Text>
                    <Text
                        style={[
                            styles.rowAmount,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        $70.64
                    </Text>
                </Animatable.View>

                {/* Horizontal divider component */}
                <Animatable.View animation="fadeInUp" delay={1700}>
                    <HorizontalDivider />
                </Animatable.View>

                {/* Button component */}
                <Animatable.View animation="fadeInUp" delay={1900}>
                    <Button
                        label="Pay now"
                        onPress={() => navigation.navigate('Payment Methods')}
                    />
                </Animatable.View>
            </ScrollView>
        </View>
    );
};

// Exporting
export default Checkout;
