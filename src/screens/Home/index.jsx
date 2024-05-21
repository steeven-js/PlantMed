import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

// Importez le hook useIsFocused
import SearchTextInput from '../../components/inputs/SearchTextInput';
import { useLoadingState, useSearchState } from '../../hooks';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import HomeContent from './HomeContent';
import HomeHeader from './HomeHeader';
import SearchResults from './SearchResults';
import styles from './styles';

const Home = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    const { search, setSearch } = useSearchState();

    const { isLoading, setIsLoading } = useLoadingState();

    // Navigation
    const navigation = useNavigation();

    const isFocused = useIsFocused(); // Utilisez le hook useIsFocused pour détecter si l'écran est au premier plan

    async function query(data) {
        const response = await fetch(
            'http://localhost:3000/api/v1/prediction/85bfa79b-21af-4eff-8122-fcc88fdd28b6',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    query({'question': 'Hey, how are you?'}).then((response) => {
        console.log(response);
    });


    // Utilisez useEffect pour réinitialiser la recherche lorsque l'écran perd le focus
    useEffect(() => {
        if (!isFocused) {
            setSearch('');
        }
    }, [isFocused, setSearch]);

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <Animatable.View animation="fadeInUp" delay={100}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
                    <HomeHeader
                        navigation={navigation}
                        setIsLoading={setIsLoading}
                    />
                    <SearchTextInput value={search} onChangeText={setSearch} />
                    {isLoading ? (
                        <View style={styles.activityIndicatorContainer}>
                            <ActivityIndicator
                                size="large"
                                color={theme.primary}
                            />
                        </View>
                    ) : (
                        <SearchResults
                            search={search}
                            setIsLoading={setIsLoading}
                            theme={theme}
                        />
                    )}
                    <HomeContent theme={theme} />
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default Home;
