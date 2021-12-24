import React from 'react';
import { Platform, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { NativeBaseProvider, Icon } from 'native-base';

import Home from './src/Home';
import Songs from './src/Songs';
import Playlists from './src/Playlists';
import About from './src/About';
import { name as appName } from './app.json';
import HomeIconOutline from './assets/icons/home-outline.svg';
import HomeIcon from './assets/icons/home.svg';
import ListOutline from './assets/icons/list-outline.svg';
import List from './assets/icons/list.svg';
import InfoOutline from './assets/icons/info-outline.svg';
import Info from './assets/icons/info.svg';
import MusicalNotesOutline from './assets/icons/musical-notes-outline.svg';
import MusicalNotes from './assets/icons/musical-notes.svg';

const Tab = createBottomTabNavigator();

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

const App = () => (
  <ApolloProvider client={client}>
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let IconName;
              if (route.name === 'Home') {
                IconName = focused ? HomeIcon : HomeIconOutline;
              }
              if (route.name === 'About') {
                IconName = focused ? 'information' : 'information-outline';
              }
              if (route.name === 'Songs') {
                IconName = focused ? 'musical-notes' : 'musical-notes-outline';
              }
              if (route.name === 'Playlists') {
                IconName = focused ? 'list' : 'list-outline';
              }
              return <IconName />;
            },
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Tab.Screen
            name="Songs"
            component={Songs}
            options={{ title: 'Songs' }}
          />
          <Tab.Screen
            name="Playlists"
            component={Playlists}
            options={{ title: 'Playlists' }}
          />
          <Tab.Screen
            name="About"
            component={About}
            options={{ title: 'About' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);
