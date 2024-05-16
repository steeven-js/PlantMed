import styles from './styles';
import {memo, useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import ic_star from '../../../assets/icons/svg/ic_star';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ic_bag_white from '../../../assets/icons/svg/ic_bag_white';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';

// Functional component
const GridViewSymptom = ({
  symptomImage,
  symptomTitle,
  onPress,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={[styles.symptomCard, {backgroundColor: theme.secondary}]}
      onPress={onPress}>
      {/* Rotated background */}
      <View
        style={[styles.rotatedBackground, {borderColor: theme.secondary}]}
      />
      {/* Product image */}
      <Image source={symptomImage} style={styles.symptomImage} />

      {/* Product title */}
      <Text
        style={[styles.symptomTitle, {color: theme.textHighContrast}]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {symptomTitle}
      </Text>

      {/* Price & rating wrapper */}
      <View style={styles.symptomPriceAndRatingWrapper}>
        <View style={styles.starAndRatingWrapper}>
          <SvgXml
            xml={ic_star}
            width={STANDARD_VECTOR_ICON_SIZE * 0.75}
            height={STANDARD_VECTOR_ICON_SIZE * 0.75}
          />
        </View>
      </View>

      {/* Bag icon wrapper */}
      <TouchableOpacity
        style={[styles.bagIconWrapper, {backgroundColor: theme.accent}]}>
        <SvgXml
          xml={ic_bag_white}
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(GridViewSymptom);
