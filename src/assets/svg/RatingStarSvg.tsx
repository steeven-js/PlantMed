import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RatingStarSvg: React.FC = () => {
  return (
    <Svg
      width={12}
      height={13}
      fill='none'
    >
      <Path
        fill='#F5B715'
        d='m6 1.5 1.545 3.13L11 5.135 8.5 7.57l.59 3.44L6 9.385 2.91 11.01l.59-3.44L1 5.135l3.455-.505L6 1.5Z'
      />
    </Svg>
  );
};

export default RatingStarSvg;
