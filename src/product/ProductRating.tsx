import React from 'react';
import {View, Text, ViewStyle, Platform} from 'react-native';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

import {utils} from '../utils';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {ProductType} from '../types';

type Props = {
  rating: number;
  style?: ViewStyle;
};

const ProductRating: React.FC<Props> = ({rating, style}) => {
  const renderStarSvg = () => {
    return (
      <Svg width={12} height={12} fill='none'>
        <G clipPath='url(#a)'>
          <Path
            fill='#4A6973'
            stroke='#4A6973'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m6 1 1.545 3.13L11 4.635 8.5 7.07l.59 3.44L6 8.885 2.91 10.51l.59-3.44L1 4.635l3.455-.505L6 1Z'
          />
        </G>
        <Defs>
          <ClipPath id='a'>
            <Path fill='#fff' d='M0 0h12v12H0z' />
          </ClipPath>
        </Defs>
      </Svg>
    );
  };

  const renderRatingText = () => {
    return (
      <Text
        style={{
          color: theme.colors.textColor,
          marginLeft: 4,
          fontSize: Platform.OS === 'ios' ? 12 : 10,
          lineHeight: Platform.OS === 'ios' ? 12 * 1.7 : 10 * 1.7,
          ...theme.fonts.DM_Sans_400Regular,
        }}
        numberOfLines={1}
      >
        {rating.toFixed(1).replace('.', ',')}
      </Text>
    );
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', ...style}}>
      {renderStarSvg()}
      {renderRatingText()}
    </View>
  );
};

export default ProductRating;
