import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import Plant from './Plant'

const Home = () => {

  const navigation = useNavigation();

  const goToPrepa = () => {
    navigation.navigate('Preparation')
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View>
        <Header />
      </View>
      <View>
        <SearchBar />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <TouchableOpacity style={{
          width: 150,
          height: 150,
          margin: 10,
          backgroundColor: 'lightgray',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>Spécialités</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 150,
          height: 150,
          margin: 10,
          backgroundColor: 'lightgray',
          justifyContent: 'center',
          alignItems: 'center',
        }}
          onPress={goToPrepa}
        >
          <Text>Préparations</Text>
        </TouchableOpacity>
      </View>
      <Plant />
    </View>
  )
}

export default Home