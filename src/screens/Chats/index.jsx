import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import {
  STANDARD_USER_AVATAR_WRAPPER_SIZE,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import {useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import ChatsData from '../../data/ChatsData';
import * as Animatable from 'react-native-animatable';
import {IndependentColors} from '../../config/Colors';
import av_woman_4 from '../../assets/avatars/svg/av_woman_4';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import ic_mike_dark_green from '../../assets/icons/svg/ic_mike_dark_green';
import ic_phone_dark_green from '../../assets/icons/svg/ic_phone_dark_green';
import ic_arrow_left_white from '../../assets/icons/svg/ic_arrow_left_white';
import ic_paper_plane_white from '../../assets/icons/svg/ic_paper_plane_white';
import ic_arrow_left_dark_green from '../../assets/icons/svg/ic_arrow_left_dark_green';
import ic_video_camera_dark_green from '../../assets/icons/svg/ic_video_camera_dark_green';

// Functional component
const Chats = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Left message component
  const LeftMessage = ({type, message, time}) =>
    type === 'text' ? (
      <View
        style={[styles.leftMessageWrapper, {backgroundColor: theme.secondary}]}>
        <Text style={[styles.leftMessageText, {color: theme.textLowContrast}]}>
          {message}
        </Text>
        <Text style={[styles.leftMessageTime, {color: theme.textLowContrast}]}>
          {time}
        </Text>
      </View>
    ) : (
      <View
        style={[styles.leftImageWrapper, {backgroundColor: theme.secondary}]}>
        <Image style={styles.image} source={message} />
      </View>
    );

  // Right message component
  const RightMessage = ({type, message, time}) =>
    type === 'text' ? (
      <View
        style={[styles.rightMessageWrapper, {backgroundColor: theme.accent}]}>
        <Text
          style={[styles.rightMessageText, {color: IndependentColors.white}]}>
          {message}
        </Text>
        <Text
          style={[styles.rightMessageTime, {color: IndependentColors.white}]}>
          {time}
        </Text>
      </View>
    ) : (
      <View
        style={[styles.rightImageWrapper, {backgroundColor: theme.secondary}]}>
        <Image style={styles.image} source={message} />
      </View>
    );

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Header */}
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.header, {borderBottomColor: theme.secondary}]}>
        {/* Back icon & user info wrapper */}
        <View style={styles.backIconAndUserInfoWrapper}>
          {/* Back icon wrapper */}
          <TouchableOpacity
            style={styles.backIconWrapper}
            onPress={() => navigation.goBack()}>
            {isLightTheme ? (
              <SvgXml
                xml={ic_arrow_left_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <SvgXml
                xml={ic_arrow_left_white}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            )}
          </TouchableOpacity>

          {/* Avatar, name & status wrapper */}
          <View style={styles.avatarNameAndOnlineStatusWrapper}>
            {/* Avatar wrapper */}
            <View style={[styles.avatarWrapper, {borderColor: theme.accent}]}>
              <SvgXml
                xml={av_woman_4}
                width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 0.8}
                height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 0.8}
              />
              {/* Online status badge */}
              <View
                style={[
                  styles.onlineStatusBadge,
                  {
                    backgroundColor: theme.accent,
                    borderColor: theme.primary,
                  },
                ]}
              />
            </View>

            {/* Username & online status wrapper */}
            <View style={styles.nameAndOnlineStatusWrapper}>
              <Text style={[styles.username, {color: theme.textHighContrast}]}>
                Wendy Watson
              </Text>
              <Text style={[styles.onlineStatus, {color: theme.accent}]}>
                Online
              </Text>
            </View>
          </View>
        </View>

        {/* Call & video icons wrapper */}
        <View style={styles.callAndVideoIconsWrapper}>
          {/* Call icon wrapper */}
          <TouchableOpacity
            style={[
              styles.callIconWrapper,
              {backgroundColor: theme.secondary},
            ]}>
            <SvgXml
              xml={ic_phone_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </TouchableOpacity>

          {/* Video icon wrapper */}
          <TouchableOpacity
            style={[
              styles.videoCameraIconWrapper,
              {backgroundColor: theme.secondary},
            ]}>
            <SvgXml
              xml={ic_video_camera_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </TouchableOpacity>
        </View>
      </Animatable.View>

      {/* Flatlist */}
      <Animatable.View
        animation="fadeInUp"
        delay={300}
        style={styles.flatListWrapper}>
        <FlatList
          data={ChatsData}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContentContainerStyle}
          renderItem={({item}) =>
            item.align === 'left' ? (
              <LeftMessage
                type={item.type}
                message={item.message}
                time={item.time}
              />
            ) : (
              <RightMessage
                type={item.type}
                message={item.message}
                time={item.time}
              />
            )
          }
        />
      </Animatable.View>

      {/* Footer */}
      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={[
          styles.footer,
          {borderTopColor: theme.secondary, backgroundColor: theme.primary},
        ]}>
        {/* Text input wrapper & send button wrapper */}
        <View
          style={[
            styles.textInputWrapper,
            {
              backgroundColor: theme.secondary,
              borderColor: theme.secondaryDark,
            },
          ]}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            placeholderTextColor={theme.textLowContrast}
          />

          {/* Mike icon */}
          <TouchableOpacity style={styles.mikeIcon}>
            <SvgXml
              xml={ic_mike_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </TouchableOpacity>

          {/* Send button */}
          <TouchableOpacity style={styles.sendButton}>
            {/* Paper plane icon wrapper */}
            <View
              style={[
                styles.paperPlaneIconWrapper,
                {backgroundColor: theme.accent},
              ]}>
              <SvgXml
                xml={ic_paper_plane_white}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Chats;
