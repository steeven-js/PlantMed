```js
emulator -avd Pixel_8_API_34 -dns-server 8.8.8.8,8.8.4.4

npx react-native run-android

cd android && ./gradlew clean && cd ..

keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

npx react-native build-android --mode=release

yarn add --dev eslint prettier eslint-config-prettier

npx eslint --init

cd ios/
pod install --repo-update
cd ..
npx react-native run-ios --simulator="iPhone 15"
```