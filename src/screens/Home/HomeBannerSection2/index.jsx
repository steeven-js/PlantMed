import { Image, View } from 'react-native';

import styles from './styles';

const HomeBannerSection2 = ({ banner }) => {

    return (
        <View style={styles.fullWidthBannerImageWrapper}>
            <Image
                source={{ uri: banner }}
                style={styles.bannerImage}
            />
        </View>
    );
};

export default HomeBannerSection2;
