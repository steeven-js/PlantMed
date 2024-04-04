```js
emulator -avd Pixel_7_API_34 -dns-server 8.8.8.8,8.8.4.4`

npx react-native start

cd android && ./gradlew clean && cd ..

keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

npx react-native build-android --mode=release

yarn add --dev eslint prettier eslint-config-prettier

npx eslint --init
```

```js
    // Utilisation de useNavigation
    const navigation = useNavigation();

    // Navigating to the specified screen
    const _navigateToScreen = useCallback(
        (screen) => navigation.navigate(screen),
        [navigation],
    );
```

```js
import { useNavigation } from '@react-navigation/native';

// Autres imports...

// Functional component
const SymptomView = ({ route }) => {
    // Utilisation de useNavigation pour obtenir l'objet navigation
    const navigation = useNavigation();

    // Restaurer la navigation lorsque l'utilisateur quitte la vue du symptôme
    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'PlantMedTab' }],
            });
        });

        return unsubscribe;
    }, [navigation]);

    // Autres parties du composant...
};
```