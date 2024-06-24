import React from 'react';
import {View, TouchableOpacity, ViewStyle} from 'react-native';

import {text} from '../text';
import {svg} from '../assets/svg';
import {theme} from '../constants';

type Props = {
  title: string;
  viewAllVisible?: boolean;
  viewAllOnPress?: () => void;
  containerStyle?: ViewStyle;
};

const BlockHeading: React.FC<Props> = ({
  title,
  viewAllOnPress,
  containerStyle,
  viewAllVisible = true,
}) => {
  return (
    <View
      style={{
        ...containerStyle,
        ...theme.flex.rowCenterSpaceBetween,
      }}
    >
      <text.H3 style={{textTransform: 'capitalize'}}>{title}</text.H3>
      {viewAllVisible && (
        <TouchableOpacity
          onPress={viewAllOnPress}
          style={{flexDirection: 'row', alignItems: 'center'}}
        >
          <text.H3
            style={{color: theme.colors.mainColor, textTransform: 'capitalize'}}
          >
            Tout voir {'>'}
          </text.H3>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(BlockHeading);
