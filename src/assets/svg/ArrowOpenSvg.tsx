import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ArrowOpenSvg: React.FC = () => {
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
          d='m9 5.5-4-4-4 4'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path
            fill='#fff'
            d='M0 6.5v-6h10v6z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default ArrowOpenSvg;
