import { memo, useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_trash_white from '../../../assets/icons/svg/ic_trash_white';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const UserWishlist = ({
    plantImage = null,
    plantTitle = '',
    onPressView = () => {},
    onPressDelete = () => {},
}) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <TouchableOpacity onPress={onPressView}>
            <View
                style={[
                    styles.productCard,
                    { backgroundColor: theme.secondary },
                ]}
            >
                <View
                    style={[
                        styles.productImageWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    <Image source={plantImage} style={styles.productImage} />
                </View>
                {/* Product details wrapper */}
                <View style={styles.productDetailsWrapper}>
                    {/* Product title, price & rating wrapper */}
                    <View>
                        <Text
                            style={[
                                styles.productTitle,
                                { color: theme.textHighContrast },
                            ]}
                            numberOfLines={1}
                        >
                            {plantTitle}
                        </Text>
                    </View>
                </View>

                {/* Trash icon wrapper */}
                <TouchableOpacity
                    onPress={onPressDelete}
                    style={[
                        styles.trashIconWrapper,
                        { backgroundColor: theme.accent },
                    ]}
                >
                    <SvgXml
                        xml={ic_trash_white}
                        width={STANDARD_VECTOR_ICON_SIZE}
                        height={STANDARD_VECTOR_ICON_SIZE}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

// Exporting
export default memo(UserWishlist);
