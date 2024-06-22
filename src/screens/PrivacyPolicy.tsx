import React from 'react';
import {View, Text, ScrollView, Platform} from 'react-native';

import {text} from '../text';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {utils} from '../utils';

const policy = [
  {
    id: 1,
    title: 'Terms',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    title: 'Use license',
    description:
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    title: 'Disclaimer',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const PrivacyPolicy: React.FC = () => {
  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title='Privacy Policy' />;
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(40),
          paddingBottom: utils.responsiveHeight(20),
        }}
      >
        {policy.map((item, index) => {
          return (
            <View
              key={item.id.toString()}
              style={{
                marginBottom: utils.responsiveHeight(40),
              }}
            >
              <text.H5 style={{marginBottom: utils.responsiveHeight(10)}}>
                {index + 1 + '. ' + item.title}
              </text.H5>
              <Text
                style={{
                  ...theme.fonts.DM_Sans_400Regular,
                  fontSize: Platform.OS === 'ios' ? 14 : 12,
                  lineHeight: Platform.OS === 'ios' ? 14 * 1.7 : 12 * 1.7,
                  color: theme.colors.textColor,
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        })}
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

export default PrivacyPolicy;
