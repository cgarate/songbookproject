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
import { NativeBaseProvider } from 'native-base';

import Home from 'Home';
import Songs from 'Songs';
import Playlists from 'Playlists';
import About from 'About';
import { name as appName } from './app.json';
import Icon from 'react-native-vector-icons/Ionicons';

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
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              }
              if (route.name === 'About') {
                iconName = focused
                  ? 'information-circle'
                  : 'information-circle-outline';
              }
              if (route.name === 'Songs') {
                iconName = focused ? 'musical-notes' : 'musical-notes-outline';
              }
              if (route.name === 'Playlists') {
                iconName = focused ? 'list' : 'list-outline';
              }
              return <Icon name={iconName} />;
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
