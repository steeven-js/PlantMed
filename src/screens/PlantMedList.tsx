import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, FlatList, TouchableOpacity, Platform} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {items} from '../items';
import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';
import {PlantMedListScreenProps} from '../types/ScreenProps';

const sortingBy = [
  {id: 1, title: 'Top'},
  {id: 2, title: 'Price: low to high'},
  {id: 3, title: 'Price: high to low'},
  {id: 4, title: 'Newest'},
  {id: 5, title: 'Sale'},
];

const PlantMedList: React.FC<PlantMedListScreenProps> = ({route}) => {
  const {title, products} = route.params;
  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();

  const [sort, setSort] = useState(sortingBy[0]);
  const [showModal, setShowModal] = useState(false);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title={title ?? 'Shop'}
        onGoBack={() => {
          dispatch(actions.resetFilters());
          navigation.goBack();
        }}
      />
    );
  };

  const renderContent = (): JSX.Element | null => {
    return (
      <FlatList
        data={products}
        renderItem={({item}) => {
          return <items.PlantmedCard version={1} item={item} />;
        }}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
        }}
      />
    );
  };

  const renderModal = () => {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0, flex: 1}}
        animationIn='zoomIn'
        animationOut='zoomOut'
        statusBarTranslucent={true}
        coverScreen={true}
        deviceHeight={
          theme.sizes.deviceHeight +
          (Platform.OS === 'android' ? utils.statusBarHeight() : 0)
        }
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            borderRadius: 5,
            paddingLeft: 20,
            paddingTop: 10,
          }}
        >
          {sortingBy.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingTop: 10,
                  marginBottom: 4,
                  paddingRight: 20,
                  paddingBottom: 18,
                  ...theme.flex.rowCenterSpaceBetween,
                  borderBottomColor: theme.colors.antiFlashWhite,
                  borderBottomWidth: array.length - 1 === index ? 0 : 1,
                }}
                onPress={() => {
                  setSort(item);
                  setShowModal(false);
                }}
              >
                <text.T14
                  style={{color: theme.colors.mainColor}}
                  numberOfLines={1}
                >
                  {item.title}
                </text.T14>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: theme.colors.steelTeal,
                  }}
                >
                  <View
                    style={{
                      backgroundColor:
                        sort === item
                          ? theme.colors.steelTeal
                          : theme.colors.white,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {/* {renderOptions()} */}
      {renderContent()}
      {renderModal()}
    </custom.SafeAreaView>
  );
};

export default PlantMedList;
