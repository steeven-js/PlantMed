// Fonction asynchrone pour naviguer puis exécuter une action supplémentaire
export const navigateAndPerformAction = async (
    navigation,
    targetStack,
    targetScreen,
    targetTab,
    delay,
) => {
    navigation.navigate(targetStack, {
        screen: targetScreen,
    });

    // Ajout d'un délai avant de sauter à l'écran cible
    setTimeout(() => {
        navigation.jumpTo(targetTab);
    }, delay);
};
