# PlantMedApp

Nouveautés de la version 1.5
Refonte de l'application :
Nous avons repensé l'interface de PlantMed pour vous offrir une expérience plus intuitive et agréable.

Amélioration de l'ergonomie :
Naviguez plus facilement grâce à une ergonomie améliorée et des interactions simplifiées.

Amélioration des performances :
PlantMed est désormais plus rapide et réactif pour vous permettre de trouver les informations dont vous avez besoin sans attendre.

Correction de bugs :
Nous avons résolu divers bugs pour améliorer la stabilité et la fiabilité de l'application.

Mettez à jour dès maintenant pour profiter de ces améliorations et optimisations. Merci de votre soutien et de vos retours qui nous aident à améliorer PlantMed continuellement !

## Instructions de Configuration

### Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (v14.x ou supérieur)
- npm (v6.x ou supérieur) ou Yarn (v1.22.x ou supérieur)
- React Native CLI (v0.64.x ou supérieur)

### Étapes d'installation

1. Clonez ce dépôt sur votre machine :

   ```shell
   git clone <lien-du-repo>
   cd <nom-du-repo>
   ```

2. Installez les dépendances du projet en exécutant la commande suivante :
   ```shell
   npm install
   # ou
   yarn install
   ```

### Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :

- **Lancer l'émulateur Android**

  ```shell
  emulator -avd Pixel_8_API_34 -dns-server 8.8.8.8,8.8.4.4
  ```

- **Exécuter l'application sur Android**

  ```shell
  npx react-native run-android
  ```

- **Installer les dépendances iOS et exécuter l'application sur un simulateur**

  ```shell
  cd ios/
  pod install --repo-update
  cd ..
  npx react-native run-ios --simulator="iPhone 15"
  ```

- **Générer une clé de signature pour la publication sur Google Play**

  ```shell
  keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
  ```

- **Construire une version de production pour Android**

  ```shell
  npx react-native build-android --mode=release
  ```

- **Installer ESLint, Prettier et la configuration ESLint-Prettier**

  ```shell
  yarn add --dev eslint prettier eslint-config-prettier
  npx eslint --init
  ```

### Pour commencer

Pour commencer à travailler sur le projet, vous pouvez exécuter les commandes suivantes :

```shell
npm start
# ou
yarn start
```
