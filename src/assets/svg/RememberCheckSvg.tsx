import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RememberCheckSvg: React.FC = () => {
  return (
    <Svg width={12} height={12} fill='none'>
      <Path
        stroke='#222'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M10 3 4.5 8.5 2 6'
      />
    </Svg>
  );
};

export default RememberCheckSvg;
