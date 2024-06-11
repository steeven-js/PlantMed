/* eslint-disable no-lone-blocks */
import React, { useContext, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Button from '../../components/buttons/Button';
import ScreenTitle from '../../components/headings/ScreenTitle';
import TextArea from '../../components/inputs/TextArea';
import TextInput from '../../components/inputs/TextInput';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import useAuthCheck from '../../functions/authCheck';
import userSendEmail from '../../hooks/userSendEmail';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import { ContactUsData } from '../../data/AppData';

const ContactUs = () => {
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;
    const { userAuthUid, isUserAuthenticated, userAuthEmail } = useAuthCheck();
    const uid = userAuthUid;

    const [email, setEmail] = useState(isUserAuthenticated ? userAuthEmail : '');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [emptyFieldsError, setEmptyFieldsError] = useState('');
    const [showLengthError, setShowLengthError] = useState(false);
    const [messageLengthError, setMessageLengthError] = useState('');

    const handleEmailSend = async () => {
        let hasError = false;
        setEmailError('');
        setMessageError('');
        setEmptyFieldsError('');
        setShowLengthError(false);

        if (!email && !isUserAuthenticated) {
            setEmailError('Veuillez entrer votre email');
            hasError = true;
        }

        {isUserAuthenticated && setEmail(userAuthEmail); }

        if (!message) {
            setMessageError('Veuillez entrer votre message');
            hasError = true;
        } else if (message.length < 20 || message.length > 1000) {
            setShowLengthError(true);
            setMessageLengthError('Le message doit contenir entre 20 et 1000 caractères');
            hasError = true;
        }

        if (!hasError) {
            try {
                await userSendEmail({
                    uid,
                    email,
                    message,
                });
                setEmail('');
                setMessage('');
            } catch (error) {
                console.error("Erreur lors de l'envoi de l'email :", error);
            }
        }
    };

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.accent }]}>
            <Animatable.View animation="fadeInUp" delay={100} style={[styles.formWrapper, { backgroundColor: theme.primary }]}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={styles.scrollViewContentContainerStyle}>
                    <Animatable.View animation="fadeInUp" delay={300}><ScreenTitle title={ContactUsData[0].label} /></Animatable.View>
                    <Animatable.View animation="fadeInUp" delay={500}><ScreenInfo info={ContactUsData[1].info} /></Animatable.View>
                    <View style={styles.verticalSpacer} />
                    <View style={styles.verticalSpacer} />
                    <Animatable.View animation="fadeInUp" delay={700}>
                        <TextInput
                            label={ContactUsData[2].inputLabel}
                            placeholder={isUserAuthenticated ? 'Votre email' : 'Enter your email'}
                            value={isUserAuthenticated ? userAuthEmail : email}
                            onChangeText={(text) => setEmail(text)}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            disabled={isUserAuthenticated}
                        />
                        {emailError && <Text style={styles.errorMessage}>{emailError}</Text>}
                    </Animatable.View>
                    <View style={styles.verticalSpacer} />
                    <Animatable.View animation="fadeInUp" delay={900}>
                        <TextArea
                            label={ContactUsData[3].inputLabel}
                            placeholder={ContactUsData[3].placeholder}
                            value={message}
                            onChangeText={(text) => setMessage(text)}
                            autoCapitalize="none"
                            keyboardType="default"
                        />
                        {messageError && <Text style={styles.errorMessage}>{messageError}</Text>}
                        {emptyFieldsError && <Text style={styles.errorMessage}>{emptyFieldsError}</Text>}
                        {showLengthError && <Text style={styles.errorMessage}>{messageLengthError}</Text>}
                    </Animatable.View>
                    <View style={styles.verticalSpacer} />
                    <Animatable.View animation="fadeInUp" delay={1300}>
                        <Button label={ContactUsData[5].submit} onPress={handleEmailSend} />
                    </Animatable.View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default ContactUs;
