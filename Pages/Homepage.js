/* eslint-disable prettier/prettier */

import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    KeyboardAvoidingView, // Automatically pushes elements out from under keyboard
    ActivityIndicator, // The spinning loader
  } from 'react-native';

  import React from 'react';

  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

  const image = {uri: '../assets/jbareham_191158_ply0958_decade_minecraft.jpg'};

export default function Homepage() {
  return (
    <>
    <ImageBackground source={image}>
 <Text style={styles.homeContainer}>Welcome to the wiki!</Text>
 </ImageBackground>
 </>
  );
}

const Section = ({ children, title }): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  };

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
    },
    imageContainer: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
    detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingHorizontal: 20,
    },
    textStyle: {
      textAlign: 'center',
      color: 'white',
    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },
  });
