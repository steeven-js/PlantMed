import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CameraSvg: React.FC = () => {
  return (
    <Svg width={16} height={16} fill='none'>
      <Path
        fill='#CFF5CE'
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M15.333 12.667A1.333 1.333 0 0 1 14 14H2a1.333 1.333 0 0 1-1.333-1.333V5.333A1.333 1.333 0 0 1 2 4h2.667L6 2h4l1.333 2H14a1.333 1.333 0 0 1 1.333 1.333v7.334Z'
      />
      <Path
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M8 11.333A2.667 2.667 0 1 0 8 6a2.667 2.667 0 0 0 0 5.333Z'
      />
    </Svg>
  );
};

export default CameraSvg;
