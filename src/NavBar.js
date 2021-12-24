import React, { useState } from 'react';
import { HStack, Box, Icon, Text, Center, Pressable } from 'native-base';

const NavBar = ({ navigation }) => {
  const [selected, setSelected] = useState(1);

  const handleNavIconButton = screen => {
    setSelected(0);
    navigation.navigate(screen);
  };

  return (
    <Box flex={1} bg="white">
      <Center flex={1} />
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          onPress={() => handleNavIconButton('Songs')}>
          <Center>
            <Icon name="musical-notes" />
            <Text>Songs</Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          onPress={() => handleNavIconButton('Playlists')}>
          <Center>
            <Icon name="list" />
            <Text>Playlists</Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          onPress={() => handleNavIconButton('About')}>
          <Center>
            <Icon name="information-circle" />
            <Text>About</Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default NavBar;
