import { SvgXml } from 'react-native-svg';

import ic_bell_dark_green from '../assets/icons/svg/ic_bell_dark_green';
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
        label: 'Mes favoris',
    },
    {
        leftIcon: (
            <SvgXml
                xml={ic_bell_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
            />
        ),
        label: 'Notifications',
    },
];

// Exporting
export default MyProfileData;
