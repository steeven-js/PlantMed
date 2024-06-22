import axios from 'axios';
import {Alert} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {utils} from '../utils';
import {custom} from '../custom';
import {hooks} from '../hooks';
import {components} from '../components';
import {validation} from '../validation';
import {CONFIG, ENDPOINTS} from '../config';
import {handleTextChange} from '../utils/handleTextChange';
import {LeaveAReviewScreenProps} from '../types/ScreenProps';

const LeaveAReview: React.FC<LeaveAReviewScreenProps> = ({route}) => {
  const {productId} = route.params;
  const navigation = hooks.useAppNavigation();

  const user = hooks.useAppSelector(state => state.userSlice.user);

  // ############ STATES ############ //

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const review = {
    comment,
    rating,
    name: user?.name,
    plantId: productId,
    email: user?.email,
  };

  // ############ FUNCTIONS ############ //

  const handleCommentChange = handleTextChange(setComment);

  const createReview = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        data: review,
        headers: CONFIG.headers,
        url: ENDPOINTS.CREATE_REVIEW,
      });

      if (response.status === 200) {
        navigation.goBack();
        return;
      }
      Alert.alert('Failed to create review');
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to create review');
    } finally {
      setLoading(false);
    }
  };

  // ############ COMPONENTS ############ //

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} />;
  };

  const renderContent = (): JSX.Element => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          padding: 20,
          flexGrow: 1,
          justifyContent: 'center',
        }}
        enableOnAndroid={true}
      >
        <custom.Image
          source={require('../assets/icons/09.png')}
          style={{
            aspectRatio: 123.39 / 120,
            height: utils.responsiveHeight(120),
            marginBottom: utils.responsiveHeight(14),
          }}
        />
        <text.H2 style={{marginBottom: utils.responsiveHeight(14)}}>
          Please rate the quality of{'\n'}service !
        </text.H2>
        <components.RatingStars
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
          setRating={setRating}
          rating={rating}
        />
        <text.T16 style={{marginBottom: utils.responsiveHeight(60)}}>
          Your comments and suggestions help us improve the service quality
          better!
        </text.T16>
        <custom.InputFieldBig
          value={comment}
          onChangeText={handleCommentChange}
        />
      </KeyboardAwareScrollView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='submit'
        loading={loading}
        onPress={() => {
          validation({comment, rating}) ? createReview() : null;
        }}
        containerStyle={{padding: 20}}
      />
    );
  };

  // ############ RENDER ############ //

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </custom.SafeAreaView>
  );
};

export default LeaveAReview;
