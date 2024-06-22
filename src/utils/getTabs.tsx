import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

type Props = {iconColor: string; backgroundColor: string};

const HomeTabSvg: React.FC<Props> = ({
  iconColor = '#CFF5CE',
  backgroundColor = '#000',
}) => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Circle cx={25} cy={25} r={25} fill={backgroundColor} opacity={0.2} />
      <G clipPath='url(#a)'>
        <Path
          fill={iconColor}
          d='m36.4 23.392-.002-.002-9.79-9.79a2.194 2.194 0 0 0-1.562-.647c-.59 0-1.145.23-1.563.647l-9.785 9.785-.01.01a2.212 2.212 0 0 0 .005 3.12 2.197 2.197 0 0 0 1.534.648h.39v7.204a2.589 2.589 0 0 0 2.586 2.586h3.83a.703.703 0 0 0 .703-.703v-5.648c0-.651.53-1.18 1.18-1.18h2.26c.65 0 1.18.529 1.18 1.18v5.648c0 .388.314.703.702.703h3.83a2.589 2.589 0 0 0 2.586-2.586v-7.204h.362c.59 0 1.145-.23 1.563-.648.86-.86.86-2.262 0-3.123Zm-.996 2.13a.798.798 0 0 1-.568.235h-1.065a.703.703 0 0 0-.703.703v7.907c0 .65-.529 1.18-1.18 1.18h-3.127v-4.945a2.589 2.589 0 0 0-2.586-2.586h-2.259a2.589 2.589 0 0 0-2.586 2.586v4.945h-3.127c-.65 0-1.18-.53-1.18-1.18V26.46a.703.703 0 0 0-.703-.703h-1.047a.797.797 0 0 1-.586-.236.804.804 0 0 1 0-1.136l.001-.001 9.79-9.79a.797.797 0 0 1 .568-.235c.214 0 .416.084.567.236l9.788 9.787a.805.805 0 0 1 .003 1.14Z'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M13 13h24v24H13z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

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

const ProfileTabSvg: React.FC<Props> = ({
  iconColor = '#CFF5CE',
  backgroundColor = '#000',
}) => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Circle cx={25} cy={25} r={25} fill={backgroundColor} opacity={0.2} />
      <G clipPath='url(#a)'>
        <Path
          fill={iconColor}
          d='M33.485 16.515A11.921 11.921 0 0 0 25 13a11.921 11.921 0 0 0-8.485 3.515A11.921 11.921 0 0 0 13 25c0 3.205 1.248 6.219 3.515 8.485A11.921 11.921 0 0 0 25 37c3.205 0 6.219-1.248 8.485-3.515A11.921 11.921 0 0 0 37 25c0-3.205-1.248-6.219-3.515-8.485Zm-14.47 17.222A6.059 6.059 0 0 1 25 28.716a6.059 6.059 0 0 1 5.984 5.02A10.534 10.534 0 0 1 25 35.595c-2.219 0-4.28-.687-5.984-1.857Zm2.17-10.243A3.82 3.82 0 0 1 25 19.678a3.82 3.82 0 0 1 3.816 3.816A3.82 3.82 0 0 1 25 27.309a3.82 3.82 0 0 1-3.816-3.815Zm11.017 9.267a7.474 7.474 0 0 0-2.184-3.519 7.476 7.476 0 0 0-2.173-1.372 5.221 5.221 0 0 0 2.377-4.376A5.228 5.228 0 0 0 25 18.272a5.228 5.228 0 0 0-5.222 5.222c0 1.83.947 3.444 2.377 4.376a7.478 7.478 0 0 0-2.173 1.372 7.476 7.476 0 0 0-2.184 3.52A10.567 10.567 0 0 1 14.406 25c0-5.841 4.753-10.594 10.594-10.594 5.841 0 10.594 4.753 10.594 10.594 0 3.063-1.307 5.826-3.392 7.761Z'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M13 13h24v24H13z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const WishlistTabSvg: React.FC<Props> = ({
  iconColor = '#CFF5CE',
  backgroundColor = '#000',
}) => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Circle cx={25} cy={25} r={25} fill={backgroundColor} opacity={0.2} />
      <Path
        stroke={iconColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M33.84 17.61a5.5 5.5 0 0 0-7.78 0L25 18.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L25 34.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z'
      />
    </Svg>
  );
};

const CartTabSvg: React.FC<Props> = ({
  iconColor = '#CFF5CE',
  backgroundColor = '#000',
}) => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Circle cx={25} cy={25} r={25} fill={backgroundColor} opacity={0.2} />
      <G
        stroke={iconColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        clipPath='url(#a)'
      >
        <Path d='M21 36a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM32 36a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 15h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L35 20H18' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M12 14h24v23H12z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const getTabs = () => {
  return [
    {
      id: 1,
      name: 'Home',
      icon: HomeTabSvg,
    },
    {
      id: 2,
      name: 'Category',
      icon: CategoryTabSvg,
    },
    // {
    //   id: 3,
    //   name: 'Order',
    //   icon: CartTabSvg,
    // },
    {
      id: 3,
      name: 'Wishlist',
      icon: WishlistTabSvg,
    },
    {
      id: 4,
      name: 'Profile',
      icon: ProfileTabSvg,
    },
  ];
};

export default getTabs;
