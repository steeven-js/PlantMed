import styles from './styles';
import {memo, useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import ic_star from '../../../assets/icons/svg/ic_star';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import ic_trash_white from '../../../assets/icons/svg/ic_trash_white';

// Functional component
const WishlistProduct = ({productImage, productTitle, productPrice}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.productCard, {backgroundColor: theme.secondary}]}>
      <View
        style={[styles.productImageWrapper, {backgroundColor: theme.primary}]}>
        <Image source={productImage} style={styles.productImage} />
      </View>
      {/* Product details wrapper */}
      <View style={styles.productDetailsWrapper}>
        {/* Product title, price & rating wrapper */}
        <View>
          <Text
            style={[styles.productTitle, {color: theme.textHighContrast}]}
            numberOfLines={1}>
            {productTitle}
          </Text>
          <View style={styles.productPriceAndRatingWrapper}>
            <Text style={[styles.productPrice, {color: theme.accent}]}>
              {productPrice}
            </Text>
            <View style={styles.starAndRatingWrapper}>
              <SvgXml
                xml={ic_star}
                width={STANDARD_VECTOR_ICON_SIZE * 0.75}
                height={STANDARD_VECTOR_ICON_SIZE * 0.75}
              />
              <Text style={[styles.rating, {color: theme.accent}]}>3.8</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Trash icon wrapper */}
      <TouchableOpacity
        style={[styles.trashIconWrapper, {backgroundColor: theme.accent}]}>
        <SvgXml
          xml={ic_trash_white}
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      </TouchableOpacity>
    </View>
  );
};

// Exporting
export default memo(WishlistProduct);
