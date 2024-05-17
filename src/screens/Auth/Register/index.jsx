import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';

import Button from '../../../components/buttons/Button';
import ScreenTitle from '../../../components/headings/ScreenTitle';
import PasswordTextInput from '../../../components/inputs/PasswordTextInput';
import TextInput from '../../../components/inputs/TextInput';
import Link from '../../../components/links/Link';
import Question from '../../../components/paragraphs/Question';
import ScreenInfo from '../../../components/paragraphs/ScreenInfo';
import { ShowToast } from '../../../functions/toast';
import {
    setUserDisplayName,
    setUserEmail,
    setUserId,
} from '../../../redux/reducer/auth';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Register = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Using Redux
    const dispatch = useDispatch();

    // State variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [displayName, setDisplayName] = useState('');

    // New state variables for error messages
    const [emailError, setEmailError] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [displayNameError, setDisplayNameError] = useState('');
    const [emptyFieldsError, setEmptyFieldsError] = useState('');
    const [showLengthError, setShowLengthError] = useState(false);

    // Function to handle user registration
    const handleSignUp = async () => {
        try {
            setIsLoading(true);

            // Réinitialisation des erreurs
            setDisplayNameError('');
            setEmailError('');
            setPasswordError('');
            setEmptyFieldsError('');
            setShowLengthError(false);
            setIsCorrect(true);

            // Validation des champs
            if (!displayName) {
                setDisplayNameError('Veuillez entrer votre nom');
                setIsCorrect(false);
            }

            const emailRegex = /\S+@\S+\.\S+/;
            if (!emailRegex.test(email)) {
                setEmailError('Veuillez entrer une adresse email valide');
                setIsCorrect(false);
            }

            if (password.length < 8 || password.length > 50) {
                setShowLengthError(true);
                setPasswordError(
                    'Le mot de passe doit comporter entre 8 et 50 caractères',
                );
                setIsCorrect(false);
            }

            if (!email || !password) {
                setEmptyFieldsError('Veuillez remplir tous les champs requis');
                setIsCorrect(false);
            }

            // Création de l'utilisateur si aucune erreur n'est détectée
            if (isCorrect) {
                await auth().createUserWithEmailAndPassword(email, password);
                await auth().currentUser.updateProfile({
                    displayName: displayName,
                });

                // Dispatching user data to the Redux store
                dispatch(setUserEmail(email));
                dispatch(setUserDisplayName(displayName));
                dispatch(setUserId(auth().currentUser.uid));

                ShowToast({
                    type: 'success',
                    position: 'top',
                    text1: 'Utilisateur enregistré avec succès',
                    visibilityTime: 6000,
                    autoHide: true,
                });

                // Rediriger vers la page d'accueil après l'authentification réussie
                navigation.navigate('Home');
            }
        } catch (error) {
            console.error(
                "Erreur lors de l'enregistrement de l'utilisateur :",
                error.message,
            );

            // Affichage des messages d'erreur en fonction du type d'erreur
            if (error.code === 'auth/invalid-email') {
                setEmailError('Adresse e-mail invalide');
            } else if (error.code === 'auth/weak-password') {
                setPasswordError(
                    'Le mot de passe doit comporter au moins 8 caractères',
                );
            } else if (error.code === 'auth/email-already-in-use') {
                setEmailError('Cette adresse e-mail est déjà utilisée');
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
                    {/* Screen title component */}
                    <Animatable.View animation="fadeInUp" delay={300}>
                        <ScreenTitle title="S'inscrire" />
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Screen info component */}
                    <Animatable.View animation="fadeInUp" delay={500}>
                        <ScreenInfo info="Bonjour ! Prêt à vous lancer dans votre aventure avec PlantMed ? Commençons en créant votre nouveau compte client." />
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />
                    <View style={styles.verticalSpacer} />

                    {/* Text input component */}
                    <Animatable.View animation="fadeInUp" delay={700}>
                        <TextInput
                            label="Nom"
                            placeholder="Entrez votre nom"
                            value={displayName}
                            onChangeText={(text) => setDisplayName(text)}
                            autoCapitalize="none"
                            keyboardType="default"
                        />
                        {displayNameError && (
                            <Text style={styles.errorMessage}>
                                {displayNameError}
                            </Text>
                        )}
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Text input component */}
                    <Animatable.View animation="fadeInUp" delay={900}>
                        <TextInput
                            label="Email"
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                        {emailError && (
                            <Text style={styles.errorMessage}>
                                {emailError}
                            </Text>
                        )}
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Text input component */}
                    <Animatable.View animation="fadeInUp" delay={1100}>
                        <PasswordTextInput
                            label="Mot de passe"
                            placeholder="Mot de passe"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        {passwordError && (
                            <Text style={styles.errorMessage}>
                                {passwordError}
                            </Text>
                        )}
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Button component */}
                    <Animatable.View animation="fadeInUp" delay={1300}>
                        <Button
                            label="S'inscrire"
                            onPress={handleSignUp}
                            disabled={isLoading}
                        />
                        {/* Error messages */}
                        {displayNameError && (
                            <Text style={styles.errorMessage}>
                                {displayNameError}
                            </Text>
                        )}
                        {emailError && (
                            <Text style={styles.errorMessage}>
                                {emailError}
                            </Text>
                        )}
                        {emptyFieldsError && (
                            <Text style={styles.errorMessage}>
                                {emptyFieldsError}
                            </Text>
                        )}
                        {showLengthError && (
                            <Text style={styles.errorMessage}>
                                {showLengthError}
                            </Text>
                        )}
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Question & link component wrapper */}
                    <Animatable.View
                        animation="fadeInUp"
                        delay={1500}
                        style={styles.questionAndLinkWrapper}
                    >
                        {/* Question component */}
                        <Question question="Vous avez déjà un compte?" />

                        {/* Login component */}
                        <Link
                            label="Se connecter"
                            onPress={() => navigation.goBack()}
                        />
                    </Animatable.View>
                </Animatable.View>
            </ScrollView>
        </View>
    );
};

// Exporting
export default Register;
