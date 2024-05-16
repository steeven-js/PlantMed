import { StyleSheet } from 'react-native';

import { STANDARD_FLEX, STANDARD_SPACING } from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    mainWrapper: {
        flex: STANDARD_FLEX,
    },
    scrollViewContentContainerStyle: {
        padding: STANDARD_SPACING * 3,
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        flexDirection: 'column', // Ajoutez cette ligne pour disposer les éléments en ligne
        justifyContent: 'center', // Ajustez l'alignement horizontal au centre si nécessaire
        margin: 20,
        backgroundColor: '#FFFF',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center', // Ajustez l'alignement vertical au centre si nécessaire
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: 'row', // Disposer les boutons horizontalement
        justifyContent: 'space-around', // Espacement égal entre les boutons
        width: '100%', // Assurez-vous que les boutons prennent toute la largeur
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#FF0000',
    },
    buttonDelete: {
        backgroundColor: '#FF0000',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalTitle: {
        marginBottom: 15, // Ajoutez un espace sous le titre si nécessaire
        textAlign: 'center', // Alignez le texte au centre
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
