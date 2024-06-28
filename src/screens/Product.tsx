import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {text} from '../text';
import {alert} from '../alert';
import {hooks} from '../hooks';
import {items} from '../items';
import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {product} from '../product';
import {components} from '../components';
import {queryHooks} from '../store/slices/apiSlice';
import {addToCart} from '../store/slices/cartSlice';
import {ProductScreenProps} from '../types/ScreenProps';
import {ProductType, ViewableItemsChanged} from '../types';

const Product: React.FC<ProductScreenProps> = ({route}) => {
  const {item} = route.params;
  const {responsiveHeight} = utils;

  const user = hooks.useAppSelector(state => state.userSlice.user);

  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onViewableItemsChanged = useRef((info: ViewableItemsChanged) => {
    const index = info.viewableItems[0]?.index ?? 0;
    setActiveIndex(index);
  }).current;

  const cart = hooks.useAppSelector(state => state.cartSlice.list);
  const exist = (item: ProductType) => cart.find(i => i.id === item.id);

  // ############ QUERIES ############ //

  const {
    data: colorsData,
    error: colorsError,
    isLoading: colorsLoading,
  } = queryHooks.useGetColorsQuery();

  const {
    data: reviewsData,
    error: reviewsError,
    isLoading: reviewsLoading,
    refetch: refetchReviews,
  } = queryHooks.useGetReviewsQuery(item?.id || 0);

  const {
    data: ordersData,
    error: ordersError,
    isLoading: ordersLoading,
  } = queryHooks.useGetOrdersQuery(user?.id || 0);

  const ifInOrderExist = ordersData?.orders.find((order: any) =>
    order.products.find((product: ProductType) => product.id === item.id),
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetchReviews();
    });

    return unsubscribe;
  }, [navigation]);

  // ############ STATUS ############ //

  const isError = colorsError || reviewsError;
  const isLoading = colorsLoading || reviewsLoading;

  const [selectedColor, setSelectedColor] = useState<string>(item.color || '');

  const colors = colorsData?.colors?.filter(color =>
    item.colors?.includes(color.name),
  );

  const modifedItem = {...item, color: selectedColor};

  // ############ COMPONENTS ############ //

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        logoIcon={true}
        goBackIcon={true}
        basketIcon={true}
        bottomLine={true}
      />
    );
  };

  const renderImages = (): JSX.Element => {
    return (
      <FlatList
        bounces={false}
        horizontal={true}
        data={item.images}
        pagingEnabled={true}
        style={{flexGrow: 0}}
        viewabilityConfig={viewabilityConfig}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({item}) => {
          return (
            <custom.Image
              resizeMode='contain'
              source={{uri: item}}
              style={{
                aspectRatio: 375 / 500,
                width: theme.sizes.deviceWidth,
                backgroundColor: theme.colors.imageBackground,
              }}
            />
          );
        }}
      />
    );
  };

  const renderCarousel = (): JSX.Element | null => {
    const renderIndicator = (): JSX.Element | null => {
      if (item.images.length > 1) {
        return (
          <View
            style={{
              bottom: 31,
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              alignSelf: 'center',
            }}
          >
            {item.images.map((_, current, array) => {
              const last = current === array.length - 1;
              return (
                <View
                  key={current}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor:
                      activeIndex === current
                        ? theme.colors.mainColor
                        : theme.colors.white,
                    borderColor:
                      activeIndex === current
                        ? theme.colors.mainColor
                        : theme.colors.antiFlashWhite,
                    marginRight: last ? 0 : 10,
                    borderWidth: 1,
                  }}
                />
              );
            })}
          </View>
        );
      }

      return null;
    };

    const renderInWishlist = (): JSX.Element => {
      return (
        <product.ProductInWishlist
          item={item}
          containerStyle={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            paddingHorizontal: 20,
            paddingVertical: 24,
          }}
          version={2}
        />
      );
    };

    if (item.images.length > 0) {
      return (
        <View style={{marginBottom: utils.rsHeight(30)}}>
          {renderImages()}
          {renderIndicator()}
          {renderInWishlist()}
        </View>
      );
    }

    return null;
  };

  const renderNameWithRating = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.rsHeight(30),
          ...theme.flex.rowCenterSpaceBetween,
        }}
      >
        <text.H3 numberOfLines={1}>{item.name}</text.H3>
        <product.ProductRating rating={item.rating} />
      </View>
    );
  };

  const renderPriceWithQuantity = (): JSX.Element => {
    return (
      <View
        style={{
          marginLeft: 20,
          paddingLeft: 20,
          marginBottom: 30,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderBottomWidth: 1,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderColor: theme.colors.antiFlashWhite,
          ...theme.flex.rowCenterSpaceBetween,
        }}
      >
        <Text
          style={{
            ...theme.fonts.DM_Sans_700Bold,
            fontSize: Platform.OS === 'ios' ? 20 : 18,
            color: theme.colors.mainColor,
          }}
        >
          ${item.price}
        </Text>
        <product.ProductCounterInner item={modifedItem} />
      </View>
    );
  };

  const renderColors = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <text.H5
          style={{
            color: theme.colors.mainColor,
            marginRight: 32,
            marginTop: 10,
            marginBottom: utils.rsHeight(20),
          }}
        >
          Color
        </text.H5>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          {colors?.map((color, index) => {
            const colorItem = colorsData?.colors.find(
              item => item.name === color.name,
            );
            const code: string = colorItem ? colorItem.code : '';
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: code,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  if (!exist(item)) {
                    setSelectedColor(color.name);
                  }

                  if (exist(item)) {
                    alert.alreadyAdded();
                  }
                }}
              >
                {selectedColor === color.name && <svg.CheckSvg />}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 30,
        }}
      >
        <text.H5 style={{marginBottom: 14, color: theme.colors.mainColor}}>
          Description
        </text.H5>
        <text.T16
          style={{
            color: theme.colors.textColor,
            marginBottom: utils.responsiveHeight(14),
          }}
          numberOfLines={6}
        >
          {item.description}
        </text.T16>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Description', {
              description: item.description,
              title: item.name,
            });
          }}
        >
          <svg.ReadMoreSvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderReviews = (): JSX.Element | null => {
    if (!reviewsData?.reviews.length) return null;

    const reversedReviews = [...reviewsData.reviews].reverse();
    const slice = reversedReviews.slice(0, 2);

    return (
      <View style={{paddingLeft: 20}}>
        <components.BlockHeading
          title={`Reviews (${reviewsData?.reviews.length})`}
          containerStyle={{marginRight: 20, marginBottom: responsiveHeight(20)}}
          viewAllOnPress={() => {
            navigation.navigate('Reviews', {reviews: reviewsData?.reviews});
          }}
          viewAllVisible={reversedReviews.length > 2}
        />
        {slice.map((item: any, index: number, array: any) => {
          const isLast = index === array.length - 1;
          return (
            <items.ReviewItem
              key={item.id.toString()}
              item={item}
              isLast={isLast}
            />
          );
        })}
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <View style={{padding: 20}}>
        <components.Button
          title='+ ADd to cart'
          onPress={() => {
            if (exist(item)) {
              alert.alreadyAdded();
            }
            if (!exist(item)) {
              dispatch(addToCart(modifedItem));
            }
          }}
          containerStyle={{
            paddingBottom: ifInOrderExist ? responsiveHeight(14) : 0,
          }}
        />
        {ifInOrderExist && (
          <components.Button
            title='Leave a review'
            touchableOpacityStyle={{backgroundColor: theme.colors.pastelMint}}
            onPress={() => {
              navigation.navigate('LeaveAReview', {productId: item.id});
            }}
            textStyle={{color: theme.colors.steelTeal}}
          />
        )}
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    if (isError) return <components.Error />;
    if (isLoading) return <components.Loader />;

    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        {renderCarousel()}
        {renderNameWithRating()}
        {renderPriceWithQuantity()}
        {renderColors()}
        {renderDescription()}
        {renderReviews()}
        {renderButton()}
      </ScrollView>
    );
  };

  // ############ RENDER ############ //

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default Product;
