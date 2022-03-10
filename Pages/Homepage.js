/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  useColorScheme,
  ScrollView,
  ImageBackground,
  View,
} from 'react-native';

import React from 'react';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import MCSearch from '../assets/MinecraftSearchIcon.png';

import Minecraft from '../assets/jbareham_191158_ply0958_decade_minecraft.jpg';

export default function Homepage({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <ImageBackground source={Minecraft} resizeMode="cover" style={styles.image}>
            <Text style={styles.homeContainer}>Welcome to the wiki!</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
              <Image source={MCSearch} style={styles.SearchImage} />
            </TouchableWithoutFeedback>
            <Text style={styles.homeBodyContainer}>
              <Text style={styles.highlight}>The body of this page will likely be used to show the users bookmarked pages when that functionality is implemented</Text>
            </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderRadius: 25,
    height: 56,
    width: 500,
    marginLeft: 50,
    marginTop: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },
  homeBodyContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderRadius: 25,
    height: 739.5,
    width: 550,
    marginLeft: 25,
    marginTop: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },
  SearchImage: {
    flex: 1,
    width: 50,
    height: 55,
    opacity: 0.5,
    marginTop: -55,
    marginLeft: 480,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
