import React from 'react';
import { HStack, Button, Icon, Text } from 'native-base';

const NavBar = ({ navigation }) => (
  <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
    <Button vertical onPress={() => navigation.navigate('Songs')}>
      <Icon name="musical-notes" />
      <Text>Songs</Text>
    </Button>
    <Button vertical onPress={() => navigation.navigate('Playlists')}>
      <Icon name="list" />
      <Text>Playlists</Text>
    </Button>
    <Button vertical onPress={() => navigation.navigate('About')}>
      <Icon name="information-circle" />
      <Text>About</Text>
    </Button>
  </HStack>
);

export default NavBar;
