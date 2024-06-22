import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CreditCardModalSvg: React.FC = () => {
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
        d='M12.25 2.75H1.75c-.644 0-1.167.522-1.167 1.167v7c0 .644.523 1.166 1.167 1.166h10.5c.644 0 1.167-.522 1.167-1.166v-7c0-.645-.523-1.167-1.167-1.167ZM.583 6.75h12.834'
      />
    </Svg>
  );
};

export default CreditCardModalSvg;
