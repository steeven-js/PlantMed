import styles from './styles';
import {
    STANDARD_USER_AVATAR_WRAPPER_SIZE,
    STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import { useContext } from 'react';
import { SvgXml } from 'react-native-svg';
import Link from '../../components/links/Link';
import * as Animatable from 'react-native-animatable';
import av_woman_4 from '../../assets/avatars/svg/av_woman_4';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import SectionTitle from '../../components/headings/SectionTitle';
import GridViewProductsData from '../../data/GridViewProductsData';
import ic_drawer_menu from '../../assets/icons/svg/ic_drawer_menu';
import GridViewProduct from '../../components/cards/GridViewProduct';
import SearchTextInput from '../../components/inputs/SearchTextInput';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';

// Functional component
const Home = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <Animatable.View animation="fadeInUp" delay={100}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    {/* Header */}
                    <View style={styles.header}>
                        {/* Hamburger menu */}
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <SvgXml
                                xml={ic_drawer_menu}
                                width={STANDARD_VECTOR_ICON_SIZE * 2}
                                height={STANDARD_VECTOR_ICON_SIZE * 2}
                            />
                        </TouchableOpacity>

                        {/* Avatar */}
                        <SvgXml
                            xml={av_woman_4}
                            width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
                            height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
                        />
                    </View>

                    {/* Search text input component */}
                    <SearchTextInput />

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Banner 3 */}
                    <View style={styles.fullWidthBannerImageWrapper}>
                        <Image
                            source={require('../../assets/images/banners/home/808_x_338.png')}
                            style={styles.bannerImage}
                        />
                    </View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Section title & link wrapper */}
                    <View style={styles.sectionTitleAndLinkWrapper}>
                        {/* Section title component */}
                        <SectionTitle title="Best seller" />

                        {/* Link component */}
                        <Link
                            label="See all"
                            onPress={() => navigation.navigate('Grid View Products')}
                        />
                    </View>

                    {/* Horizontal scroll view */}
                    <View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            contentContainerStyle={
                                styles.horizontalScrollViewContentContainerStyle
                            }>
                            {GridViewProductsData.map((product, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <GridViewProduct
                                        productImage={product.productImage}
                                        productTitle={product.productTitle}
                                        productPrice={product.productPrice}
                                        rating={product.rating}
                                        onPress={() => navigation.navigate('Product')}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Banner 3 */}
                    <View style={styles.fullWidthBannerImageWrapper}>
                        <Image
                            source={require('../../assets/images/banners/home/808_x_338.png')}
                            style={styles.bannerImage}
                        />
                    </View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Section title & link wrapper */}
                    <View style={styles.sectionTitleAndLinkWrapper}>
                        {/* Section title component */}
                        <SectionTitle title="New arrivals" />

                        {/* Link component */}
                        <Link
                            label="See all"
                            onPress={() => navigation.navigate('Grid View Products')}
                        />
                    </View>

                    {/* Horizontal scroll view */}
                    <View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            contentContainerStyle={
                                styles.horizontalScrollViewContentContainerStyle
                            }>
                            {GridViewProductsData.map((product, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <GridViewProduct
                                        productImage={product.productImage}
                                        productTitle={product.productTitle}
                                        productPrice={product.productPrice}
                                        rating={product.rating}
                                        onPress={() => navigation.navigate('Product')}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                </ScrollView>
            </Animatable.View>
        </View>
    );
};

// Exporting
export default Home;
