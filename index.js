import React from 'react';
import { Platform, AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { NativeBaseProvider } from 'native-base';
import RootNavigator from './src/RootNavigator';

const IP_ADDRESS_OF_THE_ANDROID_DEVICE = '10.0.2.2';

const apiUri = `http://${
  Platform.OS === 'ios' ? 'localhost' : IP_ADDRESS_OF_THE_ANDROID_DEVICE
}:4000/`;

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: apiUri,
});

const client = new ApolloClient({ cache: cache, link: link });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <RootNavigator />
      </NativeBaseProvider>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
