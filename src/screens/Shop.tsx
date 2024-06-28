import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, FlatList, TouchableOpacity, Platform} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {items} from '../items';
import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';
import {ShopScreenProps} from '../types/ScreenProps';

const sortingBy = [
  {id: 1, title: 'Top'},
  {id: 2, title: 'Price: low to high'},
  {id: 3, title: 'Price: high to low'},
  {id: 4, title: 'Newest'},
  {id: 5, title: 'Sale'},
];

const Shop: React.FC<ShopScreenProps> = ({route}) => {
  const {title, products} = route.params;
  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();

  const [sort, setSort] = useState(sortingBy[0]);
  const [showModal, setShowModal] = useState(false);

  const selectedColors = hooks.useAppSelector(
    state => state.filterSlice.selectedColors,
  );

  const selectedPotTypes = hooks.useAppSelector(
    state => state.filterSlice.selectedPotTypes,
  );

  const selectedPlantTypes = hooks.useAppSelector(
    state => state.filterSlice.selectedPlantTypes,
  );

  const selectedRatings = hooks.useAppSelector(
    state => state.filterSlice.selectedRatings,
  );

  const selectedCategories = hooks.useAppSelector(
    state => state.filterSlice.selectedCategories,
  );

  const filteredProducts = products.filter(product => {
    // Фильтрация по типу горшка
    const potTypeMatch =
      selectedPotTypes.length === 0
        ? true
        : selectedPotTypes.some(potType => product.potTypes.includes(potType));

    // Фильтрация по типу растения
    const plantTypeMatch =
      selectedPlantTypes.length === 0
        ? true
        : selectedPlantTypes.some(plantType =>
            product.plantTypes.includes(plantType),
          );

    // Фильтрация по цвету
    const colorMatch =
      selectedColors.length === 0
        ? true
        : selectedColors.some(color => product.colors.includes(color));

    // Фильтрация по рейтингу
    const roundedRating = Math.floor(product.rating);
    const ratingMatch =
      selectedRatings.length === 0
        ? true
        : selectedRatings.includes(roundedRating);

    // Filter by category
    const statusMatch =
      selectedCategories.length === 0
        ? true
        : (product.isNew && selectedCategories.includes('new')) ||
          (product.isTop && selectedCategories.includes('top')) ||
          (product.oldPrice && selectedCategories.includes('sale'));

    return (
      potTypeMatch && plantTypeMatch && colorMatch && ratingMatch && statusMatch
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort.title) {
      case 'Price: low to high':
        return a.price - b.price;
      case 'Price: high to low':
        return b.price - a.price;
      case 'Newest':
        return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
      case 'Top':
        return a.isTop === b.isTop ? 0 : a.isTop ? -1 : 1;
      case 'Sale':
        return a.oldPrice === b.oldPrice ? 0 : a.oldPrice ? -1 : 1;
      case 'Featured':
        return a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1;
      default:
        return 0;
    }
  });

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title={title ?? 'Shop'}
        onGoBack={() => {
          dispatch(actions.resetFilters());
          navigation.goBack();
        }}
        bottomLine={true}
        basketIcon={true}
      />
    );
  };

  const renderOptions = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 14,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          onPress={() => navigation.navigate('Filter')}
        >
          <svg.FiltersSvg />
          {/* <text.T14 style={{marginLeft: 8}}>Filters</text.T14> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingTop: 20,
            paddingHorizontal: 20,
            paddingBottom: 14,
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          onPress={() => setShowModal(true)}
        >
          {/* <text.T14 style={{marginRight: 7}}>Sorting by</text.T14> */}
          <svg.SortingBySvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = (): JSX.Element | null => {
    if (filteredProducts.length === 0) return <components.NoData />;

    return (
      <FlatList
        data={sortedProducts}
        renderItem={({item}) => {
          return <items.ProductCard version={1} item={item} />;
        }}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
        }}
      />
    );
  };

  const renderModal = () => {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0, flex: 1}}
        animationIn='zoomIn'
        animationOut='zoomOut'
        statusBarTranslucent={true}
        coverScreen={true}
        deviceHeight={
          theme.sizes.deviceHeight +
          (Platform.OS === 'android' ? utils.statusBarHeight() : 0)
        }
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            borderRadius: 5,
            paddingLeft: 20,
            paddingTop: 10,
          }}
        >
          {sortingBy.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingTop: 10,
                  marginBottom: 4,
                  paddingRight: 20,
                  paddingBottom: 18,
                  ...theme.flex.rowCenterSpaceBetween,
                  borderBottomColor: theme.colors.antiFlashWhite,
                  borderBottomWidth: array.length - 1 === index ? 0 : 1,
                }}
                onPress={() => {
                  setSort(item);
                  setShowModal(false);
                }}
              >
                <text.T14
                  style={{color: theme.colors.mainColor}}
                  numberOfLines={1}
                >
                  {item.title}
                </text.T14>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: theme.colors.steelTeal,
                  }}
                >
                  <View
                    style={{
                      backgroundColor:
                        sort === item
                          ? theme.colors.steelTeal
                          : theme.colors.white,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderOptions()}
      {renderContent()}
      {renderModal()}
    </custom.SafeAreaView>
  );
};

export default Shop;
