import React from 'react';
import {Linking, ScrollView, TouchableOpacity, View} from 'react-native';

import {text} from '../text';
import {utils} from '../utils';
import {custom} from '../custom';
import {components} from '../components';
import {SourceScreenProps} from '../types/ScreenProps';

const Source: React.FC<SourceScreenProps> = ({route}) => {
  const {source, title} = route.params;

  const renderHeader = (): JSX.Element => {
    return <components.Header title='Sources' goBackIcon={true} />;
  };

  const renderTitle = (): JSX.Element => {
    return (
      <text.H3 style={{marginBottom: utils.responsiveHeight(14)}}>
        {title}
      </text.H3>
    );
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const renderSource = (): JSX.Element => {
    if (!source || !Array.isArray(source) || source.length === 0) {
      return <text.H5>Aucune source disponible.</text.H5>;
    }

    return (
      <View>
        {(source as any[]).map((item, index) => {
          const url = typeof item === 'string' ? item : item.url;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => openLink(url)}
              style={{marginBottom: 10}}
            >
              <text.H5 style={{color: 'blue', textDecorationLine: 'underline'}}>
                {url}
              </text.H5>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: utils.responsiveHeight(55, true),
          paddingBottom: utils.responsiveHeight(20, true),
        }}
        showsVerticalScrollIndicator={false}
      >
        {renderTitle()}
        {renderSource()}
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

export default Source;
