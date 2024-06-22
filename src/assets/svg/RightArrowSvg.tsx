import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RightArrowSvg: React.FC = () => {
  return (
    <Svg
      width={6}
      height={11}
      fill='none'
    >
      <Path
        stroke='#123258'
        strokeLinejoin='round'
        d='m1 9.5 4-4-4-4'
      />
    </Svg>
  );
};

export default RightArrowSvg;
