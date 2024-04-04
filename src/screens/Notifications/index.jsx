import { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Notification from '../../components/cards/Notification';
import SectionTitle from '../../components/headings/SectionTitle';
import NotificationsData from '../../data/NotificationsData';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Notifications = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Scroll View */}
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
                <Animatable.View animation="fadeInUp" delay={100}>
                    {NotificationsData.map((notification, index1) => (
                        <View key={notification.id}>
                            {/* Section title component */}
                            <View style={styles.sectionTitleWrapper}>
                                <SectionTitle title={notification.day} />
                            </View>

                            {/* Notification items */}
                            {notification.notifications.map((item, index2) => (
                                <Notification
                                    key={item.id}
                                    avatarImage={item.avatarImage}
                                    notificationTitle={item.notificationTitle}
                                    notificationAge={item.notificationAge}
                                    notificationMessage={
                                        item.notificationMessage
                                    }
                                    isLastItem={
                                        notification.notifications.length ===
                                        index2 + 1
                                            ? true
                                            : false
                                    }
                                />
                            ))}
                        </View>
                    ))}
                </Animatable.View>
            </ScrollView>
        </View>
    );
};

// Exporting
export default Notifications;
