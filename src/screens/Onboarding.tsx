import {useDispatch} from 'react-redux';
import {View, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';

import {text} from '../text';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {AppDispatch} from '../store';
import {components} from '../components';
import {actions} from '../store/actions';
import type {ViewableItemsChanged} from '../types';

type DataType = {
  id: number;
  image: any;
  title: string;
  description: string;
};

const data: DataType[] = [
  {
    id: 1,
    image: require('../assets/images/01.jpg'),
    title: 'Bienvenue sur\nPlante Med !',
    description: `Explorez le monde fascinant\ndes plantes médicinales avec nous.`,
  },
  {
    id: 2,
    image: require('../assets/images/02.jpg'),
    title: 'Découvrez votre\nPharmacieNaturelle',
    description: `Apprenez à utiliser les plantes\npour votre santé au quotidien.`,
  },
  {
    id: 3,
    image: require('../assets/images/03.jpg'),
    title: 'Pratiquez la\nPhytothérapie',
    description: `Commencez votre voyage vers\nune médecine naturelle et efficace.`,
  },
];

const Onboarding: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeIndex, setActiveIndex] = useState(0);

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const onViewableItemsChanged = useRef((info: ViewableItemsChanged) => {
    const index = info.viewableItems[0]?.index ?? 0;
    setActiveIndex(index);
  }).current;

  const flatListRef = useRef<FlatList>(null);

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Get Started'
        onPress={() => {
          dispatch(actions.setStart(false));
        }}
        containerStyle={{
          bottom: 0,
          padding: 20,
          width: '100%',
          position: 'absolute',
          marginBottom: utils.homeIndicatorHeight(),
        }}
      />
    );
  };

  const renderItem = ({item}: {item: DataType}): JSX.Element => {
    return (
      <custom.ImageBackground
        source={item.image}
        style={{flex: 1}}
        resizeMode='cover'
      >
        <custom.SafeAreaView
          insets={['top', 'bottom']}
          statusBarStyle='dark-content'
          containerStyle={{backgroundColor: theme.colors.transparent}}
        >
          <View
            style={{
              width: theme.sizes.deviceWidth,
              paddingHorizontal: 20,
              paddingTop: utils.responsiveHeight(50),
            }}
          >
            <text.H1
              style={{
                marginBottom: utils.responsiveHeight(14),
                textTransform: 'capitalize',
              }}
              numberOfLines={2}
            >
              {item.title}
            </text.H1>
            <text.T16 style={{marginBottom: utils.responsiveHeight(40)}}>
              {item.description}
            </text.T16>
            <View
              style={{
                gap: 6,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: utils.responsiveHeight(20),
              }}
            >
              {data.map((_, current) => {
                return (
                  <View
                    key={current}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: theme.colors.mainColor,
                      opacity: current === activeIndex ? 1 : 0.15,
                    }}
                  />
                );
              })}
            </View>
          </View>
        </custom.SafeAreaView>
      </custom.ImageBackground>
    );
  };

  const renderFlatList = (): JSX.Element => {
    return (
      <FlatList
        data={data}
        bounces={false}
        ref={flatListRef}
        horizontal={true}
        pagingEnabled={true}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={{flexGrow: 1}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => renderItem({item})}
        keyExtractor={item => item.id.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    );
  };

  return (
    <React.Fragment>
      {renderFlatList()}
      {renderButton()}
    </React.Fragment>
  );
};

export default Onboarding;
