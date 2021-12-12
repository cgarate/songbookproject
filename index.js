/**
 * @format
 */
import React from 'react';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ApolloClient, ApolloProvider, InMemoryCache } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

import App from './src/App';
import Songs from './src/Songs';
import Playlists from './src/Playlists';
import About from './src/About';

const registerComponent = (name, Comp, client) => {
  Navigation.registerComponent(
    name,
    () => props =>
      (
        <ApolloProvider client={client}>
          <Comp {...props} />
        </ApolloProvider>
      ),
    () => Comp,
  );
};

const IP_ADDRESS_OF_THE_ANDROID_DEVICE = '10.0.2.2';

const apiUri = `http://${
  Platform.OS === 'ios' ? 'localhost' : IP_ADDRESS_OF_THE_ANDROID_DEVICE
}:4000/`;

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: apiUri,
});
console.log("🚀 ~ file: index.js ~ line 39 ~ link", link)

const client = new ApolloClient({ cache: cache, link: link });

registerComponent('Home', App, client);
registerComponent('Songs', Songs, client);
registerComponent('Playlists', Playlists, client);
registerComponent('About', About, client);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
