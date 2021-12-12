import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { NativeBaseProvider } from 'native-base';

import Home from './src/Home';
import Songs from './src/Songs';
import Playlists from './src/Playlists';
import About from './src/About';

const Stack = createNativeStackNavigator();

const IP_ADDRESS_OF_THE_ANDROID_DEVICE = '10.0.2.2';

const apiUri = `http://${
  Platform.OS === 'ios' ? 'localhost' : IP_ADDRESS_OF_THE_ANDROID_DEVICE
}:4000/`;

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: apiUri,
});
console.log('🚀 ~ file: index.js ~ line 39 ~ link', link);

const client = new ApolloClient({ cache: cache, link: link });

const App = () => (
  <ApolloProvider client={client}>
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Songs" component={Songs} />
          <Stack.Screen name="Playlists" component={Playlists} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  </ApolloProvider>
);

export default App;
