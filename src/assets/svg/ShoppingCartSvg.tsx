import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ShoppingCartSvg: React.FC = () => {
  return (
    <Svg width={10} height={10} fill='none'>
      <G
        stroke='#23374A'
        strokeLinecap='round'
        strokeLinejoin='round'
        clipPath='url(#a)'
      >
        <Path d='M3.75 9.167a.417.417 0 1 0 0-.834.417.417 0 0 0 0 .834ZM8.333 9.167a.417.417 0 1 0 0-.834.417.417 0 0 0 0 .834ZM.417.417h1.666L3.2 5.996a.833.833 0 0 0 .833.67h4.05a.833.833 0 0 0 .834-.67L9.583 2.5H2.5' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h10v10H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ShoppingCartSvg;
