import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseSvg: React.FC = () => (
  <Svg
    width={34}
    height={34}
    fill='none'
  >
    <Path
      stroke='#4C6780'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m12.02 12.05 9.9 9.9M12.02 21.95l9.9-9.9'
    />
  </Svg>
);

export default CloseSvg;
