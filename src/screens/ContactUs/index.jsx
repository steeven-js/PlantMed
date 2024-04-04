import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Button from '../../components/buttons/Button';
import OrDivider from '../../components/dividers/OrDivider';
import ScreenTitle from '../../components/headings/ScreenTitle';
import TextArea from '../../components/inputs/TextArea';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/links/Link';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import useAuthCheck from '../../functions/authCheck';
import userSendEmail from '../../functions/userSendEmail';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

const ContactUs = () => {
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;
    const { userAuthUid, isUserAuthenticated, userAuthEmail } = useAuthCheck();
    const uid = userAuthUid;
    const userEmail = userAuthEmail;

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [emptyFieldsError, setEmptyFieldsError] = useState('');
    const [showLengthError, setShowLengthError] = useState(false);
    const [messageLengthError, setMessageLengthError] = useState('');

    const handleEmailSend = async () => {
        // Réinitialisation des erreurs
        setEmailError('');
        setMessageError('');
        setEmptyFieldsError('');
        setShowLengthError(false);

        // Validation de l'email
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError('Veuillez entrer une adresse email valide');
            setIsCorrect(false);
        }

        if (isUserAuthenticated) {
            if (!userEmail) {
                setEmailError('Email non enregistré');
                setIsCorrect(false);
            }
        } else {
            if (!email) {
                setEmailError('Veuillez entrer votre email');
                setIsCorrect(false);
            }
        }

        if (!message) {
            setMessageError('Veuillez entrer votre message');
            setIsCorrect(false);
        }

        if (message.length < 20 || message.length > 1000) {
            setShowLengthError(true);
            setMessageLengthError(
                'Le message doit contenir entre 20 et 1000 caractères',
            );
            setIsCorrect(false);
        }

        if (!email && !message) {
            setEmptyFieldsError('Veuillez remplir les champs requis.');
            setIsCorrect(false);
        }

        // Si aucune erreur, envoi de l'e-mail
        try {
            if (
                isCorrect &&
                !emailError &&
                !messageError &&
                !emptyFieldsError &&
                !showLengthError
            ) {
                await userSendEmail({
                    uid,
                    email: isUserAuthenticated ? userEmail : email,
                    message,
                });
                setIsCorrect(true);
                // Réinitialiser le champ de texte du message après l'envoi réussi
                setMessage('');
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email :", error);
            setIsCorrect(false);
        }
    };

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.accent }]}>
            {/* Wrapper for the main content */}
            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={[styles.formWrapper, { backgroundColor: theme.primary }]}
            >
                {/* ScrollView for scrolling content */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={
                        styles.scrollViewContentContainerStyle
                    }
                >
                    {/* Screen title */}
                    <Animatable.View animation="fadeInUp" delay={300}>
                        <ScreenTitle title="Contact Us" />
                    </Animatable.View>

                    {/* Information paragraph */}
                    <Animatable.View animation="fadeInUp" delay={500}>
                        <ScreenInfo info="If you need to contact us for any reason, don't hesitate to reach out." />
                    </Animatable.View>

                    {/* Spacing */}
                    <View style={styles.verticalSpacer} />
                    <View style={styles.verticalSpacer} />

                    {/* Email input field */}
                    <Animatable.View animation="fadeInUp" delay={700}>
                        <TextInput
                            label="Email"
                            placeholder={
                                isUserAuthenticated
                                    ? 'Votre email'
                                    : 'Enter your email'
                            }
                            value={isUserAuthenticated ? userEmail : email}
                            onChangeText={(text) => setEmail(text)}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            disabled={isUserAuthenticated}
                        />
                        {emailError && (
                            <Text style={styles.errorMessage}>
                                {emailError}
                            </Text>
                        )}
                    </Animatable.View>

                    {/* Spacing */}
                    <View style={styles.verticalSpacer} />

                    {/* Message textarea */}
                    <Animatable.View animation="fadeInUp" delay={900}>
                        <TextArea
                            label="Message"
                            placeholder="Enter your message here..."
                            value={message}
                            onChangeText={(text) => setMessage(text)}
                            autoCapitalize="none"
                            keyboardType="default"
                        />

                        {/* Error messages */}
                        {messageError && (
                            <Text style={styles.errorMessage}>
                                {messageError}
                            </Text>
                        )}
                        {emptyFieldsError && (
                            <Text style={styles.errorMessage}>
                                {emptyFieldsError}
                            </Text>
                        )}
                        {showLengthError && (
                            <Text style={styles.errorMessage}>
                                {messageLengthError}
                            </Text>
                        )}
                    </Animatable.View>

                    {/* Spacing */}
                    <View style={styles.verticalSpacer} />

                    {/* Link for uploading a file */}
                    <Animatable.View animation="fadeInUp" delay={1100}>
                        <Link label="Want to upload a file?" />
                    </Animatable.View>

                    {/* Spacing */}
                    <View style={styles.verticalSpacer} />

                    {/* Button for sending email */}
                    <Animatable.View animation="fadeInUp" delay={1300}>
                        <Button
                            label="Envoyer un e-mail"
                            onPress={handleEmailSend}
                        />
                    </Animatable.View>

                    {/* Divider for alternative help methods */}
                    <Animatable.View animation="fadeInUp" delay={1500}>
                        <OrDivider label="Or get help via" />
                    </Animatable.View>

                    {/* Help icons */}
                    <View style={styles.helpIconsWrapper}>
                        {/* Help icon: headphone */}
                        <Animatable.View animation="bounceIn" delay={1700}>
                            <TouchableOpacity
                                style={[
                                    styles.helpIconWrapper,
                                    { backgroundColor: theme.secondary },
                                ]}
                            >
                                <Image
                                    source={require('../../assets/icons/png/contact-us/headphone.png')}
                                    style={styles.helpIconImage}
                                />
                            </TouchableOpacity>
                        </Animatable.View>

                        {/* Help icon: FAQs */}
                        <Animatable.View animation="bounceIn" delay={1900}>
                            <TouchableOpacity
                                style={[
                                    styles.helpIconWrapper,
                                    { backgroundColor: theme.secondary },
                                ]}
                            >
                                <Image
                                    source={require('../../assets/icons/png/contact-us/faqs.png')}
                                    style={styles.helpIconImage}
                                />
                            </TouchableOpacity>
                        </Animatable.View>

                        {/* Help icon: location pin */}
                        <Animatable.View animation="bounceIn" delay={2100}>
                            <TouchableOpacity
                                style={[
                                    styles.helpIconWrapper,
                                    { backgroundColor: theme.secondary },
                                ]}
                            >
                                <Image
                                    source={require('../../assets/icons/png/contact-us/location_pin.png')}
                                    style={styles.helpIconImage}
                                />
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default ContactUs;
