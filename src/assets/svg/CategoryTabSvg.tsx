import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {iconColor: string; backgroundColor: string};

const CategoryTabSvg: React.FC<Props> = ({
  iconColor = '#CFF5CE',
  backgroundColor = '#000',
}) => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Circle cx={25} cy={25} r={25} fill={backgroundColor} opacity={0.2} />
      <Path
        fill={iconColor}
        fillRule='evenodd'
        d='M24 16.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM15.25 24a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Z'
        clipRule='evenodd'
      />
      <Path
        fill={iconColor}
        fillRule='evenodd'
        d='M28.943 28.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 1 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z'
        clipRule='evenodd'
      />
    </Svg>
  );
};

export default CategoryTabSvg;
