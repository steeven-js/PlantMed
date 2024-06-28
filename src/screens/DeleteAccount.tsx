import axios from 'axios';
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import {text} from '../text';
import {alert} from '../alert';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {actions} from '../store/actions';
import {CONFIG, ENDPOINTS} from '../config';

const DeleteAccount: React.FC = () => {
  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const user = hooks.useAppSelector(state => state.userSlice.user);

  const handleDeleteAccount = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: 'delete',
        headers: CONFIG.headers,
        url: `${ENDPOINTS.DELETE_ACCOUNT}/${user?.id}`,
      });

      if (response.status === 200) {
        dispatch(actions.logOut());
        alert.userDeleted();
        return;
      }

      alert.somethingWentWrong();
    } catch (error: any) {
      navigation.goBack();
      alert.somethingWentWrong();
    } finally {
      setLoading(false);
    }
  };

  const renderContent = (): JSX.Element => {
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
          source={require('../assets/icons/11.png')}
          style={{
            aspectRatio: 123.39 / 120,
            height: utils.responsiveHeight(120),
            marginBottom: utils.responsiveHeight(14),
          }}
        />
        <text.H2
          numberOfLines={2}
          style={{
            marginBottom: utils.responsiveHeight(14),
          }}
        >
          Are you sure you want{'\n'}to delete your account?
        </text.H2>
        <text.T16>
          This action is irreversible.{'\n'}All your data will be lost.
        </text.T16>
      </ScrollView>
    );
  };

  const renderButtons = (): JSX.Element => {
    return (
      <View style={{padding: 20}}>
        <components.Button
          title='cancel'
          containerStyle={{marginBottom: utils.responsiveHeight(14)}}
          touchableOpacityStyle={{backgroundColor: theme.colors.steelTeal}}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <components.Button
          title='Sure'
          loading={loading}
          touchableOpacityStyle={{backgroundColor: theme.colors.pastelMint}}
          onPress={() => {
            handleDeleteAccount();
          }}
          textStyle={{color: theme.colors.steelTeal}}
        />
      </View>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderContent()}
      {renderButtons()}
    </custom.SafeAreaView>
  );
};

export default DeleteAccount;
