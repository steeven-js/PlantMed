import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  Linking,
} from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import { SvgXml } from 'react-native-svg';
import { useContext } from 'react';
import ic_star from '../../../assets/icons/svg/ic_star';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { sharePlant } from '../../../functions/share';
import { addOrRemovePlantFavoris } from '../../../functions/addOrRemove';
import ic_share from '../../../assets/icons/svg/ic_share';
import ic_star_white from '../../../assets/icons/svg/ic_star_white';
import { useUserPlantsFavoris } from '../../../functions/loadUserFavoris';

// Functional component
const Plant = ({ route }) => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Getting theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  const { plantId, setTitle } = route.params;
  const plantData = useSelector((state) => state.plants.plantsData.find(plant => plant.id === plantId));
  const isLoading = useSelector((state) => state.plants.isLoading);
  const uid = useSelector((state) => state.auth.uid);

  // Récupérer la navigation
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: plantData.name });
  }, [plantData, setTitle, navigation]);

  // Image URL
  const imageURL =
    plantData.media && plantData.media.length > 0 ? plantData.media[0].original_url : null;

  // Partager une plante
  const handleShare = () => {
    sharePlant(plantId);
  };

  // Use useUserPlantsFavoris to fetch user's favorites
  const userPlantsFavoris = useUserPlantsFavoris(uid);

  // Si plantId est dans userFavoris, alors la plante est en favoris sinon non
  // console.log('userPlantsFavoris:', userPlantsFavoris);
  const isFavoris = userPlantsFavoris && userPlantsFavoris.userPlantsFavoris && userPlantsFavoris.userPlantsFavoris.includes && userPlantsFavoris.userPlantsFavoris.includes(plantId);
  // console.log('isFavoris:', isFavoris);

  // Ajouter ou supprimer une plante des favoris
  const handleaddOrRemovePlantFavoris = async () => {
    await addOrRemovePlantFavoris({ uid, data: plantData, plantId });
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
          showsVerticalScrollIndicator={true}
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
                {plantData.name}
              </Text>
            </View>
          </View>

          {/* Information scientifiques*/}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Information scientifiques
          </Text>

          {/* Horizontal ScrollView */}
          <View>
            <ScrollView
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.plantCareWrapper}>
                <Text style={[styles.plantCareTitle, { color: theme.accent }]}>
                  Nom scientifique
                </Text>
                <Text
                  style={[
                    styles.plantCareAmount,
                    { color: theme.textLowContrast },
                  ]}>
                  {plantData.nscient}
                </Text>
              </View>

              <View style={styles.plantCareWrapper}>
                <Text style={[styles.plantCareTitle, { color: theme.accent }]}>
                  Famille
                </Text>
                <Text
                  style={[
                    styles.plantCareAmount,
                    { color: theme.textLowContrast },
                  ]}>
                  {plantData.famille}
                </Text>
              </View>

              <View style={styles.plantCareWrapper}>
                <Text style={[styles.plantCareTitle, { color: theme.accent }]}>
                  Genre
                </Text>
                <Text
                  style={[
                    styles.plantCareAmount,
                    { color: theme.textLowContrast },
                  ]}>
                  {plantData.genre}
                </Text>
              </View>
            </ScrollView>
          </View>

          {/* Description */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Description
          </Text>

          <Text style={[styles.description, { color: theme.textLowContrast }]}>
            {plantData.description}
          </Text>

          {/* Habitat */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Habitat
          </Text>

          <Text style={[styles.description, { color: theme.textLowContrast }]}>
            {plantData.habitat}
          </Text>

          {/* Propriete */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Propriete
          </Text>

          <Text style={[styles.description, { color: theme.textLowContrast }]}>
            {plantData.propriete}
          </Text>

          {/* Precaution */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Propriete
          </Text>

          <Text style={[styles.description, { color: theme.textLowContrast }]}>
            {plantData.precaution}
          </Text>

          {/* UsageInterne */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            UsageInterne
          </Text>

          <Text style={[styles.description, { color: theme.textLowContrast }]}>
            {plantData.usageInterne}
          </Text>

          {/* UsageExterne */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            UsageExterne
          </Text>

          <Text style={[styles.description, { color: theme.textLowContrast }]}>
            {plantData.usageExterne}
          </Text>

          {/* Source */}
          <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
            Source
          </Text>

          <TouchableOpacity onPress={() => Linking.openURL(plantData?.source)}>
            <Text style={[styles.description, { color: theme.textLowContrast }]}>
              {plantData?.source}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

// Exporting
export default Plant;
