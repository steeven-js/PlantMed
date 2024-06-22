import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const GiftSvg: React.FC = () => {
  return (
    <Svg width={16} height={17} fill='none'>
      <Path fill='#CFF5CE' d='M13.333 8.5v6.667H2.667V8.5' />
      <Path
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M13.333 8.5v6.667H2.667V8.5'
      />
      <Path
        fill='#CFF5CE'
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M14.667 5.167H1.333V8.5h13.334V5.167Z'
      />
      <Path
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M8 15.166v-10'
      />
      <Path
        fill='#CFF5CE'
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M8 5.167H5a1.667 1.667 0 0 1 0-3.333c2.333 0 3 3.333 3 3.333ZM8 5.167h3a1.667 1.667 0 1 0 0-3.333c-2.333 0-3 3.333-3 3.333Z'
      />
    </Svg>
  );
};

export default GiftSvg;
