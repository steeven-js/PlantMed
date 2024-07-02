import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {PlantMedType} from '../types';
import {components} from '../components';
import {queryHooks} from '../store/slices/apiSlice';
import {handleTextChange} from '../utils/handleTextChange';
import PreniumSvg from '../assets/svg/PreniumSvg';

const Search: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const [searchQuery, setSearchQuery] = useState('');

  const user = hooks.useAppSelector(state => state.userSlice.user);
  const isPrenium = hooks.useAppSelector(
    state => state.userSlice.user?.isPrenium,
  );

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = queryHooks.useGetUserQuery(user?.id || 0);

  const {
    data: plantsData,
    error: plantsError,
    isLoading: plantsLoading,
  } = queryHooks.useGetPlantmedQuery();

  const ref = useRef<TextInput>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const isLoading = userLoading || plantsLoading;

  const handleSearch = handleTextChange(setSearchQuery);

  const renderSearchBar = () => {
    return (
      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 20,
          paddingBottom: 20,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: `${theme.colors.antiFlashWhite}80`,
        }}
      >
        <View style={{flex: 1, height: 40, marginRight: 20}}>
          <TextInput
            ref={ref}
            placeholder='Rechercher une plante'
            clearButtonMode='always'
            placeholderTextColor={`${theme.colors.textColor}80`}
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            value={searchQuery}
            onChangeText={text => handleSearch(text)}
            style={{
              height: 40,
              padding: 0,
              borderRadius: 4,
              paddingHorizontal: 20,
              backgroundColor: `${theme.colors.antiFlashWhite}50`,
              color: theme.colors.textColor,
              ...theme.fonts.DM_Sans_400Regular,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              color: theme.colors.textColor,
              ...theme.fonts.DM_Sans_400Regular,
              fontSize: Platform.OS === 'ios' ? 14 : 12,
            }}
          >
            Annuler
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item, index}: {item: PlantMedType; index: number}) => {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: `${theme.colors.antiFlashWhite}80`,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          if (isPrenium) {
            navigation.navigate('PlantMed', {item});
          } else if (!isPrenium && item.is_prenium == false) {
            navigation.navigate('PlantMed', {item});
          } else {
            navigation.navigate('Prenium');
          }
        }}
      >
        <svg.SearchSmallSvg />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              marginLeft: 10,
              color: theme.colors.textColor,
              ...theme.fonts.DM_Sans_400Regular,
              fontSize: Platform.OS === 'ios' ? 14 : 12,
            }}
          >
            {item.name}
          </Text>

          <View
            style={{
              alignSelf: 'flex-start',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PreniumSvg
              width='20px'
              height='20px'
              fillColor={
                item.is_prenium
                  ? theme.colors.yellowStar
                  : theme.colors.steelTeal
              }
              strokeColor={
                item.is_prenium
                  ? theme.colors.yellowStar
                  : theme.colors.steelTeal
              }
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            ...theme.fonts.DM_Sans_400Regular,
            fontSize: Platform.OS === 'ios' ? 16 : 14,
            color: theme.colors.textColor,
          }}
        >
          No results found
        </Text>
      </View>
    );
  };

  const renderSearchResults = () => {
    const filteredProducts = plantsData?.plantmed.filter(item => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
      <FlatList
        data={filteredProducts}
        keyExtractor={(item: PlantMedType) => item.id.toString()}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled' // when user taps on the screen, the keyboard will be hidden
        keyboardDismissMode='on-drag' // when user drags the screen, the keyboard will be hidden
        ListEmptyComponent={() => renderEmptyComponent()}
        renderItem={({item, index}) => renderItem({item, index})}
      />
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return <components.Loader />;
    }

    return (
      <React.Fragment>
        {renderSearchBar()}
        {renderSearchResults()}
      </React.Fragment>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default Search;
