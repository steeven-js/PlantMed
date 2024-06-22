import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

const NtfcCHeckSvg: React.FC = () => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
    >
      <Path
        fill='#18DF80'
        d='M0 0h24v24H0z'
      />
      <G clipPath='url(#a)'>
        <Path
          stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M17.333 8 10 15.333 6.667 12'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path
            fill='#fff'
            d='M5 7h14v10H5z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default NtfcCHeckSvg;
