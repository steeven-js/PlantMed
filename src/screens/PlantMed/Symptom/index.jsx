import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import { SvgXml } from 'react-native-svg';
import { useContext } from 'react';
import ic_star from '../../../assets/icons/svg/ic_star';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import ic_heart_dark_green from '../../../assets/icons/svg/ic_heart_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ic_share from '../../../assets/icons/svg/ic_share';
import { sharePlant } from '../../../functions/share';
import { useUserSymptomsFavoris } from '../../../functions/loadUserFavoris';
import { addOrRemovePlantFavoris } from '../../../functions/addOrRemove';
import ic_star_white from '../../../assets/icons/svg/ic_star_white';

// Functional component
const Symptom = ({ route }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Getting theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const { symptomId, setTitle } = route.params;
  const symptomData = useSelector((state) => state.symptoms.symptomsData.find(symptom => symptom.id === symptomId));
  const isLoading = useSelector((state) => state.symptoms.isLoading);
  const uid = useSelector((state) => state.auth.uid);

  // Récupérer la navigation
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: symptomData.name });
  }, [symptomData, setTitle, navigation]);

  // Image URL
  const imageURL =
    symptomData.media && symptomData.media.length > 0 ? symptomData.media[0].original_url : null;

  // Partager une plante
  const handleShare = () => {
    sharePlant(symptomId);
  };

  // Use useUserPlantsFavoris to fetch user's favorites
  const userSymptomsFavoris = useUserSymptomsFavoris(uid);

  // Si plantId est dans userFavoris, alors la plante est en favoris sinon non
  // console.log('userPlantsFavoris:', userPlantsFavoris);
  const isFavoris = userSymptomsFavoris && userSymptomsFavoris.userSymptomsFavoris && userSymptomsFavoris.userSymptomsFavoris.includes && userSymptomsFavoris.userSymptomsFavoris.includes(symptomId);
  // console.log('isFavoris:', isFavoris);

  // Ajouter ou supprimer une plante des favoris
  const handleaddOrRemovePlantFavoris = async () => {
    await addOrRemovePlantFavoris({ uid, data: symptomData, symptomId });
  };

  // Returning
  return (
    <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>

      <View style={styles.fullWidthBannerImageWrapper}>
        {/* Banner */}
        {imageURL ? (
          <Image
            source={
              imageURL
                ? { uri: imageURL }
                : require('../../../assets/images/banners/home/808_x_338.png')
            }
            style={styles.bannerImage}
          />
        ) : (
          <ActivityIndicator
            size="large"
            color={theme.textHighContrast}
            style={[
              styles.mainWrapper,
              { justifyContent: 'center', alignItems: 'center' },
            ]}
          />
        )}

        <View style={styles.imageIcons}>
          <View style={styles.imageIconsItem}>
            <TouchableOpacity
              onPress={isLoading ? undefined : handleShare}
            >
              {isLoading ? (
                <ActivityIndicator
                  size="large"
                  color={theme.textHighContrast}
                />
              ) : (
                <SvgXml
                  xml={ic_share}
                  width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                  height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.imageIconsItem}>
            <TouchableOpacity
              onPress={
                isLoading
                  ? undefined
                  : uid
                    ? handleaddOrRemovePlantFavoris
                    : () =>
                      navigation.navigate('Auth Stack', {
                        screen: 'Login',
                      })
              }
            >
              {isLoading ? (
                <ActivityIndicator
                  size="large"
                  color={theme.textHighContrast}
                />
              ) : (
                <SvgXml
                  xml={isFavoris ? ic_star : ic_star_white}
                  width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                  height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Product details wrapper */}
      <View style={styles.productDetailsOuterWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={[
            styles.productDetailsScrollView,
            { backgroundColor: theme.primary },
          ]}>

          <View style={styles.productTitleAndHeartIconWrapper}>
            <View style={styles.productTitleWrapper}>
              <Text
                style={[styles.productTitle, { color: theme.textHighContrast }]}
                numberOfLines={1}>
                {symptomData.name}
              </Text>
            </View>
            <TouchableOpacity
              style={[
                styles.heartIconWrapper,
                { backgroundColor: theme.secondary },
              ]}>
              <SvgXml
                xml={ic_heart_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            </TouchableOpacity>
          </View>

          {/* Rating */}
          <TouchableOpacity
            style={styles.ratingWrapper}
            onPress={() => navigation.navigate('Product Reviews')}>
            <SvgXml
              xml={ic_star}
              width={STANDARD_VECTOR_ICON_SIZE * 0.9}
              height={STANDARD_VECTOR_ICON_SIZE * 0.9}
            />
            <Text style={[styles.rating, { color: theme.accent }]}>4.8</Text>
            <Text style={[styles.outOf, { color: theme.textLowContrast }]}>
              out of
            </Text>
            <Text
              style={[styles.ratingThreshold, { color: theme.textHighContrast }]}>
              5.0
            </Text>
            <Text style={[styles.totalRating, { color: theme.textHighContrast }]}>
              (177)
            </Text>
          </TouchableOpacity>

          {/* Plant care */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Plant care
          </Text>

          {/* Horizontal ScrollView */}
          <View>
            <ScrollView
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.plantCareWrapper}>
                <Text style={[styles.plantCareTitle, { color: theme.accent }]}>
                  Temperature
                </Text>
                <Text
                  style={[
                    styles.plantCareAmount,
                    { color: theme.textLowContrast },
                  ]}>
                  25 - 30 degree celsius
                </Text>
              </View>

              <View style={styles.plantCareWrapper}>
                <Text style={[styles.plantCareTitle, { color: theme.accent }]}>
                  Water
                </Text>
                <Text
                  style={[
                    styles.plantCareAmount,
                    { color: theme.textLowContrast },
                  ]}>
                  Medium(2 times/day)
                </Text>
              </View>

              <View style={styles.plantCareWrapper}>
                <Text style={[styles.plantCareTitle, { color: theme.accent }]}>
                  Humidity
                </Text>
                <Text
                  style={[
                    styles.plantCareAmount,
                    { color: theme.textLowContrast },
                  ]}>
                  25 - 30 degree celsius
                </Text>
              </View>

              <View style={styles.plantCareWrapper}>
                <Text style={[styles.plantCareTitle, { color: theme.accent }]}>
                  Sunlight
                </Text>
                <Text
                  style={[
                    styles.plantCareAmount,
                    { color: theme.textLowContrast },
                  ]}>
                  Very low(Upto 1 hour)
                </Text>
              </View>
            </ScrollView>
          </View>

          {/* Description */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Description
          </Text>

          <Text style={[styles.description, { color: theme.textLowContrast }]}>
            {symptomData.description}
          </Text>

          {/* source */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Source
          </Text>

          {symptomData?.source && (
            <TouchableOpacity onPress={() => Linking.openURL(symptomData?.source)}>
              <Text style={[styles.description, { color: theme.textLowContrast }]}>
                {symptomData.source}
              </Text>
            </TouchableOpacity>
          )}

        </ScrollView>
      </View>
    </View>
  );
};

// Exporting
export default Symptom;
