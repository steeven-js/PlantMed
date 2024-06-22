import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ClockMiddleSvg: React.FC = () => {
  return (
    <Svg
      width={14}
      height={14}
      fill='none'
    >
      <G
        stroke='#18DF80'
        strokeLinecap='round'
        strokeLinejoin='round'
        clipPath='url(#a)'
      >
        <Path d='M7 12.833A5.833 5.833 0 1 0 7 1.167a5.833 5.833 0 0 0 0 11.666Z' />
        <Path d='M7 3.5V7l2.333 1.167' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path
            fill='#fff'
            d='M0 0h14v14H0z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default ClockMiddleSvg;
