/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  // KeyboardAvoidingView, // Automatically pushes elements out from under keyboard
  // ActivityIndicator, // The spinning loader
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// import moment from 'moment';

// import SearchInput from './SearchInput';

import BG from './utils/RandomBG';
import Isaac from './assets/EGS_TheBindingofIsaacRepentance_NicalisIncEdmundMcmillen_S2-1200x1600-eb480826546ffb2ed1560ceec262b615.jpg';
import Minecraft from './assets/jbareham_191158_ply0958_decade_minecraft.jpg';

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

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const image = {
  //   uri: './assets/EGS_TheBindingofIsaacRepentance_NicalisIncEdmundMcmillen_S2-1200x1600-eb480826546ffb2ed1560ceec262b615.jpg',
  // };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <ImageBackground source={Minecraft} resizeMode="cover" style={styles.image}>
          <View>
            <Text style={styles.textStyle}>
              This will show content
              </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'rgba(0,0,0,0.2)',
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

export default App;
