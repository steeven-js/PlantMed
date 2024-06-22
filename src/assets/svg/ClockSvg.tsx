import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ClockSvg: React.FC = () => {
  return (
    <Svg
      width={10}
      height={11}
      fill='none'
    >
      <G
        stroke='#18DF80'
        strokeLinecap='round'
        strokeLinejoin='round'
        clipPath='url(#a)'
      >
        <Path d='M5 9.667a4.167 4.167 0 1 0 0-8.334 4.167 4.167 0 0 0 0 8.334Z' />
        <Path d='M5 3v2.5l1.667.833' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path
            fill='#fff'
            d='M0 .5h10v10H0z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ClockSvg;
