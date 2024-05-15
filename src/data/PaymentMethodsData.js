import { SvgXml } from 'react-native-svg';

import ic_pay_method_amazon from '../assets/icons/svg/ic_pay_method_amazon';
import ic_pay_method_credit_card from '../assets/icons/svg/ic_pay_method_credit_card';
import ic_pay_method_google from '../assets/icons/svg/ic_pay_method_google';
import ic_pay_method_master_card from '../assets/icons/svg/ic_pay_method_master_card';
import { STANDARD_VECTOR_ICON_WRAPPER_SIZE } from '../config/Constants';

const PaymentMethodsData = [
    {
        id: 1,
        sectionTitle: 'Recommended',
        methods: [
            {
                id: 1,
                iconSvg: (
                    <SvgXml
                        xml={ic_pay_method_google}
                        width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
                        height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
                    />
                ),
                label: 'Google Pay',
                isChecked: false,
            },
            {
                id: 2,
                iconSvg: (
                    <SvgXml
                        xml={ic_pay_method_amazon}
                        width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
                        height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
                    />
                ),
                label: 'Amazon Pay',
                isChecked: false,
            },
            {
                id: 3,
                iconSvg: (
                    <SvgXml
                        xml={ic_pay_method_master_card}
                        width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
                        height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
                    />
                ),
                label: 'Master Card',
                isChecked: false,
            },
        ],
    },
    {
        id: 2,
        sectionTitle: 'Other options',
        methods: [
            {
                id: 1,
                iconSvg: (
                    <SvgXml
                        xml={ic_pay_method_credit_card}
                        width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
                        height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
                    />
                ),
                label: 'Credit/Debit Card',
                isChecked: true,
            },
        ],
    },
];

// Exporting
export default PaymentMethodsData;
