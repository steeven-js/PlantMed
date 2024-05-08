/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_disc_dark_green from '../../assets/icons/svg/ic_disc_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import sourcesData, { updateDate } from '../../data/SourcesData';

const Policy = () => {
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <FlatList
                data={['placeholder']} // Ajout d'un élément factice pour forcer le rendu initial
                renderItem={() => (
                    <View>
                        <Text style={[styles.lastUpdateDate, { color: theme.accent }]}>
                            {updateDate}
                        </Text>
                        {sourcesData.map((item, index) => (
                            <View key={index.toString()}>
                                <View style={styles.policyTitleWrapper}>
                                    <SvgXml
                                        xml={ic_disc_dark_green}
                                        width={STANDARD_VECTOR_ICON_SIZE}
                                        height={STANDARD_VECTOR_ICON_SIZE}
                                    />
                                    <Text
                                        style={[
                                            styles.policyTitle,
                                            { color: theme.textHighContrast },
                                        ]}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                                <FlatList
                                    data={item.sources}
                                    renderItem={({ item }) => <Text
                                        style={[
                                            styles.policyDetails,
                                            { color: theme.textLowContrast },
                                        ]}
                                    >
                                        - {item}
                                    </Text>
                                    }
                                    keyExtractor={(item) => item.toString()}
                                    nestedScrollEnabled={true}
                                />
                            </View>
                        ))}
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                nestedScrollEnabled={true}
                style={styles.scrollViewContentContainerStyle}
            />
        </View>
    );
};

export default Policy;
