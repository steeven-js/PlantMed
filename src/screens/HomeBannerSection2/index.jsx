import { Image, View } from 'react-native';

import styles from './styles';

const HomeBannerSection2 = () => {
    return (
        <>
            {/* Banner 3 */}
            <View style={styles.fullWidthBannerImageWrapper}>
                <Image
                    source={require('../../assets/images/banners/home/808_x_338.png')}
                    style={styles.bannerImage}
                />
            </View>
        </>
    );
};

export default HomeBannerSection2;