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
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ic_share from '../../../assets/icons/svg/ic_share';
import { shareSymptom } from '../../../functions/share';
import { useUserSymptomsFavoris } from '../../../functions/loadUserFavoris';
import { addOrRemoveSymptomFavoris } from '../../../functions/addOrRemove';
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
  }, [symptomData, navigation, setTitle]);

  // Image URL
  const imageURL =
    symptomData.media && symptomData.media.length > 0 ? symptomData.media[0].original_url : null;

  // Partager une plante
  const handleShare = () => {
    shareSymptom(symptomId);
  };

  // Use useUserPlantsFavoris to fetch user's favorites
  const userSymptomsFavoris = useUserSymptomsFavoris(uid);

  // Si plantId est dans userFavoris, alors la plante est en favoris sinon non
  // console.log('userSymptomsFavoris:', userSymptomsFavoris);
  const isFavoris = userSymptomsFavoris && userSymptomsFavoris.userSymptomsFavoris && userSymptomsFavoris.userSymptomsFavoris.includes && userSymptomsFavoris.userSymptomsFavoris.includes(symptomId);
  // console.log('isFavoris:', isFavoris);

  // Ajouter ou supprimer une plante des favoris
  const handleaddOrRemoveSymptomFavoris = async () => {
    await addOrRemoveSymptomFavoris({ uid, data: symptomData, symptomId });
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
            style={[styles.bannerImage, { backgroundColor: theme.secondary }]}
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
                    ? handleaddOrRemoveSymptomFavoris
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
          </View>

          {/* Description */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Description
          </Text>

          <Text style={[styles.description, { color: theme.textLowContrast }]}>
            {symptomData.description}
          </Text>


          {/* Plant care */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Plantes associées
          </Text>

          {/* Horizontal ScrollView */}
          <View>
            <ScrollView
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}>

              {symptomData.plants.map((plant) => (
                <View key={plant.id} style={styles.plantCareWrapper}>
                  <Text
                    style={[
                      styles.plantCareAmount,
                      { color: theme.textLowContrast },
                    ]}>
                    {plant.name}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

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
