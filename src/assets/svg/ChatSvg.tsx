import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {theme} from '../../constants/colors';

type Props = {fillColor: string};

const ChatSvg: React.FC<Props> = ({fillColor = theme.colors.white}) => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
    >
      <Path
        fill={fillColor}
        d='M21.413 17.765a7.313 7.313 0 0 0-5.644-10.79 7.313 7.313 0 1 0-13.181 6.29l-.6 2.11a1.125 1.125 0 0 0 1.387 1.387l2.11-.6a7.247 7.247 0 0 0 2.746.863 7.313 7.313 0 0 0 10.285 3.637l2.11.6a1.114 1.114 0 0 0 1.387-1.387l-.6-2.11ZM5.559 14.991a.44.44 0 0 0-.159.028l-2.334.665.665-2.334a.525.525 0 0 0-.056-.44 6.178 6.178 0 1 1 2.166 2.165.516.516 0 0 0-.282-.084Zm14.71 2.859.665 2.334-2.334-.665a.526.526 0 0 0-.44.056 6.197 6.197 0 0 1-8.682-2.531 7.323 7.323 0 0 0 6.835-7.294 7.395 7.395 0 0 0-.179-1.584 6.197 6.197 0 0 1 4.191 9.243.526.526 0 0 0-.056.44Z'
      />
    </Svg>
  );
};

export default ChatSvg;
