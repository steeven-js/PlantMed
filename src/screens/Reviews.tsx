import React from 'react';
import {FlatList} from 'react-native';

import {items} from '../items';
import {custom} from '../custom';
import {components} from '../components';
import {ReviewsScreenProps} from '../types/ScreenProps';

const Reviews: React.FC<ReviewsScreenProps> = ({route}) => {
  const {reviews} = route.params;

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title='Reviews' />;
  };

  const renderContent = (): JSX.Element => {
    return (
      <FlatList
        data={reviews}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          const isLast = reviews.indexOf(item) === reviews.length - 1;
          return <items.ReviewItem item={item} isLast={isLast} />;
        }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 25,
          paddingBottom: 20,
          paddingLeft: 20,
        }}
      />
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default Reviews;
