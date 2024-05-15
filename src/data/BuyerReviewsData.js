import {SvgXml} from 'react-native-svg';
import av_man_1 from '../assets/avatars/svg/av_man_1';
import av_man_2 from '../assets/avatars/svg/av_man_2';
import av_man_3 from '../assets/avatars/svg/av_man_3';
import av_woman_1 from '../assets/avatars/svg/av_woman_1';
import av_woman_2 from '../assets/avatars/svg/av_woman_2';
import {STANDARD_USER_AVATAR_WRAPPER_SIZE} from '../config/Constants';

const BuyerReviewsData = [
  {
    id: 1,
    buyerAvatarSvg: (
      <SvgXml
        xml={av_man_1}
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'Jhon Doe',
    reviewAge: '2 mins ago',
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    id: 2,
    buyerAvatarSvg: (
      <SvgXml
        xml={av_woman_1}
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'Milinda Doe',
    reviewAge: '15 mins ago',
    rating: 3,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    id: 3,
    buyerAvatarSvg: (
      <SvgXml
        xml={av_man_2}
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'Rhonie Irani',
    reviewAge: '5 days ago',
    rating: 4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    id: 4,
    buyerAvatarSvg: (
      <SvgXml
        xml={av_woman_2}
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'James Smith',
    reviewAge: '12 days ago',
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    id: 5,
    buyerAvatarSvg: (
      <SvgXml
        xml={av_man_3}
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'Jhonatan Tret',
    reviewAge: '2 months ago',
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
];

// Exporting
export default BuyerReviewsData;
