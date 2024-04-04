import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import {
    FONT_SIZE_XS,
    FONT_SIZE_XXS,
    POPPINS_MEDIUM,
    POPPINS_REGULAR,
    POPPINS_SEMIBOLD,
    SCREEN_WIDTH,
    STANDARD_BORDER_RADIUS,
    STANDARD_BORDER_WIDTH,
    STANDARD_BUTTON_HEIGHT,
    STANDARD_FLEX,
    STANDARD_SPACING,
    STANDARD_TEXT_INPUT_HEIGHT,
    STANDARD_USER_AVATAR_BADGE_WRAPPER_SIZE,
    STANDARD_USER_AVATAR_WRAPPER_SIZE,
    STANDARD_VECTOR_ICON_WRAPPER_SIZE,
    STANDARD_Z_INDEX,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    mainWrapper: {
        flex: STANDARD_FLEX,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: STANDARD_SPACING * 3,
        paddingVertical: STANDARD_SPACING * 6,
        borderBottomWidth: STANDARD_BORDER_WIDTH,
    },
    backIconAndUserInfoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backIconWrapper: {
        width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
        aspectRatio: 1,
        justifyContent: 'center',
        borderRadius: STANDARD_BORDER_RADIUS,
    },
    avatarNameAndOnlineStatusWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarWrapper: {
        width: STANDARD_USER_AVATAR_WRAPPER_SIZE,
        aspectRatio: 1,
        borderWidth: STANDARD_BORDER_WIDTH,
        borderRadius: STANDARD_USER_AVATAR_WRAPPER_SIZE * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    onlineStatusBadge: {
        width: STANDARD_USER_AVATAR_BADGE_WRAPPER_SIZE,
        aspectRatio: 1,
        position: 'absolute',
        right: (-STANDARD_USER_AVATAR_BADGE_WRAPPER_SIZE * 0.5) / 2,
        top: 0,
        borderRadius: STANDARD_USER_AVATAR_BADGE_WRAPPER_SIZE * 0.5,
        borderWidth: STANDARD_BORDER_WIDTH * 2,
        zIndex: STANDARD_Z_INDEX,
    },
    nameAndOnlineStatusWrapper: {
        marginStart: STANDARD_SPACING * 1.5,
    },
    username: {
        fontFamily: POPPINS_SEMIBOLD,
        fontSize: FONT_SIZE_XS,
    },
    onlineStatus: {
        fontFamily: POPPINS_MEDIUM,
        fontSize: FONT_SIZE_XXS,
    },
    callAndVideoIconsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    callIconWrapper: {
        width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.5,
        marginEnd: STANDARD_SPACING * 1.5,
    },
    videoCameraIconWrapper: {
        width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.5,
    },
    flatListWrapper: {
        flex: STANDARD_FLEX,
    },
    flatListContentContainerStyle: {
        padding: STANDARD_SPACING * 3,
    },
    leftMessageWrapper: {
        alignSelf: 'flex-start',
        padding: STANDARD_SPACING * 2,
        borderRadius: STANDARD_BORDER_RADIUS,
        marginBottom: STANDARD_SPACING * 3,
    },
    leftMessageText: {
        fontFamily: POPPINS_REGULAR,
        fontSize: FONT_SIZE_XS,
    },
    leftMessageTime: {
        alignSelf: 'flex-end',
        fontFamily: POPPINS_MEDIUM,
        fontSize: FONT_SIZE_XXS,
        marginTop: STANDARD_SPACING,
    },
    leftImageWrapper: {
        width: scale(125),
        height: scale(150),
        borderRadius: STANDARD_BORDER_RADIUS,
        padding: STANDARD_SPACING,
        alignSelf: 'flex-start',
    },
    rightMessageWrapper: {
        alignSelf: 'flex-end',
        padding: STANDARD_SPACING * 2,
        borderRadius: STANDARD_BORDER_RADIUS,
        marginBottom: STANDARD_SPACING * 3,
    },
    rightMessageText: {
        fontFamily: POPPINS_REGULAR,
        fontSize: FONT_SIZE_XS,
    },
    rightMessageTime: {
        alignSelf: 'flex-end',
        fontFamily: POPPINS_MEDIUM,
        fontSize: FONT_SIZE_XXS,
        marginTop: STANDARD_SPACING,
    },
    rightImageWrapper: {
        width: scale(125),
        height: scale(150),
        borderRadius: STANDARD_BORDER_RADIUS,
        padding: STANDARD_SPACING,
        alignSelf: 'flex-end',
    },
    image: {
        width: null,
        height: null,
        flex: STANDARD_FLEX,
        resizeMode: 'contain',
    },
    footer: {
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: STANDARD_SPACING * 6,
        borderTopWidth: STANDARD_BORDER_WIDTH,
    },
    textInputWrapper: {
        width: SCREEN_WIDTH * 0.8,
        height: STANDARD_TEXT_INPUT_HEIGHT,
        borderWidth: STANDARD_BORDER_WIDTH,
        borderRadius: STANDARD_BORDER_RADIUS,
        position: 'relative',
    },
    textInput: {
        flex: STANDARD_FLEX,
        paddingHorizontal: STANDARD_SPACING * 3,
        fontFamily: POPPINS_REGULAR,
        fontSize: FONT_SIZE_XS,
    },
    mikeIcon: {
        width: STANDARD_BUTTON_HEIGHT - 2,
        aspectRatio: 1,
        position: 'absolute',
        right: STANDARD_BUTTON_HEIGHT * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButton: {
        width: STANDARD_BUTTON_HEIGHT - 2,
        aspectRatio: 1,
        position: 'absolute',
        padding: STANDARD_SPACING,
        right: -STANDARD_BUTTON_HEIGHT * 0.5,
    },
    paperPlaneIconWrapper: {
        flex: STANDARD_FLEX,
        borderRadius: STANDARD_BUTTON_HEIGHT * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
