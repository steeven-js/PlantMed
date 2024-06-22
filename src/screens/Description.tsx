import React from 'react';
import {ScrollView} from 'react-native';

import {text} from '../text';
import {utils} from '../utils';
import {custom} from '../custom';
import {components} from '../components';
import {DescriptionScreenProps} from '../types/ScreenProps';

const Description: React.FC<DescriptionScreenProps> = ({route}) => {
  const {description, title} = route.params;

  const renderHeader = (): JSX.Element => {
    return <components.Header title='Description' goBackIcon={true} />;
  };

  const renderTitle = (): JSX.Element => {
    return (
      <text.H3 style={{marginBottom: utils.responsiveHeight(14)}}>
        {title}
      </text.H3>
    );
  };

  const renderDescription = (): JSX.Element => {
    return <text.T16>{description}</text.T16>;
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
        {renderDescription()}
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

export default Description;
