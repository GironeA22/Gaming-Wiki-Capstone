/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  ImageBackground,
  TouchableWithoutFeedback,
  useColorScheme,
  ScrollView,
  Button,
  Alert,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import React, { useState } from 'react';

import Minecraft from '../assets/jbareham_191158_ply0958_decade_minecraft.jpg';

export default function Searchpage({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function MapResults() {
    fetch('http://pacer-test.ddns.net:8080/api/api.json')
      .then(res => res.json())
      .then(
        (result) => {
          setSearchResults(result.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          );
        }
      );

      function onPressHandler(name) {
        
      }

    return (
      searchResults.map((item, i) => (
        (searchTerm.toLowerCase() === item.name.toLowerCase()) ? <Text onPress={navigation.navigate('Item', {name: item.name})} key={i}>{item.name}</Text> : null
      ))
    );
  }

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <ImageBackground source={Minecraft} resizeMode="cover" style={styles.image}>
            <TextInput
              type="text"
              style={styles.searchBox}
              placeholder="Search a Minecraft Item (for now)"
              name="searchMCItems"
              onChangeText={(text) => setSearchTerm(text)}
              onSubmitEditing={MapResults}
            />
              <Text style={styles.searchBoxResults}>
                <MapResults />
              </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderRadius: 25,
    height: 50,
    width: 500,
    marginLeft: 50,
    marginTop: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },
  searchBoxResults: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderRadius: 25,
    height: 756,
    width: 500,
    marginLeft: 50,
    marginTop: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'blue',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'left',
    color: 'blue',
  },
});
