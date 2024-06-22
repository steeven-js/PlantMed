import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SignOutSvg: React.FC = () => {
  return (
    <Svg width={16} height={17} fill='none'>
      <Path
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M10.667 11.833 14 8.5l-3.333-3.333M14 8.5H6'
      />
      <Path
        fill='#CFF5CE'
        d='M6 14.5H3.333A1.334 1.334 0 0 1 2 13.167V3.833A1.333 1.333 0 0 1 3.333 2.5H6'
      />
      <Path
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M6 14.5H3.333A1.334 1.334 0 0 1 2 13.167V3.833A1.333 1.333 0 0 1 3.333 2.5H6'
      />
    </Svg>
  );
};

export default SignOutSvg;
