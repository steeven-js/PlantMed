import React from 'react';
import {View} from 'react-native';

import {svg} from '../assets/svg';
import {theme} from '../constants';
import {PlantMedType} from '../types';

type Props = {
  version?: number;
  item: PlantMedType;
  containerStyle?: object;
};

const PlantPrenium: React.FC<Props> = ({containerStyle, item}) => {
  return (
    <View style={containerStyle}>
      {item.is_premium ? (
        <svg.PreniumSvg
          fillColor={theme.colors.yellowStar}
          strokeColor={theme.colors.yellowStar}
          width='30px'
          height='30px'
        />
      ) : (
        <svg.PreniumSvg
          fillColor={theme.colors.white}
          strokeColor={theme.colors.white}
          width='30px'
          height='30px'
        />
      )}
    </View>
  );
};

export default PlantPrenium;
