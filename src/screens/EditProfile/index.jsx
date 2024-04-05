import { useContext, useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SvgXml } from 'react-native-svg';

// Import de useEditProfile
import useEditProfile from '../../functions/userEditProfile';

import av_woman_4 from '../../assets/avatars/svg/av_woman_4';
import ic_edit_dark_green from '../../assets/icons/svg/ic_edit_dark_green';
import Button from '../../components/buttons/Button';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/links/Link';
import {
    STANDARD_USER_AVATAR_WRAPPER_SIZE,
    STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import useAuthCheck from '../../functions/authCheck';

// Functional component
const EditProfile = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // AuthCheck
    const { isUserAuthenticated, userAuthEmail } = useAuthCheck();

    // Utilisation de useEditProfile
    const { displayName, updateDisplayName } = useEditProfile();

    // State local pour stocker le nouveau nom d'affichage
    const [newDisplayName, setNewDisplayName] = useState('');

    // State local pour gérer l'état de la soumission du formulaire
    const [isSubmitting, setIsSubmitting] = useState(false);

    // log
    console.log('displayName:', displayName);

    // Fonction de gestion de la soumission du formulaire
    const handleSubmit = async () => {
        try {
            // Définir l'état de soumission sur true pour indiquer que le formulaire est en cours de soumission
            setIsSubmitting(true);

            // Mettez à jour le nom d'affichage avec la fonction updateDisplayName
            await updateDisplayName(newDisplayName);

            // Réinitialiser le champ de saisie après la soumission réussie
            setNewDisplayName('');

            // Affichez un message de succès
            console.log('Nom d\'affichage mis à jour avec succès !');
        } catch (error) {
            // Affichez une erreur s'il y a un problème lors de la mise à jour du nom d'affichage
            console.error('Erreur lors de la mise à jour du nom d\'affichage :', error);
        } finally {
            // Définir l'état de soumission sur false une fois la soumission terminée (qu'elle réussisse ou échoue)
            setIsSubmitting(false);
        }
    };

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.accent }]}>
            {/* Form wrapper */}
            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={[styles.formWrapper, { backgroundColor: theme.primary }]}
            >
                {/* Avatar wrapper */}
                <Animatable.View
                    animation="fadeInUp"
                    delay={300}
                    style={styles.avatarWrapper}
                >
                    {/* Avatar */}
                    <SvgXml
                        xml={av_woman_4}
                        width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
                        height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
                    />

                    {/* Camera icon wrapper */}
                    <Animatable.View
                        animation="bounceIn"
                        delay={1700}
                        style={[
                            styles.cameraIconWrapper,
                            { backgroundColor: theme.accentLightest },
                        ]}
                    >
                        <SvgXml
                            xml={ic_edit_dark_green}
                            width={STANDARD_VECTOR_ICON_SIZE}
                            height={STANDARD_VECTOR_ICON_SIZE}
                        />
                    </Animatable.View>
                </Animatable.View>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Text input component */}
                <Animatable.View animation="fadeInUp" delay={700}>
                    <TextInput
                        label="Name"
                        value={newDisplayName !== '' ? newDisplayName : displayName}
                        onChangeText={setNewDisplayName} // Mettre à jour le nouveau nom d'affichage lors de la saisie
                        placeholder="Enter your name"
                        keyboardType={'default'}
                    />
                </Animatable.View>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Text input component */}
                {isUserAuthenticated && (
                    <Animatable.View animation="fadeInUp" delay={900}>
                        <TextInput
                            label="Email"
                            value={userAuthEmail}
                            placeholder="Enter your email"
                            disabled={true}
                        />
                    </Animatable.View>
                )}

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Link component */}
                <Animatable.View animation="fadeInUp" delay={1100}>
                    <Link label="Want to change password?" />
                </Animatable.View>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Button component */}
                <Animatable.View animation="fadeInUp" delay={1300}>
                    <Button
                        label="Submit & Save"
                        onPress={handleSubmit}
                        disabled={isSubmitting}
                    />
                </Animatable.View>
            </Animatable.View>
        </View>
    );
};

// Exporting
export default EditProfile;
