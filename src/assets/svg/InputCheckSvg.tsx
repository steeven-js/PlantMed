import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const InputCheckSvg: React.FC = () => {
  return (
    <Svg
      width={14}
      height={10}
      fill='none'
    >
      <Path
        stroke='#123258'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M12.333 1 5 8.333 1.667 5'
      />
    </Svg>
  );
};

export default InputCheckSvg;
