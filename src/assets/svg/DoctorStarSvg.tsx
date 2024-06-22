import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fillColor?: string;
  strokeColor?: string;
};

const DoctorStarSvg: React.FC<Props> = ({fillColor, strokeColor}) => {
  return (
    <Svg
      width={16}
      height={16}
      fill='none'
    >
      <Path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m8 1.333 2.06 4.174 4.607.673-3.334 3.247.787 4.586L8 11.847l-4.12 2.166.787-4.586L1.333 6.18l4.607-.673L8 1.333Z'
      />
    </Svg>
  );
};

export default DoctorStarSvg;
