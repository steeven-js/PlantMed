import React from 'react';
import {showMessage} from 'react-native-flash-message';
import Clipboard from '@react-native-clipboard/clipboard';
import {View, Text, TouchableOpacity, Platform} from 'react-native';

import {text} from '../text';
import {utils} from '../utils';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {PromocodeType} from '../types';

type Props = {
  isLast: boolean;
  item: PromocodeType;
};

const PromocodeItem: React.FC<Props> = ({item, isLast}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 20,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        ...theme.flex.rowCenterSpaceBetween,
        borderColor: theme.colors.antiFlashWhite,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginBottom: isLast
          ? utils.responsiveHeight(24)
          : utils.responsiveHeight(14),
      }}
      onPress={() => {
        Clipboard.setString(item.code);
        showMessage({
          message: 'Success',
          description: `${item.code} copied to clipboard`,
          type: 'success',
          icon: 'success',
        });
      }}
    >
      {/* BLOCK 01 */}
      <View>
        <View
          style={{
            ...theme.flex.rowCenter,
            gap: 10,
            marginBottom: 8,
          }}
        >
          <svg.TagSvg />
          <text.H3>{item.discount}%</text.H3>
        </View>
        <Text
          style={{
            ...theme.fonts.DM_Sans_400Regular,
            fontSize: Platform.OS === 'ios' ? 12 : 10,
            lineHeight: Platform.OS === 'ios' ? 12 * 1.5 : 10 * 1.5,
            color: theme.colors.textColor,
          }}
          numberOfLines={1}
        >
          Expire {item.expires_at}
        </Text>
      </View>
      {/* BLOCK 02 */}
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 6,
        }}
      >
        <svg.CopySvg />
        <Text
          style={{
            ...theme.fonts.DM_Sans_400Regular,
            fontSize: Platform.OS === 'ios' ? 12 : 10,
            lineHeight: Platform.OS === 'ios' ? 12 * 1.5 : 10 * 1.5,
            color: theme.colors.textColor,
          }}
          numberOfLines={1}
        >
          {item.code}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PromocodeItem;
