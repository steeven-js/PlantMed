import React from 'react';
import {ReviewType} from '../types/ReviewType';
import {View, Text, Platform} from 'react-native';

import {text} from '../text';
import {utils} from '../utils';
import {theme} from '../constants';

type Props = {
  item: ReviewType;
  isLast: boolean;
};

const ReviewItem: React.FC<Props> = ({item, isLast}): JSX.Element => {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString('en-US', {month: 'short'});

  const formattedDate = `${day} ${month}`;

  return (
    <View
      style={{
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: theme.colors.antiFlashWhite,
        marginBottom: isLast ? 0 : 14,
      }}
    >
      {/* BLOCK 01 */}
      <View
        style={{
          ...theme.flex.rowCenterSpaceBetween,
          marginBottom: utils.responsiveHeight(14),
        }}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <text.H5 style={{textTransform: 'capitalize'}} numberOfLines={1}>
            {item.name}
          </text.H5>
          <Text
            style={{
              textTransform: 'capitalize',
              fontSize: 10,
              marginLeft: 6,
              color: theme.colors.textColor,
            }}
            numberOfLines={1}
          >
            ({item.rating.toFixed(1).replace('.', ',')})
          </Text>
        </View>

        <Text
          style={{
            ...theme.fonts.DM_Sans_400Regular,
            fontSize: Platform.OS === 'ios' ? 10 : 8,
            lineHeight: Platform.OS === 'ios' ? 10 * 1.5 : 8 * 1.5,
            color: theme.colors.textColor,
            marginBottom: 5,
            marginTop: 4,
          }}
          numberOfLines={1}
        >
          {item.createdAt}
        </Text>
      </View>
      {/* BLOCK 02 */}
      <View style={{flex: 1}}>
        <text.T14 numberOfLines={3}>{item.comment}</text.T14>
      </View>
    </View>
  );
};

export default React.memo(ReviewItem);
