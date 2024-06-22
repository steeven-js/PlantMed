import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BasketSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={24} height={24} fill='none'>
      <Path
        stroke='#142535'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      />
      <Path
        fill='#CFF5CE'
        d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'
      />
      <Path
        stroke='#142535'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'
      />
    </Svg>
  );
};

export default BasketSvg;
