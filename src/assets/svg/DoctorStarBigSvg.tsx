import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fillColor?: string;
  strokeColor?: string;
};

const DoctorStarBigSvg: React.FC<Props> = ({fillColor, strokeColor}) => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
    >
      <Path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z'
      />
    </Svg>
  );
};

export default DoctorStarBigSvg;
