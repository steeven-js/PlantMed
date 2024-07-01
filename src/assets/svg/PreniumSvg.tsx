import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

type Props = {
  fillColor?: string;
  strokeColor?: string;
  width?: string;
  height?: string;
};

const PreniumSvg: React.FC<Props> = ({
  fillColor = '#4A6973',
  strokeColor = '#4A6973',
  width = '320px',
  height = '320px',
}) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24'>
      <Path
        d='M2 15.29V5.71002C2 4.38002 2.77 4.06002 3.71 5.00002L6.3 7.59002C6.69 7.98002 7.33 7.98002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.7 4.00002L16.29 7.59002C16.68 7.98002 17.32 7.98002 17.7 7.59002L20.29 5.00002C21.23 4.06002 22 4.38002 22 5.71002V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.29 2 18.05 2 15.29Z'
        stroke={strokeColor}
        fill={fillColor}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};

export default PreniumSvg;
