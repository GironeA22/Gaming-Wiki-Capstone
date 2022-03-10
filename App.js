/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Homepage from './Pages/Homepage';
import Searchpage from './Pages/Searchpage';
import Itempage from './Pages/Itempage';

const App: () => Node = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Homepage}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Search" component={Searchpage} />
        <Stack.Screen name="Item" component={Itempage} />
      </Stack.Navigator >
    </NavigationContainer>
</>
  );
};

export default App;
