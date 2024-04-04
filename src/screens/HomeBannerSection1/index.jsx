import { Image, View } from 'react-native';

import styles from './styles';

const HomeBannerSection1 = () => {
    return (
        <>
            {/* Vertical spacer */}
            <View style={styles.verticalSpacer} />

            {/* Banner 1 */}
            <View style={styles.bannerImageWrapper}>
                <Image
                    source={require('../../assets/images/banners/home/556_x_287.png')}
                    style={styles.bannerImage}
                />
            </View>
        </>
    );
};

export default HomeBannerSection1;
