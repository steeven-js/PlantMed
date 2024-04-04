import React from 'react';
import { useContext, useRef, useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_heart_dark_green from '../../assets/icons/svg/ic_heart_dark_green';
import ic_minus_dark_green from '../../assets/icons/svg/ic_minus_dark_green';
import ic_plus_dark_green from '../../assets/icons/svg/ic_plus_dark_green';
import ic_star from '../../assets/icons/svg/ic_star';
import {
    SCREEN_WIDTH,
    STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import GridViewProductsData from '../../data/GridViewProductsData';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Product = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Getting theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Local states
    const [activeScrollIndex, setActiveScrollIndex] = useState(0);

    // useRef hooks
    const verticalFlatList = useRef(null);
    const horizontalFlatList = useRef(null);

    // Scrolling FlatLists
    const scrollToIndex = (index) => {
        // Updating state
        setActiveScrollIndex(index);

        // Scrolling active thumbnail image to the specified index
        verticalFlatList?.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5,
        });

        // Scrolling large image to specific offset based on active scroll index
        horizontalFlatList?.current?.scrollToOffset({
            offset: SCREEN_WIDTH * 0.5 * index,
            animated: true,
        });
    };

    // Method to render large image
    const _renderLargeImages = ({ item, index }) => (
        <View key={index} style={[styles.largeImageWrapper]}>
            <Image source={item.productImage} style={styles.largeImage} />
        </View>
    );

    // Method to render thumbnail image
    const _renderThumbnailImages = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => scrollToIndex(index)}
            key={index}
            style={[
                styles.thumbnailImageWrapper,
                {
                    backgroundColor:
                        activeScrollIndex === index
                            ? theme.accentLightest
                            : theme.primary,
                    borderColor:
                        activeScrollIndex === index
                            ? theme.accent
                            : theme.accentLightest,
                },
            ]}
        >
            <Image source={item.productImage} style={styles.thumbnailImage} />
        </TouchableOpacity>
    );

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <View style={styles.flatListsWrapper}>
                {/* Vertical FlatList */}
                <View
                    style={[
                        styles.verticalFlatListWrapper,
                        { backgroundColor: theme.secondary },
                    ]}
                >
                    <FlatList
                        ref={verticalFlatList}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        data={GridViewProductsData}
                        keyExtractor={(item) => item.id}
                        scrollEnabled
                        renderItem={_renderThumbnailImages}
                        style={styles.verticalFlatList}
                        contentContainerStyle={
                            styles.verticalFlatListContentContainerStyle
                        }
                    />
                </View>

                {/* Horizontal FlatList */}
                <View
                    style={[
                        styles.horizontalFlatListWrapper,
                        { backgroundColor: theme.accentLightest },
                    ]}
                >
                    <FlatList
                        ref={horizontalFlatList}
                        bounces={false}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        data={GridViewProductsData}
                        keyExtractor={(item) => item.id}
                        horizontal
                        scrollEnabled
                        renderItem={_renderLargeImages}
                        onMomentumScrollEnd={(ev) => {
                            scrollToIndex(
                                Math.round(
                                    ev.nativeEvent.contentOffset.x /
                                        (SCREEN_WIDTH * 0.5),
                                ),
                            );
                        }}
                    />
                </View>
            </View>
            {/* Product details wrapper */}
            <View style={styles.productDetailsOuterWrapper}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    style={[
                        styles.productDetailsScrollView,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    <View style={styles.productTitleAndHeartIconWrapper}>
                        <View style={styles.productTitleWrapper}>
                            <Text
                                style={[
                                    styles.productTitle,
                                    { color: theme.textHighContrast },
                                ]}
                                numberOfLines={1}
                            >
                                Alocasia macrorrhiza Stingray Plant
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={[
                                styles.heartIconWrapper,
                                { backgroundColor: theme.secondary },
                            ]}
                        >
                            <SvgXml
                                xml={ic_heart_dark_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Rating */}
                    <TouchableOpacity
                        style={styles.ratingWrapper}
                        onPress={() => navigation.navigate('Product Reviews')}
                    >
                        <SvgXml
                            xml={ic_star}
                            width={STANDARD_VECTOR_ICON_SIZE * 0.9}
                            height={STANDARD_VECTOR_ICON_SIZE * 0.9}
                        />
                        <Text style={[styles.rating, { color: theme.accent }]}>
                            4.8
                        </Text>
                        <Text
                            style={[
                                styles.outOf,
                                { color: theme.textLowContrast },
                            ]}
                        >
                            out of
                        </Text>
                        <Text
                            style={[
                                styles.ratingThreshold,
                                { color: theme.textHighContrast },
                            ]}
                        >
                            5.0
                        </Text>
                        <Text
                            style={[
                                styles.totalRating,
                                { color: theme.textHighContrast },
                            ]}
                        >
                            (177)
                        </Text>
                    </TouchableOpacity>

                    {/* Pricing and quantity */}
                    <View>
                        <Text
                            style={[
                                styles.sectionTitle,
                                { color: theme.textHighContrast },
                            ]}
                        >
                            Price
                        </Text>
                        <View style={styles.productPriceAndQuantityWrapper}>
                            <Text
                                style={[
                                    styles.productPrice,
                                    { color: theme.accent },
                                ]}
                            >
                                $10.07
                            </Text>
                            {/* Quantity wrapper */}
                            <View
                                style={[
                                    styles.productQuantityWrapper,
                                    { borderColor: theme.accent },
                                ]}
                            >
                                {/* Plus icon wrapper */}
                                <TouchableOpacity
                                    style={[
                                        styles.plusIconWrapper,
                                        { backgroundColor: theme.secondary },
                                    ]}
                                >
                                    <SvgXml
                                        xml={ic_plus_dark_green}
                                        width={STANDARD_VECTOR_ICON_SIZE * 0.9}
                                        height={STANDARD_VECTOR_ICON_SIZE * 0.9}
                                    />
                                </TouchableOpacity>

                                {/* Quantity */}
                                <Text
                                    style={[
                                        styles.productQuantity,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    1
                                </Text>

                                {/* Minus icon wrapper */}
                                <TouchableOpacity
                                    style={[
                                        styles.minusIconWrapper,
                                        { backgroundColor: theme.secondary },
                                    ]}
                                >
                                    <SvgXml
                                        xml={ic_minus_dark_green}
                                        width={STANDARD_VECTOR_ICON_SIZE * 0.9}
                                        height={STANDARD_VECTOR_ICON_SIZE * 0.9}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Plant care */}
                    <Text
                        style={[
                            styles.sectionTitle,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        Plant care
                    </Text>

                    {/* Horizontal ScrollView */}
                    <View>
                        <ScrollView
                            horizontal
                            bounces={false}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.plantCareWrapper}>
                                <Text
                                    style={[
                                        styles.plantCareTitle,
                                        { color: theme.accent },
                                    ]}
                                >
                                    Temperature
                                </Text>
                                <Text
                                    style={[
                                        styles.plantCareAmount,
                                        { color: theme.textLowContrast },
                                    ]}
                                >
                                    25 - 30 degree celsius
                                </Text>
                            </View>

                            <View style={styles.plantCareWrapper}>
                                <Text
                                    style={[
                                        styles.plantCareTitle,
                                        { color: theme.accent },
                                    ]}
                                >
                                    Water
                                </Text>
                                <Text
                                    style={[
                                        styles.plantCareAmount,
                                        { color: theme.textLowContrast },
                                    ]}
                                >
                                    Medium(2 times/day)
                                </Text>
                            </View>

                            <View style={styles.plantCareWrapper}>
                                <Text
                                    style={[
                                        styles.plantCareTitle,
                                        { color: theme.accent },
                                    ]}
                                >
                                    Humidity
                                </Text>
                                <Text
                                    style={[
                                        styles.plantCareAmount,
                                        { color: theme.textLowContrast },
                                    ]}
                                >
                                    25 - 30 degree celsius
                                </Text>
                            </View>

                            <View style={styles.plantCareWrapper}>
                                <Text
                                    style={[
                                        styles.plantCareTitle,
                                        { color: theme.accent },
                                    ]}
                                >
                                    Sunlight
                                </Text>
                                <Text
                                    style={[
                                        styles.plantCareAmount,
                                        { color: theme.textLowContrast },
                                    ]}
                                >
                                    Very low(Upto 1 hour)
                                </Text>
                            </View>
                        </ScrollView>
                    </View>

                    {/* Description */}
                    <Text
                        style={[
                            styles.sectionTitle,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        Description
                    </Text>

                    <Text
                        style={[
                            styles.description,
                            { color: theme.textLowContrast },
                        ]}
                    >
                        Alocasia macrorrhiza 'Stingray' is a unique and striking
                        tropical plant known for its distinct leaf shape
                        resembling a stingray. It belongs to the Araceae family
                        and is native to Southeast Asia. 'Stingray' is a
                        cultivar of the Alocasia macrorrhiza species and is
                        popular among plant enthusiasts for its attractive
                        foliage.
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
};

// Exporting
export default Product;
