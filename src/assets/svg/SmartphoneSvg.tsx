import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  phoneVerified: boolean;
};

const SmartphoneSvg: React.FC<Props> = ({
  phoneVerified,
}): JSX.Element | null => {
  if (phoneVerified) {
    return (
      <Svg width={16} height={17} fill='none'>
        <Path
          fill='#CFF5CE'
          stroke='#4A6973'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M11.333 1.833H4.667c-.737 0-1.334.597-1.334 1.334v10.666c0 .737.597 1.334 1.334 1.334h6.666c.737 0 1.334-.597 1.334-1.333V3.167c0-.737-.597-1.333-1.334-1.333Z'
        />
        <Path
          stroke='#4A6973'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M8 12.5h.007'
        />
      </Svg>
    );
  }

  if (!phoneVerified) {
    return (
      <Svg width={16} height={17} fill='none'>
        <Path
          fill='#FF7575'
          fillOpacity={0.25}
          stroke='#4A6973'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M11.333 1.833H4.667c-.737 0-1.334.597-1.334 1.334v10.666c0 .737.597 1.334 1.334 1.334h6.666c.737 0 1.334-.597 1.334-1.333V3.167c0-.737-.597-1.333-1.334-1.333Z'
        />
        <Path
          stroke='#4A6973'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M8 12.5h.007'
        />
      </Svg>
    );
  }

  return null;
};

export default SmartphoneSvg;
