import axios from 'axios';
import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {text} from '../text';
import {items} from '../items';
import {alert} from '../alert';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {PromocodeType} from '../types';
import {components} from '../components';
import {validation} from '../validation';
import {actions} from '../store/actions';
import {ENDPOINTS, CONFIG} from '../config';
import {handleTextChange} from '../utils/handleTextChange';

const MyPromocodes: React.FC = () => {
  const dispatch = hooks.useAppDispatch();

  const user = hooks.useAppSelector(state => state.userSlice.user);

  let promocodes: PromocodeType[] = hooks.useAppSelector(
    state => state.promocodeSlice.list,
  );

  promocodes = promocodes.filter(item => item.userId === user?.id);

  const [voucher, setVoucher] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onVoucherChange = handleTextChange(setVoucher);

  const handleAddPromocode = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: 'post',
        url: ENDPOINTS.GET_PROMOCODE,
        headers: CONFIG.headers,
        data: {voucher},
      });

      if (response.status === 200) {
        dispatch(
          actions.addPromocode({
            ...response.data.promocode,
            userId: user?.id,
          }),
        );
        setVoucher('');
      } else {
        alert.somethingWentWrong();
      }
    } catch (error: any) {
      if (error.response.status === 404) {
        return Alert.alert('Error', 'Promocode not found');
      }

      alert.somethingWentWrong();
    } finally {
      setLoading(false);
    }
  };

  const voucherAlreadyExists = (voucher: string): boolean => {
    return promocodes.some(item => item.code === voucher);
  };

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title={'My promocodes'} />;
  };

  const renderEmpty = (): JSX.Element | null => {
    if (promocodes.length === 0) {
      return (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: 20,
            justifyContent: 'center',
          }}
          showsVerticalScrollIndicator={false}
        >
          <custom.Image
            source={require('../assets/icons/08.png')}
            style={{
              height: utils.responsiveHeight(120),
              aspectRatio: 123.39 / 120,
              marginBottom: utils.responsiveHeight(14),
            }}
          />
          <text.H2
            style={{marginBottom: utils.responsiveHeight(14)}}
            numberOfLines={2}
          >
            You don’t have {'\n'}promocodes yet!
          </text.H2>
          <text.T16>
            Stay tuned for exclusive offers to elevate{'\n'}your plant shopping
            experience.
          </text.T16>
        </ScrollView>
      );
    }

    return null;
  };

  const renderEnterVoucherIfEmpty = (): JSX.Element | null => {
    if (promocodes.length === 0) {
      return (
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          <custom.InputField
            value={voucher}
            label='Enter the voucher'
            placeholder='Code2024'
            onChangeText={onVoucherChange}
          />
        </View>
      );
    }

    return null;
  };

  const renderButton = (): JSX.Element | null => {
    if (promocodes.length === 0) {
      return (
        <components.Button
          loading={loading}
          title={'Add promocode'}
          onPress={() => {
            if (voucherAlreadyExists(voucher)) {
              return Alert.alert('Error', 'Promocode already exists');
            }

            if (validation({promoCode: voucher})) {
              handleAddPromocode();
            }
          }}
          containerStyle={{padding: 20}}
        />
      );
    }

    return null;
  };

  const renderItem = ({item}: {item: PromocodeType}): JSX.Element => {
    const isLast = promocodes.indexOf(item) === promocodes.length - 1;
    return <items.PromocodeItem item={item} isLast={isLast} />;
  };

  const renderFlatList = (): JSX.Element | null => {
    if (promocodes.length > 0) {
      return (
        <FlatList
          data={promocodes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => renderItem({item})}
          contentContainerStyle={{
            flexGrow: 1,
            paddingLeft: 20,
            paddingTop: utils.responsiveHeight(25),
            paddingBottom: utils.responsiveHeight(20),
          }}
          ListFooterComponent={renderEnterVoucher()}
          ListFooterComponentStyle={{
            paddingRight: 20,
          }}
        />
      );
    }

    return null;
  };

  const renderEnterVoucher = (): JSX.Element | null => {
    return (
      <View style={{...theme.flex.rowCenterSpaceBetween}}>
        <custom.InputField
          value={voucher}
          label='Enter the voucher'
          placeholder='Code2024'
          onChangeText={onVoucherChange}
          containerStyle={{width: utils.responsiveWidth(225, true)}}
        />
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.steelTeal,
            width: utils.responsiveWidth(100, true),
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}
          onPress={() => {
            if (voucherAlreadyExists(voucher)) {
              return Alert.alert('Error', 'Promocode already exists');
            }

            if (validation({promoCode: voucher})) {
              handleAddPromocode();
            }
          }}
        >
          <Text
            style={{
              ...theme.fonts.DM_Sans_700Bold,
              color: theme.colors.white,
              fontSize: Platform.OS === 'ios' ? 14 : 12,
              lineHeight: Platform.OS === 'ios' ? 14 * 1.5 : 12 * 1.5,
              textTransform: 'capitalize',
            }}
            numberOfLines={1}
          >
            + add
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <React.Fragment>
        {renderEmpty()}
        {renderFlatList()}
        {renderEnterVoucherIfEmpty()}
        {renderButton()}
      </React.Fragment>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default MyPromocodes;
