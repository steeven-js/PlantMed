import React from 'react';
import {View, Text, ScrollView, Platform} from 'react-native';

import {text} from '../text';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {utils} from '../utils';

const policy = [
  {
    id: 1,
    title: "Date d'entrée en vigueur : 05 Février 2024",
    description:
      "Cette Politique de Confidentialité décrit la manière dont les informations sont collectées, utilisées et partagées lorsque vous utilisez l'application mobile de plantes médicinales (ci-après dénommée 'PlantMed').",
  },
  {
    id: 2,
    title: 'Collecte et Utilisation des Informations',
    description:
      "Nous ne collectons aucune information personnelle identifiable lorsque vous utilisez l'Application. Toutefois, l'Application peut collecter automatiquement certaines informations non personnelles, telles que le type de dispositif mobile que vous utilisez, l'identifiant unique de votre appareil, la version du système d'exploitation de votre appareil et des informations sur la manière dont vous utilisez l'Application. Ces informations sont utilisées dans le but d'améliorer la fonctionnalité de l'Application et de fournir un service de meilleure qualité.",
  },
  {
    id: 3,
    title: 'Partage des Informations',
    description:
      "Nous ne partageons aucune information personnelle identifiable collectée par le biais de l'Application. Nous pouvons partager des informations non personnelles avec des fournisseurs de services tiers engagés pour nous aider à exploiter et à améliorer l'Application. Ces tiers n'ont pas le droit d'utiliser les informations que nous leur fournissons à d'autres fins que celles de nous aider.",
  },
  {
    id: 4,
    title: 'Sécurité',
    description:
      "Nous prenons des mesures raisonnables pour protéger les informations non personnelles collectées par le biais de l'Application contre la perte, le vol, l'accès non autorisé, la divulgation, la modification ou la destruction.",
  },
  {
    id: 5,
    title: 'Modifications de la Politique de Confidentialité',
    description:
      'Nous nous réservons le droit de mettre à jour cette Politique de Confidentialité à tout moment. Nous vous recommandons de consulter régulièrement cette page pour prendre connaissance de toute modification. Les modifications apportées à cette Politique de Confidentialité entrent en vigueur dès leur publication sur cette page.',
  },
  {
    id: 6,
    title: 'Contactez-nous',
    description:
      "Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité, veuillez nous contacter à contact@jsprod.fr. En utilisant l'Application, vous consentez à cette Politique de Confidentialité.",
  },
];

const PrivacyPolicy: React.FC = () => {
  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title='Politique de confidentialité'
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(40),
          paddingBottom: utils.responsiveHeight(20),
        }}
      >
        {policy.map((item, index) => {
          return (
            <View
              key={item.id.toString()}
              style={{
                marginBottom: utils.responsiveHeight(40),
              }}
            >
              <text.H5 style={{marginBottom: utils.responsiveHeight(10)}}>
                {index + 1 + '. ' + item.title}
              </text.H5>
              <Text
                style={{
                  ...theme.fonts.DM_Sans_400Regular,
                  fontSize: Platform.OS === 'ios' ? 14 : 12,
                  lineHeight: Platform.OS === 'ios' ? 14 * 1.7 : 12 * 1.7,
                  color: theme.colors.textColor,
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <custom.ImageBackground
      style={{flex: 1}}
      resizeMode='stretch'
      source={require('../assets/bg/02.png')}
    >
      <custom.SafeAreaView
        insets={['top', 'bottom']}
        containerStyle={{backgroundColor: theme.colors.transparent}}
      >
        {renderHeader()}
        {renderContent()}
      </custom.SafeAreaView>
    </custom.ImageBackground>
  );
};

export default PrivacyPolicy;
