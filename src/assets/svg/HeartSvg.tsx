import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fillColor?: string;
  strokeColor?: string;
};

const HeartSvg: React.FC<Props> = ({fillColor, strokeColor}) => {
  return (
    <Svg width={32} height={32} fill='none'>
      <Path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.893 3.073a3.667 3.667 0 0 0-5.186 0L8 3.78l-.707-.707A3.668 3.668 0 0 0 2.107 8.26l.706.707L8 14.153l5.187-5.186.706-.707a3.667 3.667 0 0 0 0-5.187v0Z'
        transform='scale(2)'
      />
    </Svg>
  );
};

export default HeartSvg;
