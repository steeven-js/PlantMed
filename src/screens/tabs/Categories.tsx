import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Platform,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import {utils} from '../../utils';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';
import {queryHooks} from '../../store/slices/apiSlice';

const Categories: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const {
    data: plantsData,
    error: plantsError,
    isLoading: plantsLoading,
    refetch: refetchPlants,
  } = queryHooks.useGetPlantsQuery();

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
    refetch: refetchCategories,
  } = queryHooks.useGetCategoriesQuery();

  const [refreshing, setRefreshing] = useState(false);

  let categories = categoriesData?.categories ?? [];
  let plants = plantsData?.plants ?? [];

  // plants = [];
  // categories = [];

  const isError = categoriesError || plantsError;
  const isLoading = categoriesLoading || plantsLoading;
  const isData = categories.length === 0 && plants.length === 0;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    Promise.all([refetchPlants(), refetchCategories()])
      .then(() => setRefreshing(false))
      .catch(error => {
        console.error(error);
        setRefreshing(false);
      });
  }, []);

  const renderCategories = (): JSX.Element | null => {
    if (categories?.length) {
      return (
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: utils.responsiveHeight(40 - 14),
          }}
        >
          {categories.map((item, index) => {
            const dataFilter = plantsData?.plants.filter(
              e => e && e.categories.includes(item.name),
            );
            const qty = dataFilter?.length ?? 0;
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: utils.responsiveWidth(160, true),
                  height: utils.responsiveWidth(160, true),
                  marginBottom: 14,
                  justifyContent: 'space-between',
                }}
                onPress={() => {
                  if (qty > 0) {
                    navigation.navigate('Shop', {
                      title: item.name,
                      products: dataFilter ?? [],
                    });
                  }
                  if (qty === 0) {
                    Alert.alert(
                      'No data',
                      'No data available for this category',
                    );
                  }
                }}
              >
                <custom.ImageBackground
                  source={{uri: item.image ?? 'default_image_uri'}}
                  style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-between',
                    paddingHorizontal: 14,
                    paddingTop: 14,
                    paddingBottom: 12,
                  }}
                  imageStyle={{
                    borderRadius: 10,
                    backgroundColor: theme.colors.imageBackground,
                  }}
                  resizeMode='cover'
                >
                  <View
                    style={{
                      backgroundColor: '#CFF5CE',
                      alignSelf: 'flex-start',
                      paddingHorizontal: 9,
                      paddingVertical: 1,
                      borderRadius: 50,
                      minWidth: 23,
                      height: 23,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: Platform.OS === 'ios' ? 14 : 12,
                        color: '#50858B',
                        textTransform: 'capitalize',
                        ...theme.fonts.DM_Sans_400Regular,
                      }}
                    >
                      {qty}
                    </Text>
                  </View>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: Platform.OS === 'ios' ? 14 : 12,
                      color: theme.colors.mainColor,
                      textTransform: 'capitalize',
                      ...theme.fonts.DM_Sans_400Regular,
                    }}
                  >
                    {item.name}
                  </Text>
                </custom.ImageBackground>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }

    return null;
  };

  const renderContent = (): JSX.Element => {
    if (isLoading) return <components.Loader />;
    if (isError) return <components.Error />;
    if (isData) return <components.NoData />;

    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 20,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {renderCategories()}
      </ScrollView>
    );
  };

  return renderContent();
};

export default Categories;
