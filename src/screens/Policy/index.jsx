import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Markdown from 'react-native-markdown-display';

import PolicyData from '../../data/PolicyData';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import Rules from './Rules';
import styles from './styles';

// Functional component
const Policy = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Getting theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    const rules = Rules(theme); // Appel de la fonction Rules avec le thème actuel

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <Animatable.View animation="fadeInUp" delay={100}>
                {/* Scroll view */}
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={
                        styles.scrollViewContentContainerStyle
                    }
                >
                    <Markdown
                        rules={rules} // Utiliser les règles de rendu basées sur le thème
                    >
                        {PolicyData}
                    </Markdown>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default Policy;
