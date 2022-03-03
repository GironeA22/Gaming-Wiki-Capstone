/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      {/* <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text> */}
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function MapResults() {
    fetch('https://minecraft-ids.grahamedgecombe.com/items.json')
      .then(res => res.json())
      .then(
        (result) => {
          setSearchResults(result.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          );
        }
      );
    return (
      searchResults.map((item, i) => (
        (searchTerm.toLowerCase() === item.name.toLowerCase()) ? <Text key={i}>{item.name}</Text> : null
      ))
    );
  }

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TextInput
            type="text"
            style={styles.searchBox}
            placeholder="Search a Minecraft Item (for now)"
            name="searchMCItems"
            onChangeText={(text) => setSearchTerm(text)}
            onSubmitEditing={MapResults}
          />
          <Section>
            <MapResults />
          </Section>
        </View>
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
    width: null,
    height: null,
    resizeMode: 'cover',
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
  searchBox: {
    backgroundColor: 'red',
    borderColor: 'black',
    textDecorationColor: 'hotpink',
  },
});

export default App;
