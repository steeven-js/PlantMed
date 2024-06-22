import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const UserSvg: React.FC = () => {
  return (
    <Svg width={16} height={17} fill='none'>
      <Path
        fill='#CFF5CE'
        d='M13.333 14.5v-1.333a2.667 2.667 0 0 0-2.666-2.667H5.333a2.667 2.667 0 0 0-2.666 2.667V14.5'
      />
      <Path
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M13.333 14.5v-1.333a2.667 2.667 0 0 0-2.666-2.667H5.333a2.667 2.667 0 0 0-2.666 2.667V14.5'
      />
      <Path
        fill='#CFF5CE'
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M8 7.833A2.667 2.667 0 1 0 8 2.5a2.667 2.667 0 0 0 0 5.333Z'
      />
    </Svg>
  );
};

export default UserSvg;
