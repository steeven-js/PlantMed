import React from 'react';
import {Text, TextStyle} from 'react-native';

import {text} from '../text';
import {theme} from '../constants';
import {PlantMedType} from '../types';

type Props = {item: PlantMedType; style?: TextStyle};

const PlantmedName: React.FC<Props> = ({item, style}) => {
  return <text.T16 style={style}>{item.name}</text.T16>;
};

export default PlantmedName;
