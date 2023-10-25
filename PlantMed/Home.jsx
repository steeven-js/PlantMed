import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar';
import Fetch from './Fetch'

const Home = () => {
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
        }}>
          <Text>Préparations</Text>
        </TouchableOpacity>
      </View>
      <Fetch />
    </View>
  )
}

export default Home