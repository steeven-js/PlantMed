import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FileTextSvg: React.FC = () => {
  return (
    <Svg width={20} height={20} fill='none'>
      <Path
        fill='#CFF5CE'
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11.667 1.667H5a1.667 1.667 0 0 0-1.667 1.666v13.334A1.667 1.667 0 0 0 5 18.333h10a1.667 1.667 0 0 0 1.667-1.666v-10l-5-5Z'
      />
      <Path
        fill='#CFF5CE'
        stroke='#4A6973'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11.667 1.667v5h5M13.333 10.833H6.667M13.333 14.167H6.667M8.333 7.5H6.667'
      />
    </Svg>
  );
};

export default FileTextSvg;
