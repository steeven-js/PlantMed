import styles from './styles';
import {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import MessagesData from '../../data/MessagesData';
import Message from '../../components/cards/Message';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../theming/contexts/ThemeContext';

// Functional component
const Messages = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Scroll View */}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        {/* Message items */}
        <Animatable.View animation="fadeInUp" delay={100}>
          {MessagesData.map((message, index) => (
            <Message
              key={message.id}
              avatarSvg={message.avatarSvg}
              senderName={message.senderName}
              messageAge={message.messageAge}
              message={message.message}
              isLastItem={MessagesData.length === index + 1 ? true : false}
            />
          ))}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Messages;
