import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fillColor: string;
};

const SingleStarSvg: React.FC<Props> = ({fillColor = '#F5B715'}) => (
  <Svg
    width={12}
    height={12}
    fill='none'
  >
    <Path
      fill={fillColor}
      stroke='#F5B715'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M6 2.13 7.097 4.35a.5.5 0 0 0 .376.274l2.453.358L8.15 6.712a.5.5 0 0 0-.144.443l.419 2.44-2.193-1.153a.5.5 0 0 0-.466 0L3.574 9.596l.419-2.441a.5.5 0 0 0-.144-.443L2.074 4.983l2.453-.358a.5.5 0 0 0 .376-.274L6 2.13Z'
    />
  </Svg>
);

export default SingleStarSvg;
