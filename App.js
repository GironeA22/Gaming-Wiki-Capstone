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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {getLocationId, getWeather} from './utils/api';
import getImageForWeather from './utils/getImageForWeather';
import getIconForWeather from './utils/getIconForWeather';

import moment from 'moment';

import SearchInput from './SearchInput';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
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

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// CLASS
export default class App extends React.Component {
  constructor(props) {
    super(props);

    // bind SCOPE
    this.handleDate = this.handleDate.bind(this);

    // STATE
    this.state = {
      loading: false,
      error: false,

      location: '',
      temperature: 0,
      weather: '',
      created: '2000-01-01T00:00:00.000000Z'
    };

  }
  // Life cycle
  componentDidMount() {
    this.handleUpdateLocation('Kiev');
  }

  // Parse of date
  handleDate = date => moment(date).format("hh:mm:ss");

  // Update current location
  handleUpdateLocation = async city => {
    if (!city) return;

    this.setState({ loading: true }, async () => {
      try {

        const ID = await getLocationId(city);
        const { location, weather, temperature, created } = await getWeather(ID);

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
          created,
        });


      } catch (e) {

        this.setState({
          loading: false,
          error: true,
        });

      }
    });
  };

  // RENDERING
  render() {

    // GET values of state
    const { loading, error, location, weather, temperature, created } = this.state;

    // Activity
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">

        <StatusBar barStyle="light-content" />

        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >

          <View style={styles.detailsContainer}>

            <ActivityIndicator animating={loading} color="white" size="large" />

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    😞 Could not load your city or weather. Please try again later...
                  </Text>
                )}
                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {getIconForWeather(weather)} {location}
                    </Text>
                    <Text style={[styles.smallText, styles.textStyle]}>
                       {weather}
                    </Text>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {`${Math.round(temperature)}°`}
                    </Text>
                  </View>
                )}

                <SearchInput
                  placeholder="Search any city"
                  onSubmit={this.handleUpdateLocation}
                />

                {!error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Last update: {this.handleDate(created)}
                  </Text>
                )}

              </View>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
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
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});

// export default App;
