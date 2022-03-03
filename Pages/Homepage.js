/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import React from 'react';

import MCSearch from '../assets/MinecraftSearchIcon.png';

export default function Homepage() {
  return (
    <>
      <Text style={styles.homeContainer}>Welcome to the wiki!</Text>
      <TouchableWithoutFeedback onPress={() => Alert.alert('This will lead to the search page')}>
      <Image source={MCSearch} style={styles.image} />
      </TouchableWithoutFeedback>
      <Text style={styles.homeBodyContainer}>
        <Text style={styles.highlight}>The body of this page will likely be used to show the users bookmarked pages when that functionality is implemented</Text>
      </Text>
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
    height: 805,
    width: 550,
    marginLeft: 25,
    marginTop: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },
  image: {
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
});
