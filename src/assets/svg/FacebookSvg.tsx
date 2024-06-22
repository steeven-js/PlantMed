import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const FacebookSvg: React.FC = () => {
  return (
    <Svg width={9} height={14} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          fill='#23374A'
          d='M7.875.003 6.059 0C4.02 0 2.701 1.352 2.701 3.445v1.589H.876a.285.285 0 0 0-.286.286V7.62c0 .158.128.286.286.286H2.7v5.807c0 .158.128.286.286.286h2.381a.285.285 0 0 0 .286-.286V7.907h2.134a.285.285 0 0 0 .286-.286V5.32a.286.286 0 0 0-.285-.286H5.654V3.687c0-.647.154-.975.997-.975h1.223a.285.285 0 0 0 .286-.286V.288a.286.286 0 0 0-.285-.285Z'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h8.75v14H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default FacebookSvg;
