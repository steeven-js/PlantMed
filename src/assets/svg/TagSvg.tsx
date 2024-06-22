import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TagSvg: React.FC = () => {
  return (
    <Svg width={20} height={20} fill='none'>
      <Path
        fill='#CFF5CE'
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='m17.158 11.175-5.975 5.975a1.667 1.667 0 0 1-2.358 0L1.667 10V1.667H10l7.158 7.158a1.667 1.667 0 0 1 0 2.35Z'
      />
      <Path
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M5.833 5.833h.009'
      />
    </Svg>
  );
};

export default TagSvg;
