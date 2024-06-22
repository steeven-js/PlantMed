import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {theme} from '../../constants/colors';

type Props = {fillColor?: string};

const PeopleSearchSvg: React.FC<Props> = ({fillColor = theme.colors.white}) => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
    >
      <Path
        fill={fillColor}
        d='M12 2.4a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6ZM8.4 7.2a3.6 3.6 0 1 1 7.2 0 3.6 3.6 0 0 1-7.2 0Zm9.438 12.956c-1.285.82-2.945 1.277-4.754 1.405a1.799 1.799 0 0 0-.41-.634l-.529-.528c2.022-.02 3.792-.455 5.047-1.256 1.26-.803 2.008-1.971 2.008-3.543a1.2 1.2 0 0 0-1.2-1.2h-7.507a5.38 5.38 0 0 0-.603-1.2H18a2.4 2.4 0 0 1 2.4 2.4c0 2.03-1 3.56-2.562 4.556ZM5.4 20.4c.943 0 1.814-.312 2.515-.836l3.06 3.06a.6.6 0 1 0 .85-.849l-3.06-3.06A4.2 4.2 0 1 0 5.4 20.4Zm0-1.2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z'
      />
    </Svg>
  );
};

export default PeopleSearchSvg;
