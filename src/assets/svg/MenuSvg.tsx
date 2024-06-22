import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const MenuSvg: React.FC = () => {
  return (
    <Svg
      width={2}
      height={14}
      fill='none'
    >
      <G
        fill='#123258'
        clipPath='url(#a)'
      >
        <Path d='M1 13.667A.833.833 0 1 0 1 12a.833.833 0 0 0 0 1.667ZM1 7.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM1 2A.833.833 0 1 0 1 .333.833.833 0 0 0 1 2Z' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path
            fill='#fff'
            d='M0 0h2v14H0z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default MenuSvg;
