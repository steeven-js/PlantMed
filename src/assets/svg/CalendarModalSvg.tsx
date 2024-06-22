import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CalendarModalSvg: React.FC = () => {
  return (
    <Svg
      width={14}
      height={14}
      fill='none'
    >
      <Path
        stroke='#18DF80'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11.083 2.333H2.917c-.645 0-1.167.523-1.167 1.167v8.167c0 .644.522 1.166 1.167 1.166h8.166c.645 0 1.167-.522 1.167-1.166V3.5c0-.644-.522-1.167-1.167-1.167ZM1.75 5.833h10.5M9.333 1.167V3.5M4.667 1.167V3.5'
      />
    </Svg>
  );
};

export default CalendarModalSvg;
