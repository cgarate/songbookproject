import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'Home';
import Songs from 'Songs';
import Playlists from 'Playlists';
import About from 'About';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
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
            return <Icon size={size} color={color} name={iconName} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
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
  );
};

export default RootNavigator;
