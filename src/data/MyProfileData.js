import { SvgXml } from 'react-native-svg';

import ic_heart_dark_green from '../assets/icons/svg/ic_heart_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../config/Constants';

const MyProfileData = [
    {
        leftIcon: (
            <SvgXml
                xml={ic_heart_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
            />
        ),
        label: 'Wishlist',
    },
];

// Exporting
export default MyProfileData;
