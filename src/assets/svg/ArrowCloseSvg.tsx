import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ArrowCloseSvg: React.FC = (s) => {
  return (
    <Svg
      width={10}
      height={7}
      fill='none'
    >
      <G clipPath='url(#a)'>
        <Path
          stroke='#123258'
          strokeLinejoin='round'
          d='m1 1.5 4 4 4-4'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path
            fill='#fff'
            d='M10 .5v6H0v-6z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default ArrowCloseSvg;
