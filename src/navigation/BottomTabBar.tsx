import React from 'react';
import {useSelector} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';

import {utils} from '../utils';
import {theme} from '../constants';
import getTabs from '../utils/getTabs';
import {useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {setScreen} from '../store/slices/tabSlice';

const BottomTabBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tabs = getTabs();

  const currentTabScreen = useSelector(
    (state: RootState) => state.tabSlice.screen,
  );

  return (
    <View
      style={{
        paddingTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 21,
        borderTopColor: '#EEEEEE',
        backgroundColor: theme.colors.mainColor,
        paddingBottom: utils.homeIndicatorSettings(),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }}
    >
      {tabs.map((item, index) => {
        const iconColor =
          item.name === currentTabScreen
            ? '#CFF5CE'
            : `${theme.colors.white}35`;
        const backgroundColor =
          item.name === currentTabScreen ? '#000' : theme.colors.transparent;

        return (
          <TouchableOpacity
            key={index}
            style={{alignItems: 'center'}}
            onPress={() => dispatch(setScreen(item.name))}
          >
            <View style={{marginBottom: 6}}>
              <item.icon
                iconColor={iconColor}
                backgroundColor={backgroundColor}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
