import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fillColor?: string;
  strokeColor?: string;
};

const HeartBigSvg: React.FC<Props> = ({fillColor, strokeColor}) => {
  return (
    <Svg width={48} height={48} fill={fillColor}>
      <Path
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.499 5.499 0 0 0 0-7.78v0Z'
        transform='scale(2)'
      />
    </Svg>
  );
};

export default HeartBigSvg;
