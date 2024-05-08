import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import {
    ActivityIndicator,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';

import ic_close_dark_green from '../../assets/icons/svg/ic_close_dark_green';
import Button from '../../components/buttons/Button';
import ScreenTitle from '../../components/headings/ScreenTitle';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/links/Link';
import Question from '../../components/paragraphs/Question';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import { ShowToast } from '../../functions/toast';
import {
    setUserDisplayName,
    setUserEmail,
    setUserId,
} from '../../redux/reducer/auth';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Login = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Local states
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Navigation
    const navigation = useNavigation();

    // Toggling call request modal
    const toggleModal = () => {
        // Updating states
        setIsModalVisible((prevState) => !prevState);
    };

    const [, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // New state variables for error messages
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emptyFieldsError, setEmptyFieldsError] = useState('');
    const dispatch = useDispatch();

    const handleConnexion = async () => {
        try {
            setIsLoading(true);

            // Clear previous error messages
            setEmailError('');
            setPasswordError('');
            setEmptyFieldsError('');

            // Check for empty input fields
            if (!email || !password) {
                setEmptyFieldsError('Veuillez remplir tous les champs');
                return;
            }

            const userCredential = await auth().signInWithEmailAndPassword(
                email,
                password,
            );
            const userAuth = userCredential.user;

            setUser(userAuth);

            ShowToast({
                type: 'success',
                position: 'top',
                text1: 'Connexion réussie',
                visibilityTime: 3000,
                autoHide: true,
            });

            // Dispatching user data to the Redux store
            dispatch(setUserId(userAuth.uid));
            dispatch(setUserEmail(userAuth.email));
            dispatch(setUserDisplayName(userAuth.displayName));
            console.log('Utilisateur authentifié');

            // Réinitialiser les champs d'entrée après une identification réussie
            setEmail('');
            setPassword('');
            setUser('');

            // Rediriger vers la page d'accueil après l'authentification réussie
            navigation.navigate('Home');
        } catch (error) {
            console.error('Erreur de connexion :', error.message);

            // Display error messages based on the type of error
            if (error.code === 'auth/invalid-email') {
                setEmailError('Adresse e-mail invalide');
            } else if (error.code === 'auth/invalid-credential') {
                setPasswordError('Mot de passe incorrect');
            } else {
                // Handle other types of errors
                // Example: alert('Une erreur s\'est produite lors de la connexion');
                // auth/too-many-requests]
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.accent }]}>
            <ScrollView>
                {/* Form wrapper */}
                <Animatable.View
                    animation="fadeInUp"
                    delay={100}
                    style={[
                        styles.formWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    {/* Screen title */}
                    <Animatable.View animation="fadeInUp" delay={300}>
                        <ScreenTitle title="Se connecter" />
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Screen info component */}
                    <Animatable.View animation="fadeInUp" delay={500}>
                        <ScreenInfo info="Bonjour, veuillez fournir vos informations d'identification pour accéder à votre compte." />
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />
                    <View style={styles.verticalSpacer} />

                    {/* Text input component */}
                    <Animatable.View animation="fadeInUp" delay={700}>
                        <TextInput
                            label="Email"
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                        {emailError ? (
                            <Text style={styles.errorMessage}>
                                {emailError}
                            </Text>
                        ) : null}
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Password text input component */}
                    <Animatable.View animation="fadeInUp" delay={900}>
                        <PasswordTextInput
                            label="Mot de passe"
                            placeholder="Mot de passe"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            afficherMotDePasse={afficherMotDePasse}
                            setAfficherMotDePasse={setAfficherMotDePasse}
                        />
                        {passwordError ? (
                            <Text style={styles.errorMessage}>
                                {passwordError}
                            </Text>
                        ) : null}
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Link component */}
                    <Animatable.View animation="fadeInUp" delay={1100}>
                        <Link label="Mot de passe oublié?" onPress={toggleModal} />
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Button component */}
                    <Animatable.View animation="fadeInUp" delay={1300}>
                        <Button
                            label="Se connecter"
                            onPress={handleConnexion}
                            disabled={isLoading} // Désactivez le bouton pendant le chargement
                        />
                        {emptyFieldsError ? (
                            <Text style={styles.errorMessage}>
                                {emptyFieldsError}
                            </Text>
                        ) : null}
                        {/* Affiche l'indicateur de chargement pendant le chargement */}
                        {isLoading && (
                            <ActivityIndicator size="large" color="red" />
                        )}
                    </Animatable.View>

                    {/* Or divider component */}
                    {/* <Animatable.View animation="fadeInUp" delay={1500}>
                        <OrDivider label="or login with" />
                    </Animatable.View> */}

                    {/* Social media icons wrapper */}
                    {/* <View style={styles.socialMediaIconsWrapper}>
                        <Animatable.View animation="bounceIn" delay={1700}>
                            <TouchableOpacity>
                                <SvgXml
                                    xml={ic_facebook}
                                    width={STANDARD_SOCIAL_ICON_SIZE}
                                    height={STANDARD_SOCIAL_ICON_SIZE}
                                />
                            </TouchableOpacity>
                        </Animatable.View>

                        <Animatable.View animation="bounceIn" delay={1900}>
                            <TouchableOpacity>
                                <SvgXml
                                    xml={ic_twitter}
                                    width={STANDARD_SOCIAL_ICON_SIZE}
                                    height={STANDARD_SOCIAL_ICON_SIZE}
                                />
                            </TouchableOpacity>
                        </Animatable.View>

                        <Animatable.View animation="bounceIn" delay={2100}>
                            <TouchableOpacity>
                                <SvgXml
                                    xml={ic_google}
                                    width={STANDARD_SOCIAL_ICON_SIZE}
                                    height={STANDARD_SOCIAL_ICON_SIZE}
                                />
                            </TouchableOpacity>
                        </Animatable.View>
                    </View> */}

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Question & link component wrapper */}
                    <Animatable.View
                        animation="fadeInUp"
                        delay={1500}
                        style={styles.questionAndLinkWrapper}
                    >
                        {/* Question component */}
                        <Question question="Vous n'avez pas de compte?" />

                        {/* Link component */}
                        <Link
                            label="S'inscrire"
                            onPress={() => navigation.navigate('Register')}
                        />
                    </Animatable.View>
                </Animatable.View>

                {/* Forgot password modal */}
                {isModalVisible ? (
                    <Modal
                        isVisible={isModalVisible}
                        animationIn="slideInDown"
                        animationOut="slideOutDown"
                        backdropColor={theme.accent}
                        backdropOpacity={0.9}
                        style={styles.modal}
                    >
                        <View
                            style={[
                                styles.modalBody,
                                { backgroundColor: theme.primary },
                            ]}
                        >
                            {/* Text input */}
                            <TextInput
                                label="Email"
                                placeholder="Enter your email"
                            />

                            {/* Button */}
                            <View style={styles.modalSubmitButtonWrapper}>
                                <Button label="Recover Password" />
                            </View>
                            {/* Modal close icon */}
                            <View
                                style={[
                                    styles.modalCloseIconWrapper,
                                    { backgroundColor: theme.secondary },
                                ]}
                            >
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={toggleModal}
                                >
                                    <SvgXml
                                        xml={ic_close_dark_green}
                                        width={STANDARD_VECTOR_ICON_SIZE}
                                        height={STANDARD_VECTOR_ICON_SIZE}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                ) : null}
            </ScrollView>
        </View>
    );
};

// Exporting
export default Login;
