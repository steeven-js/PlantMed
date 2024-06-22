import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Platform} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {svg} from '../assets/svg';
import {components} from '../components';
import {actions} from '../store/actions';
import {queryHooks} from '../store/slices/apiSlice';

const rating = [
  {
    id: 1,
    rating: 1,
    title: '1,0',
  },
  {
    id: 2,
    rating: 2,
    title: '2,0',
  },
  {
    id: 3,
    rating: 3,
    title: '3,0',
  },
  {
    id: 4,
    rating: 4,
    title: '4,0',
  },
  {
    id: 5,
    rating: 5,
    title: '5,0',
  },
];

const Filter: React.FC = () => {
  const dispatch = hooks.useAppDispatch();

  const user = hooks.useAppSelector(state => state.userSlice.user);

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = queryHooks.useGetUserQuery(user?.id || 0);

  const {
    data: potTypesData,
    error: potTypesError,
    isLoading: potTypesLoading,
  } = queryHooks.useGetPotTypesQuery();

  const {
    data: plantTypesData,
    error: plantTypesError,
    isLoading: plantTypesLoading,
  } = queryHooks.useGetPlantTypesQuery();

  const {
    data: colorsData,
    error: colorsError,
    isLoading: colorsLoading,
  } = queryHooks.useGetColorsQuery();

  const selectedRatings = hooks.useAppSelector(
    state => state.filterSlice.selectedRatings,
  );

  const selectedColors = hooks.useAppSelector(
    state => state.filterSlice.selectedColors,
  );

  const selectedPotTypes = hooks.useAppSelector(
    state => state.filterSlice.selectedPotTypes,
  );

  const selectedPlantTypes = hooks.useAppSelector(
    state => state.filterSlice.selectedPlantTypes,
  );

  const selctedCategories = hooks.useAppSelector(
    state => state.filterSlice.selectedCategories,
  );

  const isLoading = userLoading || potTypesLoading || plantTypesLoading;
  const isError = userError || potTypesError || plantTypesError || colorsError;

  const renderHeader = (): JSX.Element => {
    return <components.Header title={'Filter'} goBackIcon={true} />;
  };

  const renderStatus = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginBottom: utils.rsHeight(30),
          gap: 10,
        }}
      >
        {['sale', 'top', 'new'].map((item, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              style={{
                paddingHorizontal: 18,
                paddingVertical: 6,
                backgroundColor: selctedCategories.includes(item)
                  ? theme.colors.pastelMint
                  : theme.colors.imageBackground,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: selctedCategories.includes(item)
                  ? theme.colors.pastelMint
                  : theme.colors.antiFlashWhite,
              }}
              onPress={() => {
                dispatch((dispatch, getState) => {
                  const selectedCategories =
                    getState().filterSlice.selectedCategories;
                  if (selectedCategories.includes(item)) {
                    dispatch(
                      actions.setSelectedCategories(
                        selectedCategories.filter(
                          category => category !== item,
                        ),
                      ),
                    );
                  } else {
                    dispatch(
                      actions.setSelectedCategories([
                        ...selectedCategories,
                        item,
                      ]),
                    );
                  }
                });
              }}
            >
              <Text
                style={{
                  textTransform: 'uppercase',
                  ...theme.fonts.DM_Sans_700Bold,
                  fontSize: Platform.OS === 'ios' ? 12 : 10,
                  color: selctedCategories.includes(item)
                    ? theme.colors.steelTeal
                    : theme.colors.mainColor,
                  lineHeight: Platform.OS === 'ios' ? 12 * 1.7 : 10 * 1.7,
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

  const renderRating = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <Text
          style={{
            // ...theme.fonts.H5,
            // color: theme.colors.darkBlue,
            marginBottom: 14,
          }}
        >
          Rating
        </Text>
        <View
          style={{
            gap: 13,
            flexWrap: 'wrap',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          {rating.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={item.id.toString()}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 6.5,
                  borderRadius: 10,
                  backgroundColor: selectedRatings.includes(item.rating)
                    ? theme.colors.pastelMint
                    : theme.colors.imageBackground,
                  borderColor: selectedRatings.includes(item.rating)
                    ? theme.colors.pastelMint
                    : theme.colors.antiFlashWhite,
                }}
                onPress={() => {
                  dispatch(
                    actions.setSelectedRatings(
                      selectedRatings.includes(item.rating)
                        ? selectedRatings.filter(e => e !== item.rating)
                        : [...selectedRatings, item.rating],
                    ),
                  );
                }}
              >
                <svg.StarSvg
                  fillColor={
                    selectedRatings.includes(item.rating)
                      ? theme.colors.steelTeal
                      : theme.colors.transparent
                  }
                  strokeColor={
                    selectedRatings.includes(item.rating)
                      ? theme.colors.steelTeal
                      : theme.colors.textColor
                  }
                />
                <Text
                  style={{
                    // ...theme.fonts.NunitoSans_400Regular,
                    fontSize: Platform.OS === 'ios' ? 10 : 8,
                    // color: selectedRating.includes(item.title)
                    //   ? theme.colors.white
                    //   : theme.colors.darkBlue,
                    color: selectedRatings.includes(item.rating)
                      ? theme.colors.steelTeal
                      : theme.colors.textColor,
                    marginLeft: 4,
                    lineHeight: 10 * 1.7,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderColor = (): JSX.Element => {
    return (
      <View style={{paddingHorizontal: 20, marginBottom: utils.rsHeight(30)}}>
        <text.H5 style={{marginBottom: utils.rsHeight(20)}}>Color</text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          {colorsData?.colors.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: item.code,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  dispatch(
                    actions.setSelectedColors(
                      selectedColors.includes(item.name)
                        ? selectedColors.filter(e => e !== item.name)
                        : [...selectedColors, item.name],
                    ),
                  );
                }}
              >
                {selectedColors.includes(item.name) && <svg.CheckSvg />}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderPotTypes = (): JSX.Element => {
    return (
      <View style={{paddingHorizontal: 20, marginBottom: utils.rsHeight(30)}}>
        <text.H5
          style={{
            marginBottom: utils.rsHeight(20),
          }}
        >
          Pot Type
        </text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          {potTypesData?.potTypes.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={item.id.toString()}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 6,
                  borderRadius: 10,
                  borderWidth: 1,
                  backgroundColor: selectedPotTypes.includes(item.name)
                    ? theme.colors.pastelMint
                    : theme.colors.imageBackground,
                  borderColor: selectedPotTypes.includes(item.name)
                    ? theme.colors.pastelMint
                    : theme.colors.antiFlashWhite,
                }}
                onPress={() => {
                  dispatch(
                    actions.setSelectedPotTypes(
                      selectedPotTypes.includes(item.name)
                        ? selectedPotTypes.filter(e => e !== item.name)
                        : [...selectedPotTypes, item.name],
                    ),
                  );
                }}
              >
                <Text
                  style={{
                    textTransform: 'uppercase',
                    ...theme.fonts.DM_Sans_700Bold,
                    color: selectedPotTypes.includes(item.name)
                      ? theme.colors.steelTeal
                      : theme.colors.textColor,
                    fontSize: Platform.OS === 'ios' ? 12 : 10,
                    lineHeight: Platform.OS === 'ios' ? 12 * 1.7 : 10 * 1.7,
                  }}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderPlantTypes = (): JSX.Element => {
    return (
      <View style={{paddingHorizontal: 20, marginBottom: utils.rsHeight(30)}}>
        <text.H5 style={{marginBottom: utils.rsHeight(20)}}>Type</text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          {plantTypesData?.plantTypes.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={item.id.toString()}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 6,
                  borderRadius: 10,
                  borderWidth: 1,
                  backgroundColor: selectedPlantTypes.includes(item.name)
                    ? theme.colors.pastelMint
                    : theme.colors.imageBackground,
                  borderColor: selectedPlantTypes.includes(item.name)
                    ? theme.colors.pastelMint
                    : theme.colors.antiFlashWhite,
                }}
                onPress={() => {
                  dispatch(
                    actions.setSelectedPlantTypes(
                      selectedPlantTypes.includes(item.name)
                        ? selectedPlantTypes.filter(e => e !== item.name)
                        : [...selectedPlantTypes, item.name],
                    ),
                  );
                }}
              >
                <Text
                  style={{
                    textTransform: 'uppercase',
                    ...theme.fonts.DM_Sans_700Bold,
                    color: selectedPotTypes.includes(item.name)
                      ? theme.colors.steelTeal
                      : theme.colors.textColor,
                    fontSize: Platform.OS === 'ios' ? 12 : 10,
                    lineHeight: Platform.OS === 'ios' ? 12 * 1.7 : 10 * 1.7,
                  }}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    if (isError) return <components.Error />;
    if (isLoading) return <components.Loader />;

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingTop: 20}}>
        {renderStatus()}
        {renderRating()}
        {renderColor()}
        {renderPotTypes()}
        {renderPlantTypes()}
      </ScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['bottom', 'top']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default Filter;
