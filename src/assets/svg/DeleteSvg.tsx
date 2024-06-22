import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const DeleteSvg: React.FC = () => {
  return (
    <Svg width={16} height={16} fill='none'>
      <G
        stroke='#23374A'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={0.8}
        clipPath='url(#a)'
      >
        <Path
          fill='#CFF5CE'
          fillOpacity={0.5}
          d='M8 14.667A6.667 6.667 0 1 0 8 1.334a6.667 6.667 0 0 0 0 13.333Z'
        />
        <Path d='m10 6-4 4M6 6l4 4' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h16v16H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DeleteSvg;
