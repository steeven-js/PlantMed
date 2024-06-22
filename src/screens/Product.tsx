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
  // console.log('item', item);
  const {responsiveHeight} = utils;

  const user = hooks.useAppSelector(state => state.userSlice.user);

  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();

  const [tab, setTab] = useState(0);

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
                // aspectRatio: 375 / 500,
                // aspectRatio: 335 / 165,
                aspectRatio: 700 / 500,
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

  const renderTabs = (): JSX.Element => {
    const tabs = ['Description', 'Propriétés', 'Usages', 'Précautions'];

    return (
      <View
        style={{
          ...theme.flex.rowCenterSpaceBetween,
          marginHorizontal: 20,
          marginBottom: utils.responsiveHeight(20),
        }}
      >
        {tabs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                paddingHorizontal: 10,
                borderWidth: 1,
                paddingVertical: 20,
                borderRadius: 10,
                borderColor:
                  tab === index
                    ? theme.colors.steelTeal
                    : theme.colors.transparent,
                backgroundColor:
                  tab === index
                    ? `${theme.colors.white}50`
                    : theme.colors.transparent,
              }}
              onPress={() => setTab(index)}
            >
              <Text
                style={{
                  ...theme.fonts.DM_Sans_500Medium,
                  fontSize: Platform.OS === 'ios' ? 11 : 10,
                  textTransform: 'uppercase',
                  color:
                    tab === index
                      ? theme.colors.mainColor
                      : theme.colors.textColor,
                }}
                numberOfLines={1}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(24),
        }}
      >
        <text.H5
          style={{
            textTransform: 'capitalize',
            color: theme.colors.mainColor,
            marginBottom: utils.responsiveHeight(10),
          }}
        >
          Description
        </text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: utils.responsiveHeight(6),
          }}
        >
          <text.T16
            style={{
              color: theme.colors.textColor,
            }}
          >
            {item.description}
          </text.T16>
        </View>

        <text.H5
          style={{
            textTransform: 'capitalize',
            color: theme.colors.mainColor,
            marginBottom: utils.responsiveHeight(10),
          }}
        >
          Habitat
        </text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: utils.responsiveHeight(6),
          }}
        >
          <text.T16
            style={{
              color: theme.colors.textColor,
            }}
          >
            {item.habitat}
          </text.T16>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Source', {
              source: item.sources,
              title: item.name,
            });
          }}
        >
          <text.H5
            style={{
              textTransform: 'capitalize',
              color: theme.colors.mainColor,
              marginBottom: utils.responsiveHeight(10),
            }}
          >
            {'Sources >'}
          </text.H5>
        </TouchableOpacity>
      </View>
    );
  };

  const renderProperty = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(24),
        }}
      >
        <text.H5
          style={{
            textTransform: 'capitalize',
            color: theme.colors.mainColor,
            marginBottom: utils.responsiveHeight(10),
          }}
        >
          Propriétés
        </text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: utils.responsiveHeight(6),
          }}
        >
          <text.T16
            style={{
              color: theme.colors.textColor,
            }}
          >
            {item.propriete}
          </text.T16>
        </View>
      </View>
    );
  };

  const renderUse = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(24),
        }}
      >
        <text.H5
          style={{
            textTransform: 'capitalize',
            color: theme.colors.mainColor,
            marginBottom: utils.responsiveHeight(10),
          }}
        >
          Usages internes
        </text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: utils.responsiveHeight(6),
          }}
        >
          <text.T16
            style={{
              color: theme.colors.textColor,
            }}
          >
            {item.usageInterne}
          </text.T16>
        </View>

        <text.H5
          style={{
            textTransform: 'capitalize',
            color: theme.colors.mainColor,
            marginBottom: utils.responsiveHeight(10),
          }}
        >
          Usages externes
        </text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: utils.responsiveHeight(6),
          }}
        >
          <text.T16
            style={{
              color: theme.colors.textColor,
            }}
          >
            {item.usageExterne}
          </text.T16>
        </View>
      </View>
    );
  };

  const renderCaution = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(24),
        }}
      >
        <text.H5
          style={{
            textTransform: 'capitalize',
            color: theme.colors.mainColor,
            marginBottom: utils.responsiveHeight(10),
          }}
        >
          Précautions
        </text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: utils.responsiveHeight(6),
          }}
        >
          <text.T16
            style={{
              color: theme.colors.textColor,
            }}
          >
            {item.precaution}
          </text.T16>
        </View>
      </View>
    );
  };

  const renderTabContent = (): JSX.Element => {
    if (tab === 0) {
      return renderDescription();
    } else if (tab === 1) {
      return renderProperty();
    } else if (tab === 2) {
      return renderUse();
    } else {
      return renderCaution();
    }
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        {renderCarousel()}
        {/* {renderDescription()} */}
        {renderTabs()}
        {renderTabContent()}
      </ScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default Product;
