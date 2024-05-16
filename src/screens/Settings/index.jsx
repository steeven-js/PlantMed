import { useCallback, useContext, useState } from 'react';
import { Alert, Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import auth from '@react-native-firebase/auth';

import ic_edit_dark_green from '../../assets/icons/svg/ic_edit_dark_green';
import ic_lock_dark_green from '../../assets/icons/svg/ic_lock_dark_green';
import SectionTitle from '../../components/headings/SectionTitle';
import NavigationLink from '../../components/links/NavigationLink';
import SwitchList from '../../components/switches/SwitchList';
import { IndependentColors } from '../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import useAuthCheck from '../../functions/authCheck';
import { SettingsData } from '../../data/AppData';
import { useNavigation } from '@react-navigation/native';
import { ShowToast } from '../../functions/toast';

// Functional component
const Settings = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme, _toggleTheme } =
        useContext(ThemeContext);

    // Navigation
    const navigation = useNavigation();

    const [error, setError] = useState(null);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Local states
    const [isThemeSwitchOn, setIsThemeSwitchOn] = useState(false);

    // Modal state
    const [modalVisible, setModalVisible] = useState(false);

    const _toggleThemeSwitch = useCallback(() => {
        // Updating local state value
        setIsThemeSwitchOn((previousState) => !previousState);
        // Calling function to toggling theme mode(Light & Dark)
        _toggleTheme();
    }, [_toggleTheme]);

    // Constants
    const Track_Active_Color = theme.accent;
    const Track_Inactive_Color = theme.accentLightest;
    const Thumb_Active_Color = IndependentColors.white;
    const Thumb_Inactive_Color = theme.secondary;

    // AuthCheck hook
    const { isUserAuthenticated } = useAuthCheck();

    // AppData
    const { account, appearance } = SettingsData;

    // Function to delete account
    const deleteAccount = async () => {
        try {
            const user = auth().currentUser;
            if (user) {
                await user.delete();
                ShowToast({
                    type: 'error',
                    position: 'top',
                    text1: 'Compte supprimé',
                    visibilityTime: 3000,
                    autoHide: true,
                });
                setModalVisible(!modalVisible);
                navigation.navigate('Home');
                console.log("L'utilisateur a été supprimé.");
            } else {
                setModalVisible(!modalVisible);
                console.log("L'utilisateur n'est pas connecté.");
            }
        } catch (err) {
            setModalVisible(!modalVisible);
            console.error('Une erreur s\'est produite lors de la suppression du compte : ', err);
            if (err.code === 'auth/requires-recent-login') {
                setError(err);
                ShowToast({
                    type: 'error',
                    position: 'top',
                    text1: 'Erreur de suppression',
                    text2: 'Veuillez vous reconnecter pour supprimer votre compte.',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            } else {
                setError(err);
                ShowToast({
                    type: 'error',
                    position: 'top',
                    text1: 'Erreur de suppression',
                    text2: 'Une erreur s\'est produite lors de la suppression de votre compte.',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }
        }
    };

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
                {isUserAuthenticated && (
                    <>
                        {/* Section Account */}

                        {/* Section title component */}
                        <SectionTitle title={account[0].label} />

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />

                        {/* Navigation link component */}
                        <NavigationLink
                            leftIcon={
                                <SvgXml
                                    xml={ic_edit_dark_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            }
                            label={account[0].options[0].label1}
                            onPress={() => navigation.navigate('Edit Profile')}
                        />

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />

                        {/* Navigation link component */}
                        <NavigationLink
                            leftIcon={
                                <SvgXml
                                    xml={ic_lock_dark_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            }
                            label={account[0].options[0].label2}
                            onPress={() => navigation.navigate('Reset Password')}
                        />

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />
                    </>
                )}

                {/* Section Appearance */}

                {/* Section title component */}
                <SectionTitle title={appearance[0].label} />

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Switch list */}
                <SwitchList
                    label={appearance[0].options[0].label1}
                    labelInfo={`Passer en mode ${isLightTheme ? 'sombre' : 'clair'}.`}
                    trackActiveColor={Track_Active_Color}
                    trackInactiveColor={Track_Inactive_Color}
                    thumbActiveColor={Thumb_Active_Color}
                    thumbInactiveColor={Thumb_Inactive_Color}
                    onValueChange={_toggleThemeSwitch}
                    value={isThemeSwitchOn}
                />

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {isUserAuthenticated && (
                    <>
                        <SectionTitle title="Supprimer mon compte" />
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert('La modalité a été fermée.');
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <View style={styles.modalTitle}>
                                            <Text style={styles.modalText}>Voulez-vous vraiment supprimer votre compte ?</Text>
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => setModalVisible(!modalVisible)}>
                                                <Text style={styles.textStyle}>Annuler</Text>
                                            </Pressable>
                                            <Pressable
                                                style={[styles.button, styles.buttonDelete]}
                                                onPress={deleteAccount}>
                                                <Text style={styles.textStyle}>Supprimer le compte</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => setModalVisible(true)}>
                                <Text style={styles.textStyle}>Supprimer le compte</Text>
                                {error && (
                                    <p>Une erreur s'est produite : {error.message}</p>
                                )}
                            </Pressable>
                        </View>
                    </>
                )}

            </ScrollView>
        </View>
    );
};

// Exporting
export default Settings;
