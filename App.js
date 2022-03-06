/* eslint-disable prettier/prettier */
import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator(
  //   {
  //   Home: {screen: Homepage},
  //   Search: {screen: Searchpage},
  //   // StatusBar: {screen: StatusBar},
  // }
);

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Homepage from './Pages/Homepage';
import Minecraft from './assets/jbareham_191158_ply0958_decade_minecraft.jpg';
import Searchpage from './Pages/Searchpage';

// const Section = ({ children, title }): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       {/* <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text> */}
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  // function MapResults() {
  //   fetch('https://minecraft-ids.grahamedgecombe.com/items.json')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setSearchResults(result.filter(item =>
  //           item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  //         );
  //       }
  //     );
  //   return (
  //     searchResults.map((item, i) => (
  //       (searchTerm.toLowerCase() === item.name.toLowerCase()) ? <Text key={i}>{item.name}</Text> : null
  //     ))
  //   );
  // }

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Homepage}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Search" component={Searchpage} />
      </Stack.Navigator >
    </NavigationContainer>
    {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
      <ImageBackground source={Minecraft} resizeMode="cover" style={styles.image}>
      <View>
        <Homepage />
      </View>
      </ImageBackground>
    </ScrollView> */}
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
