import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {text} from '../text';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {utils} from '../utils';
import {queryHooks} from '../store/slices/apiSlice';

const Sources: React.FC = () => {
  const {
    data: plantsData,
    error: plantsError,
    isLoading: plantsLoading,
    refetch: refetchPlants,
  } = queryHooks.useGetPlantmedQuery();

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title='Sources' />;
  };

  const renderContent = (): JSX.Element => {
    if (plantsLoading) {
      return <Text>Loading...</Text>;
    }

    if (plantsError) {
      return <Text>Error loading plants data.</Text>;
    }

    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(40),
          paddingBottom: utils.responsiveHeight(20),
        }}
      >
        {plantsData &&
          plantsData.plantmed.map((plant: any) => (
            <View
              key={plant.id}
              style={{
                marginBottom: utils.responsiveHeight(20),
              }}
            >
              <text.H5 style={{marginBottom: utils.responsiveHeight(10)}}>
                {plant.name}
              </text.H5>
              {plant.sources &&
                plant.sources.map((source: any, index: number) => (
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => Linking.openURL(source.url)}
                  >
                    <Text
                      style={{
                        ...theme.fonts.DM_Sans_400Regular,
                        fontSize: Platform.OS === 'ios' ? 14 : 12,
                        lineHeight: Platform.OS === 'ios' ? 14 * 1.7 : 12 * 1.7,
                        color: theme.colors.textColor,
                      }}
                    >
                      {source.url}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
          ))}
      </ScrollView>
    );
  };

  return (
    <custom.ImageBackground
      style={{flex: 1}}
      resizeMode='stretch'
      source={require('../assets/bg/02.png')}
    >
      <custom.SafeAreaView
        insets={['top', 'bottom']}
        containerStyle={{backgroundColor: theme.colors.transparent}}
      >
        {renderHeader()}
        {renderContent()}
      </custom.SafeAreaView>
    </custom.ImageBackground>
  );
};

export default Sources;
