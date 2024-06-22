import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DownloadSvg: React.FC = () => {
  return (
    <Svg
      width={12}
      height={13}
      fill='none'
    >
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10.5 8v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V8M3.5 5.5 6 8l2.5-2.5M6 8V2'
      />
    </Svg>
  );
};

export default DownloadSvg;
