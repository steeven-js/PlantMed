import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  emailVerified: boolean;
};

const MailSvg: React.FC<Props> = ({emailVerified}): JSX.Element | null => {
  if (emailVerified) {
    return (
      <Svg width={16} height={17} fill='none'>
        <Path
          fill='#CFF5CE'
          stroke='#4A6973'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M2.667 3.167h10.666c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333v-8c0-.733.6-1.333 1.334-1.333Z'
        />
        <Path
          stroke='#4A6973'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M14.667 4.5 8 9.167 1.333 4.5'
        />
      </Svg>
    );
  }

  if (!emailVerified) {
    return (
      <Svg width={16} height={17} fill='none'>
        <Path
          fill='#FF7575'
          fillOpacity={0.25}
          stroke='#4A6973'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M2.667 3.167h10.666c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333v-8c0-.733.6-1.333 1.334-1.333Z'
        />
        <Path
          stroke='#4A6973'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M14.667 4.5 8 9.167 1.333 4.5'
        />
      </Svg>
    );
  }

  return null;
};

export default MailSvg;
