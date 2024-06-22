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
  // console.log('source', source);
  const renderSource = (): JSX.Element => {
    return (
      <View>
        {source.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => openLink(item)}>
            <text.T16
              key={index}
              style={{
                lineHeight: 24, // 1.5 times the default line height (16)
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              • {item}
            </text.T16>
          </TouchableOpacity>
        ))}
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
