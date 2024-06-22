import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

const OnlineSvg: React.FC = () => {
  return (
    <Svg
      width={14}
      height={14}
      fill='none'
    >
      <Circle
        cx={7}
        cy={7}
        r={6}
        fill='#18DF80'
        stroke='#fff'
        strokeWidth={2}
      />
    </Svg>
  );
};
export default OnlineSvg;
