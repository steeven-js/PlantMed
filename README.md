# PlantMedApp

## Instructions de Configuration

### Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

-   Node.js (v14.x ou supérieur)
-   npm (v6.x ou supérieur) ou Yarn (v1.22.x ou supérieur)
-   React Native CLI (v0.64.x ou supérieur)

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

-   **Lancer l'émulateur Android**

    ```shell
    emulator -avd Pixel_8_API_34 -dns-server 8.8.8.8,8.8.4.4
    ```

-   **Exécuter l'application sur Android**

    ```shell
    npx react-native run-android
    ```

-   **Installer les dépendances iOS et exécuter l'application sur un simulateur**

    ```shell
    cd ios/
    pod install --repo-update
    cd ..
    npx react-native run-ios --simulator="iPhone 15"
    ```

-   **Générer une clé de signature pour la publication sur Google Play**

    ```shell
    keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    ```

-   **Construire une version de production pour Android**

    ```shell
    npx react-native build-android --mode=release
    ```

-   **Installer ESLint, Prettier et la configuration ESLint-Prettier**

    ```shell
    yarn add --dev eslint prettier eslint-config-prettier
    npx eslint --init
    ```

1. Supprimez les pods et le dossier `Podfile.lock` :

```bash
rm -rf ios/Pods
rm ios/Podfile.lock
```

2. Supprimez les dossiers `DerivedData` de Xcode (ceci peut prendre un peu de temps) :

```bash
rm -rf ~/Library/Developer/Xcode/DerivedData
```

3. Réinstallez les pods :

```bash
cd ios
pod install
cd ..
```

1. Nettoyez le cache de CocoaPods :

```bash
pod cache clean --all
```

1. Réinstallez les pods :

```bash
cd ios
pod install --repo-update
cd ..
```

### Pour commencer

Pour commencer à travailler sur le projet, vous pouvez exécuter les commandes suivantes :

```shell
npm start
# ou
yarn start
```
