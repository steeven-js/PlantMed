import React, {useState} from 'react';
import Svg, {Path} from 'react-native-svg';
import {View, TouchableOpacity} from 'react-native';

type Props = {
  containerStyle?: object;
  setRating: (value: number) => void;
  rating: number;
};

const RatingStars: React.FC<Props> = ({containerStyle, setRating, rating}) => {
  // const [ratingValue, setRatingValue] = useState(0);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setRating(1);
          setRating(rating === 1 ? 0 : 1);
        }}
        style={{marginRight: 4}}
      >
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={rating >= 1 ? '#50858B' : '#EDF4ED'}
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRating(2)} style={{marginRight: 4}}>
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={rating >= 2 ? '#50858B' : '#EDF4ED'}
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRating(3)} style={{marginRight: 4}}>
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={rating >= 3 ? '#50858B' : '#EDF4ED'}
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRating(4)} style={{marginRight: 4}}>
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={rating >= 4 ? '#50858B' : '#EDF4ED'}
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRating(5)}>
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={rating >= 5 ? '#50858B' : '#EDF4ED'}
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default RatingStars;
