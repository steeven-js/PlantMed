import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  Platform,
  ViewToken,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import {text} from '../../text';
import {items} from '../../items';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {components} from '../../components';
import {queryHooks} from '../../store/slices/apiSlice';

type ViewableItemsChanged = {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
};

const Home: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const {
    data: plantsData,
    error: plantsError,
    isLoading: plantsLoading,
    refetch: refetchPlants,
  } = queryHooks.useGetPlantsQuery();

  const {
    data: bannersData,
    error: bannersError,
    isLoading: bannersLoading,
    refetch: refetchBanners,
  } = queryHooks.useGetBannersQuery();

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
    refetch: refetchCategories,
  } = queryHooks.useGetCategoriesQuery();

  const {
    data: carouselData,
    error: carouselError,
    isLoading: carouselLoading,
    refetch: refetchCarousel,
  } = queryHooks.useGetCarouselQuery();

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onViewableItemsChanged = useRef((info: ViewableItemsChanged) => {
    const index = info.viewableItems[0]?.index ?? 0;
    setActiveIndex(index);
  }).current;

  let bestSellers =
    plantsData?.plants.filter(item => item.isBestSeller === true) || [];

  let featured =
    plantsData?.plants.filter(item => item.isFeatured === true) || [];

  let carousel = carouselData?.carousel || [];

  let categories = categoriesData?.categories || [];

  let banner = bannersData?.banners || [];

  // banner = [];
  // featured = [];
  // carousel = [];
  // categories = [];
  // bestSellers = [];

  const isData =
    banner.length === 0 &&
    featured.length === 0 &&
    categories.length === 0 &&
    bestSellers.length === 0 &&
    carousel.length === 0;
  const isError =
    plantsError || bannersError || categoriesError || carouselError;
  const isLoading =
    bannersLoading || plantsLoading || categoriesLoading || carouselLoading;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    Promise.all([
      refetchPlants(),
      refetchBanners(),
      refetchCarousel(),
      refetchCategories(),
    ])
      .then(() => setRefreshing(false))
      .catch(error => {
        console.error(error);
        setRefreshing(false);
      });
  }, []);

  const renderCarouselItem = ({item}) => {
    const products = plantsData?.plants.filter(plant => {
      return plant.promotion === item.promotion;
    });

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          if (products?.length === 0) {
            Alert.alert(
              'Products do not exist',
              'Unfortunately, there are no products with the name of such promotion.',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('OK Pressed'),
                },
              ],
            );

            return;
          }

          navigation.navigate('Shop', {
            title: 'Shop',
            products: products || [],
          });
        }}
      >
        <custom.ImageBackground
          source={{uri: item.image}}
          style={{
            width: theme.sizes.deviceWidth,
            aspectRatio: 375 / 500,
            paddingHorizontal: 20,
            paddingTop: 40,
            paddingBottom: 20,
            justifyContent: 'space-between',
          }}
          imageStyle={{backgroundColor: theme.colors.imageBackground}}
        >
          <View style={{marginBottom: 30}}>
            <text.H1 style={{textTransform: 'capitalize'}}>
              {item.title_line_1}
            </text.H1>
            <text.H1 style={{textTransform: 'capitalize'}}>
              {item.title_line_2}
            </text.H1>
            <View
              style={{
                marginTop: 30,
                backgroundColor: theme.colors.pastelMint,
                alignSelf: 'flex-start',
                paddingHorizontal: 20,
                paddingVertical: 8,
                borderRadius: 50,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <svg.ShoppingCartSvg />
              <Text
                style={{
                  ...theme.fonts.DM_Sans_500Medium,
                  fontSize: Platform.OS === 'ios' ? 12 : 10,
                  lineHeight: Platform.OS === 'ios' ? 12 * 1.7 : 10 * 1.7,
                  color: theme.colors.mainColor,
                }}
                numberOfLines={1}
              >
                Shop Now
              </Text>
            </View>
          </View>
        </custom.ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderFlatList = () => {
    return (
      <FlatList
        data={carousel}
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={{flexGrow: 0}}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={renderCarouselItem}
      />
    );
  };

  const renderDots = (): JSX.Element | null => {
    if (carousel.length && carousel.length > 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            bottom: 0,
            position: 'absolute',
          }}
        >
          {carouselData?.carousel.map((_, current, array) => {
            const last = current === array.length - 1;
            return (
              <View
                key={current}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 6,
                  backgroundColor:
                    activeIndex === current
                      ? theme.colors.mainColor
                      : theme.colors.white,
                  marginRight: last ? 0 : 10,
                }}
              />
            );
          })}
        </View>
      );
    }

    return null;
  };

  const renderCarousel = (): JSX.Element | null => {
    if (carouselData?.carousel.length && carouselData?.carousel.length > 0) {
      return (
        <View
          style={{
            width: theme.sizes.deviceWidth,
            marginBottom: utils.responsiveHeight(20),
          }}
        >
          {renderFlatList()}
          {renderDots()}
        </View>
      );
    }

    return null;
  };

  const renderCategories = (): JSX.Element => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        style={{
          marginBottom: utils.responsiveHeight(50),
          marginTop: carouselData?.carousel.length
            ? 0
            : utils.responsiveHeight(20),
          flexGrow: 0,
        }}
      >
        {categories.map((item, index, array) => {
          const isLast = index === array.length - 1;
          const dataFilter = plantsData?.plants.filter(
            e => e && e.categories.includes(item.name),
          );
          const qty = dataFilter?.length ?? 0;
          return (
            <items.CategoryItem
              item={item}
              isLast={isLast}
              qty={qty}
              key={item.id.toString()}
              dataFilter={dataFilter}
            />
          );
        })}
      </ScrollView>
    );
  };

  const renderBestSellers = (): JSX.Element | null => {
    if (bestSellers?.length === 0) return null;

    return (
      <View style={{marginBottom: utils.responsiveHeight(50)}}>
        <components.BlockHeading
          title='Best sellers'
          containerStyle={{
            paddingHorizontal: 20,
            marginBottom: 11,
          }}
          viewAllOnPress={() => {
            navigation.navigate('Shop', {
              title: 'Best sellers',
              products: bestSellers,
            });
          }}
        />
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            paddingLeft: 20,
          }}
          showsHorizontalScrollIndicator={false}
        >
          {bestSellers?.map((item, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <items.ProductCard
                item={item}
                key={item.id.toString()}
                version={3}
                isLast={isLast}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderBanner = (): JSX.Element | null => {
    if (banner?.length === 0) return null;

    const bannerPromotion = bannersData?.banners[0]?.promotion;
    const bannerLength = bannersData?.banners?.length ?? 0;
    const products =
      plantsData?.plants.filter(item => item.promotion === bannerPromotion) ??
      [];

    if (bannerLength > 0) {
      return (
        <TouchableOpacity
          style={{marginBottom: utils.responsiveHeight(50)}}
          onPress={() => {
            if (products.length === 0) {
              Alert.alert('No data', 'No data available for this promotion');
              return;
            }

            navigation.navigate('Shop', {
              title: 'Shop',
              products: products,
            });
          }}
        >
          <custom.Image
            source={{uri: banner[0]?.image}}
            style={{
              width: theme.sizes.deviceWidth - 20,
              aspectRatio: 355 / 200,
            }}
            imageStyle={{
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              backgroundColor: theme.colors.imageBackground,
            }}
            resizeMode='cover'
          />
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderFeatured = (): JSX.Element | null => {
    if (featured?.length === 0) return null;

    return (
      <View style={{marginBottom: utils.responsiveHeight(20)}}>
        <components.BlockHeading
          title='Featured products'
          containerStyle={{
            paddingHorizontal: 20,
            marginBottom: utils.rsHeight(11),
          }}
          viewAllOnPress={() => {
            navigation.navigate('Shop', {
              title: 'Featured',
              products: featured,
            });
          }}
        />
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            paddingLeft: 20,
          }}
          showsHorizontalScrollIndicator={false}
        >
          {featured?.map((item, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <items.ProductCard
                item={item}
                key={item.id.toString()}
                version={2}
                isLast={isLast}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    if (isError) return <components.Error />;
    if (isData) return <components.NoData />;
    if (isLoading) return <components.Loader />;

    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: utils.responsiveHeight(20),
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        {renderCarousel()}
        {renderCategories()}
        {renderBestSellers()}
        {renderBanner()}
        {renderFeatured()}
      </ScrollView>
    );
  };

  return renderContent();
};

export default Home;
