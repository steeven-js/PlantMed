import { memo, useContext } from 'react';
import { Text, View } from 'react-native';

import { STANDARD_SPACING } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const WalletTransactionCard = ({
    date,
    month,
    vendor,
    time,
    amount,
    isLastItem,
}) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View
            style={[
                styles.transactionWrapper,
                { marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3 },
            ]}
        >
            <View style={styles.dateTimeAndVendorWrapper}>
                {/* Transaction date */}
                <View
                    style={[
                        styles.dateWrapper,
                        { backgroundColor: theme.accent },
                    ]}
                >
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.month}>{month}</Text>
                </View>

                {/* Vendor & time */}
                <View>
                    {/* Vendor */}
                    <Text
                        style={[
                            styles.vendor,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        {vendor}
                    </Text>

                    {/* Transaction date */}
                    <Text
                        style={[styles.time, { color: theme.textLowContrast }]}
                    >
                        {time}
                    </Text>
                </View>
            </View>

            {/* Transaction amount */}
            <Text
                style={[
                    styles.transactionAmount,
                    { color: theme.textHighContrast },
                ]}
            >
                {amount}
            </Text>
        </View>
    );
};

// Exporting
export default memo(WalletTransactionCard);
