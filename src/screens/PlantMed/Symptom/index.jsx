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
import { STANDARD_SPACING, STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ic_share from '../../../assets/icons/svg/ic_share';
import { shareSymptom } from '../../../functions/share';
import { useUserSymptomsFavoris } from '../../../functions/loadUserFavoris';
import { addOrRemoveSymptomFavoris } from '../../../functions/addOrRemove';
import ic_star_white from '../../../assets/icons/svg/ic_star_white';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ic_info_dark_green from '../../../assets/icons/svg/ic_info_dark_green';
import ic_info_dark_grey from '../../../assets/icons/svg/ic_info_dark_grey';
import ic_clipboard_dark_green from '../../../assets/icons/svg/ic_clipboard_dark_green';
import ic_clipboard_dark_grey from '../../../assets/icons/svg/ic_clipboard_dark_grey';
import { selectError } from '../../../redux/reducer/selectors';
import { FlatGrid } from 'react-native-super-grid';
import { scale } from 'react-native-size-matters';
import GridViewPlant from '../../../components/cards/GridViewPlant';

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
  const error = useSelector(selectError);

  // Récupérer la navigation
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: symptomData.name });
  }, [symptomData, navigation, setTitle]);

  // Image URL
  const imageURL =
    symptomData.media && symptomData.media.length > 0 ? symptomData.media[0].original_url : null;

  // Tab navigator
  const Tab = createMaterialTopTabNavigator();

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

  // Screen options
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: theme.primary,
      elevation: 0,
      padding: 5,
    },
  };

  // Returning
  return (
    <>
      {/* Banner 3 */}
      <View style={styles.fullWidthBannerImageWrapper}>
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
              { justifyContent: 'center', alignItems: 'center', backgroundColor: theme.secondary },
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

      {/* Tab */}
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Info"
          component={InfoScreen}
          initialParams={{ symptomId: symptomId }}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <SvgXml
                  xml={ic_info_dark_green}
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              ) : (
                <SvgXml
                  xml={ic_info_dark_grey}
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              ),
          }}
        />
        <Tab.Screen
          name="SymptomPlants"
          component={PlantsBySymptomScreen}
          initialParams={{ symptomId: symptomId }}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <SvgXml
                  xml={ic_clipboard_dark_green}
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              ) : (
                <SvgXml
                  xml={ic_clipboard_dark_grey}
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );

  function InfoScreen() {
    return (
      <View
        style={[styles.mainWrapper, { backgroundColor: theme.primary }]}
      >
        {/* Content wrapper */}
        <View
          style={[
            styles.contentWrapper,
            { backgroundColor: theme.primary },
          ]}
        >
          <ScrollView
            showsVerticalScrollIndicator={true}
            bounces={false}
            contentContainerStyle={
              styles.scrollViewContentContainerStyle
            }
          >
            {isLoading ? (
              <ActivityIndicator
                size="large"
                color={theme.textHighContrast}
                style={[
                  styles.mainWrapper,
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              />
            ) : error || !symptomData ? (
              <Text
                style={[
                  styles.errorText,
                  { color: theme.textHighContrast },
                ]}
              >
                Error:{' '}
                {error ? error.message : 'No data available'}
              </Text>
            ) : (
              <View>
                <Text
                  style={[
                    styles.profileName,
                    {
                      color: theme.textHighContrast,
                      textAlign: 'center',
                    },
                  ]}
                >
                  {symptomData?.name}
                </Text>
                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />
                {/* Description */}
                <Text
                  style={[
                    styles.profileName,
                    { color: theme.textHighContrast },
                  ]}
                >
                  Description
                </Text>
                <Text
                  style={[
                    styles.sectionContent,
                    { color: theme.textLowContrast },
                  ]}
                >
                  {symptomData?.description}
                </Text>
                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />
                {/* Sources */}
                {symptomData?.source && (
                  <View>
                    {/* Sources */}
                    <Text
                      style={[
                        styles.profileName,
                        { color: theme.textHighContrast },
                      ]}
                    >
                      Sources
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL(symptomData?.source)}>
                      <Text style={[styles.sectionContent, { color: theme.textLowContrast }]}>
                        {symptomData?.source}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }

  function PlantsBySymptomScreen() {
    return (
      <View
        style={[styles.mainWrapper, { backgroundColor: theme.primary }]}
      >
        {/* Flatgrid wrapper */}
        <Text
          style={[
            styles.profileName,
            { color: theme.textHighContrast, textAlign: 'center' },
          ]}
        >
          Listes des plantes associées à ce symptôme
        </Text>
        <View style={styles.flatGridWrapper}>
          {/* Flatgrid */}
          <FlatGrid
            itemDimension={scale(130)}
            data={symptomData.plants || []}
            style={styles.flatGrid}
            spacing={STANDARD_SPACING * 3}
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <GridViewPlant
                plantImage={
                  item.media && item.media.length > 0
                    ? { uri: item.media[0].original_url }
                    : require('../../../assets/images/banners/home/808_x_338.png')
                }
                plantTitle={item.name}
                onPress={() =>
                  navigation.navigate('PlantView', {
                    plantId: item.id,
                    plantName: item.name,
                  })
                }
              />
            )}
          />
        </View>
      </View>
    );
  }
};

// Exporting
export default Symptom;
