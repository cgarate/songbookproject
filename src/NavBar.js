import React from 'react';
const { Navigation } = require('react-native-navigation');
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const NavBar = ({ navComponentId }) => {
  return (
    <Footer>
      <FooterTab>
        <Button
          vertical
          onPress={() => {
            Navigation.push(navComponentId, {
              component: {
                name: 'Songs',
              },
            });
          }}>
          <Icon name="musical-notes" />
          <Text>Songs</Text>
        </Button>
        <Button
          vertical
          onPress={() => {
            Navigation.push(navComponentId, {
              component: {
                name: 'Playlists',
              },
            });
          }}>
          <Icon name="list" />
          <Text>Playlists</Text>
        </Button>
        <Button
          vertical
          onPress={() => {
            Navigation.push(navComponentId, {
              component: {
                name: 'About',
              },
            });
          }}>
          <Icon name="information-circle" />
          <Text>About</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default NavBar;
